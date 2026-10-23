import Anthropic from "@anthropic-ai/sdk";

// "Tanya ArahAssist" backend. The client owns the tool loop (tools read the live
// bus simulation in the browser); this route only relays one Messages API turn.
// Without ANTHROPIC_API_KEY it returns 503 and the client falls back to the FAQ.

const ALLOWED_TOOLS = new Set(["cari_rute", "buat_itinerary"]);
const MAX_MESSAGES = 24;

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) {
    return Response.json({ error: "AI not configured" }, { status: 503 });
  }

  let body: { system?: unknown; messages?: unknown; tools?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const system = typeof body.system === "string" ? body.system.slice(0, 20000) : "";
  const messages = Array.isArray(body.messages) ? (body.messages as Anthropic.Beta.BetaMessageParam[]) : [];
  const tools = (Array.isArray(body.tools) ? body.tools : []).filter(
    (t): t is Anthropic.Beta.BetaTool => !!t && typeof t === "object" && ALLOWED_TOOLS.has((t as { name?: string }).name ?? ""),
  );
  if (!messages.length || messages.length > MAX_MESSAGES) {
    return Response.json({ error: "Bad conversation" }, { status: 400 });
  }

  const client = new Anthropic();
  try {
    const res = await client.beta.messages.create({
      model: "claude-opus-5-5",
      max_tokens: 16000,
      output_config: { effort: "low" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      system,
      messages,
      tools,
    } as Anthropic.Beta.MessageCreateParamsNonStreaming);

    if (res.stop_reason === "refusal") {
      return Response.json({ error: "Refused" }, { status: 422 });
    }
    return Response.json({ content: res.content, stop_reason: res.stop_reason });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return Response.json({ error: "Rate limited" }, { status: 429 });
    }
    if (error instanceof Anthropic.APIError) {
      console.error(`Claude API error ${error.status}:`, error.message);
      return Response.json({ error: "AI error" }, { status: 502 });
    }
    console.error("Claude request failed:", error);
    return Response.json({ error: "AI unavailable" }, { status: 502 });
  }
}
