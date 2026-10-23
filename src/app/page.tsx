import ArahAssistApp from "@/components/ArahAssistApp";

type Search = Promise<{ lang?: string; demo?: string; speed?: string }>;

// Demo controls for the pitch: ?lang=en, ?demo=results|ride, ?speed=20
export default async function Home({ searchParams }: { searchParams: Search }) {
  const q = await searchParams;
  const demo = q.demo === "results" ? "Pilihan rute" : q.demo === "ride" ? "Naik bus" : "Beranda";
  const speed = Math.min(40, Math.max(4, Number(q.speed) || 20));
  return <ArahAssistApp startLang={q.lang === "en" ? "English" : "Indonesia"} demoStart={demo} simSpeed={speed} />;
}
