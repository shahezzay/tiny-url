import { useState } from "react";
import Button from "./ui/Button";
import { checkout } from "../services/api";
import { PLANS } from "../data/content";

export default function Pricing({ user, onAuth, say }) {
  const [annual, setAnnual] = useState(true);

  const choose = async (p) => {
    if (p.monthly === 0) return user ? say("You're on the Free plan") : onAuth("register");
    if (!user) return onAuth("login");
    try {
      await checkout({ plan: p.name, billing: annual ? "annual" : "monthly" });
      say(`${p.name} plan selected`);
    } catch (e) { say(e.message); }
  };

  const tab = (on) => `relative rounded-xl px-6 py-2.5 font-semibold ${on ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white" : "text-muted"}`;

  return (
    <section id="plans" className="scroll-mt-16 bg-linear-to-b from-page to-blue-50 py-70px dark:to-page">
      <div className="mx-auto max-w-1100px px-5">
        <h2 className="text-center text-4xl font-extrabold">Choose your Plan</h2>
        <p className="mx-auto mb-11 mt-3.5 max-w-2xl text-center text-lg text-muted">
          Flexible plans for all needs, from personal projects to large enterprises.
        </p>

        <div className="mx-auto mb-12 flex w-fit rounded-2xl bg-surface p-1.5 shadow-md">
          <button className={tab(annual)} onClick={() => setAnnual(true)}>
            Annual<i className="absolute -right-2 -top-3 rounded-full bg-amber-500 px-2 py-0.5 text-[11px] font-bold not-italic text-white">-15%</i>
          </button>
          <button className={tab(!annual)} onClick={() => setAnnual(false)}>Monthly</button>
        </div>

        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative rounded-[20px] bg-surface px-5 py-7 text-center shadow-lg shadow-slate-900/5 ${p.popular ? "-translate-y-3.5 border-2 border-indigo-200 pb-9" : ""}`}>
              {p.popular && (
                <i className="absolute left-1/2 top--14px -translate-x-1/2 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 px-4 py-1 text-xs font-extrabold not-italic text-white">POPULAR</i>
              )}
              <span className="mx-auto mb-2.5 grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-lg dark:bg-slate-700">{p.icon}</span>
              <h4 className="text-xl font-bold">{p.name}</h4>
              <b className="block text-4xl font-extrabold" style={{ color: p.color }}>${annual ? p.annual : p.monthly}</b>
              <small className="block text-[13px] text-muted">{p.monthly === 0 ? "Forever" : "per month"}</small>
              {p.save && annual && <em className="mt-1 block text-xs font-semibold not-italic text-green-600">Save {p.save}</em>}

              <ul className="mb-6 mt-5 text-left">
                {p.yes.map((x) => <li key={x} className="my-3 flex gap-2.5 text-sm text-slate-600 dark:text-slate-300"><span className="text-green-600">✓</span>{x}</li>)}
                {p.no.map((x) => <li key={x} className="my-3 flex gap-2.5 text-sm text-slate-600 opacity-45 dark:text-slate-300"><span className="text-gray-400">✕</span>{x}</li>)}
              </ul>
              <Button className={`w-full shadow-md ${p.dark ? "text-slate-800!" : ""}`} style={{ background: p.grad }} onClick={() => choose(p)}>{p.cta}</Button>
            </div>
          ))}
        </div>

        <p className="mt-11 text-center text-muted">Not sure which plan to choose? Start free and upgrade when you need it.</p>
        <div className="mt-5 flex items-center justify-center gap-6">
          <Button variant="purple" onClick={() => onAuth("register")}>Start Free Now</Button>
          <a onClick={() => onAuth("sales")} className="cursor-pointer font-semibold underline">Contact Sales</a>
        </div>
      </div>
    </section>
  );
}
