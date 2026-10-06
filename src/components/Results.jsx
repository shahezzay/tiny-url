import IconBox from "./ui/IconBox";
import { BIG_STATS, QUALITY } from "../data/content";

export default function Results() {
  const glass = "rounded-2xl border border-white/15 bg-white/10 px-6";
  return (
    <section className="bg-[radial-gradient(circle_at_50%_40%,#1e3a8a,#0b1226_75%)] py-20 text-center text-white">
      <div className="mx-auto max-w-1100px px-5">
        <IconBox size="lg" bg="linear-gradient(135deg,#3b82f6,#9333ea)" className="mx-auto mb-6">📊</IconBox>
        <h2 className="text-4xl font-extrabold">Results that Impress</h2>
        <p className="mx-auto mb-11 mt-3.5 max-w-2xl text-lg text-slate-300">
          Real numbers that demonstrate the trust and success of thousands of users around the world.
        </p>

        <div className="grid items-center gap-6 md:grid-cols-3">
          {BIG_STATS.map((s, i) => (
            <div key={s.title} className={`${glass} ${i === 1 ? "py-10" : "py-8"}`}>
              <b className="block text-6xl font-extrabold" style={{ color: s.color }}>{s.value}</b>
              <h4 className="mb-1 mt-1.5 text-xl font-bold">{s.title}</h4>
              <p className="text-sm text-slate-400">{s.text}</p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/15">
                <i className="block h-full" style={{ width: s.width + "%", background: s.color }} />
              </div>
            </div>
          ))}
        </div>

        <div className={`${glass} mt-8 py-8`}>
          <h4 className="text-xl font-bold">Quality Guarantees</h4>
          <p className="mb-6 text-slate-400">Metrics that prove our excellence</p>
          <div className="grid gap-6 md:grid-cols-3">
            {QUALITY.map((q) => (
              <div key={q.label} className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-5">
                <IconBox size="sm" bg={q.bg}>{q.icon}</IconBox>
                <b className="text-3xl" style={{ color: q.color }}>{q.value}</b>
                <span className="text-sm font-semibold">{q.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
