import IconBox from "./ui/IconBox";
import { PLATFORM, EXTRA } from "../data/content";

export default function Platform() {
  return (
    <section id="platform" className="scroll-mt-16 py-70px">
      <div className="mx-auto max-w-1100px px-5">
        <h2 className="text-center text-4xl font-extrabold">Powerful Platform</h2>
        <p className="mx-auto mb-11 mt-3.5 max-w-2xl text-center text-lg leading-relaxed text-muted">
          Cutting-edge technology to ensure your links work perfectly, with unmatched speed, security and reliability.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {PLATFORM.map((p) => (
            <div key={p.title} className="flex gap-5 rounded-2xl border border-black/5 p-8 text-slate-900" style={{ background: p.bg }}>
              <IconBox bg={p.color}>{p.icon}</IconBox>
              <div>
                <h4 className="mb-2 text-xl font-bold">{p.title}</h4>
                <p className="leading-relaxed text-slate-600">{p.text}</p>
                <em className="mt-3 block text-[13px] font-semibold not-italic" style={{ color: p.color }}>✦ {p.tag}</em>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-surface p-9 text-center">
          <h3 className="mb-6 text-xl font-bold">Additional Features</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {EXTRA.map((e) => (
              <div key={e.title} className="flex flex-col items-center">
                <IconBox size="sm" bg="#e0ebff" className="mb-2.5 text-ink!">{e.icon}</IconBox>
                <h5 className="font-semibold">{e.title}</h5>
                <p className="mt-1.5 text-sm leading-normal text-muted">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
