import { useState, useEffect } from "react";
import Button from "./ui/Button";
import IconBox from "./ui/IconBox";
import { SLIDES, COUNTRIES } from "../data/content";

const BARS = [3, 5, 4, 6, 5, 8, 7, 9, 8, 10, 9, 11];

export default function Solutions({ say, onAuth, go }) {
  const [i, setI] = useState(0);
  const s = SLIDES[i];

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="solutions" className="scroll-mt-16 py-70px">
      <div className="mx-auto max-w-1100px px-5">
        <h2 className="text-center text-4xl font-extrabold">Smart Solutions</h2>
        <p className="mx-auto mb-11 mt-3.5 max-w-2xl text-center text-lg text-muted">
          Discover how our tools can transform how you manage and optimize your links.
        </p>

        <div className="grid min-h-440px overflow-hidden rounded-[26px] bg-surface shadow-2xl shadow-slate-900/10 md:grid-cols-2">
          <div className="p-8 text-left md:p-11">
            <IconBox bg={s.bg} className="text-green-600!">📊</IconBox>
            <i className="ml-1.5 mt-2.5 inline-block rounded-full px-2.5 py-1 align-top text-[11px] font-extrabold not-italic text-white" style={{ background: s.color }}>{s.tag}</i>
            <h2 className="mb-4 mt-5 text-left text-4xl font-extrabold leading-tight">
              {s.head}<span style={{ color: s.color }}>{s.hl}</span>
            </h2>
            <p className="mb-4 leading-relaxed text-muted">{s.text}</p>
            <ul>
              {s.list.map((x) => (
                <li key={x} className="my-2 text-[15px] text-muted"><span className="mr-2" style={{ color: s.color }}>✓</span>{x}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button style={{ background: s.color }} onClick={() => (i === 0 ? say("Live demo coming soon") : onAuth("register"))}>{s.cta}</Button>
              <Button variant="outline" style={{ color: s.color, borderColor: s.color }} onClick={() => go("plans")}>View Plans</Button>
            </div>
          </div>

          <div className="grid place-items-center p-8 transition-colors duration-500" style={{ background: s.bg }}>
            <div className="relative w-full max-w-270px rounded-2xl bg-white p-5 text-slate-900 shadow-2xl">
              <small className="text-[11px] tracking-wider text-slate-500">CLICKS TODAY</small>
              <b className="block text-[22px]">{(1247 + i * 380).toLocaleString()}</b>
              <i className="absolute right-4 top-5 rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-bold not-italic text-green-600">● LIVE</i>
              <div className="my-3.5 flex h-11 items-end gap-1">
                {BARS.map((h, k) => <i key={k} className="block flex-1 rounded-sm" style={{ height: h * 3 + 6, background: s.color }} />)}
              </div>
              {COUNTRIES.map(([n, v]) => (
                <div key={n} className="my-1.5 flex items-center gap-2 text-[11px]">
                  <span className="w-24">{n}</span>
                  <div className="h-1 flex-1 rounded bg-gray-200"><i className="block h-full rounded" style={{ width: v + "%", background: s.color }} /></div>
                  <span>{v}%</span>
                </div>
              ))}
              <div className="mt-3 flex justify-between border-t border-gray-200 pt-2.5 text-[11px] text-slate-500">
                <span>Conversion rate</span><b style={{ color: s.color }}>+8.5%</b>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2.5">
          {SLIDES.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className={`h-3 w-3 rounded-full ${k === i ? "bg-blue-600" : "bg-slate-300"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
