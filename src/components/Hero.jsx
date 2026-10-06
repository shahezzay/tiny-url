import { useState } from "react";
import Button from "./ui/Button";
import { shortenUrl } from "../services/api";
import { OPTIONS, STATS } from "../data/content";

const field = "min-w-40 flex-1 rounded-lg border border-line bg-surface px-3 py-2.5 text-ink outline-none focus:border-blue-600";

export default function Hero({ say, onAuth, go }) {
  const [url, setUrl] = useState("");
  const [on, setOn] = useState({});
  const [form, setForm] = useState({ alias: "", password: "", expires: "" });
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);
  const [banner, setBanner] = useState(true);

  const paste = async () => {
    try { setUrl(await navigator.clipboard.readText()); }
    catch { say("Allow clipboard access to paste"); }
  };

  const submit = async () => {
    if (!/^https?:\/\/.+\..+/i.test(url.trim())) return say("Enter a valid URL starting with http:// or https://");
    setBusy(true);
    try {
      setResult(await shortenUrl({
        url: url.trim(),
        alias: on.alias ? form.alias : "",
        password: on.password ? form.password : "",
        expiresAt: on.expires ? form.expires : "",
      }));
    } catch (e) { say(e.message); }
    setBusy(false);
  };

  const copy = () => { navigator.clipboard?.writeText(result.shortUrl); say("Link copied"); };

  return (
    <section id="top" className="bg-linear-to-b from-blue-50 to-page px-5 pt-12 text-center dark:from-[#101a33]">
      <h1 className="mx-auto max-w-3xl text-[clamp(34px,6vw,56px)] font-extrabold leading-[1.12] tracking-tight">
        Transform your <span className="bg-linear-to-r from-blue-600 to-violet-700 bg-clip-text text-transparent">long links</span> into powerful URLs
      </h1>
      <p className="mx-auto mb-9 mt-6 max-w-xl text-lg leading-normal text-muted">
        Shorten, customize and track your links with advanced analytics. The complete solution to manage your digital campaigns.
      </p>

      <div className="mx-auto max-w-806px rounded-3xl border border-line bg-surface p-7 text-left shadow-2xl shadow-slate-900/10">
        <div className="flex flex-col gap-3.5 md:flex-row">
          <div className="flex h-14 flex-1 items-center rounded-xl border border-line pl-4 pr-2.5 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-600/15">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder="Paste your URL here... (e.g. https://mysite.com/very-long-link)"
              className="min-w-0 flex-1 bg-transparent outline-none"
            />
            <button onClick={paste} className="rounded-lg bg-blue-100 px-3 py-1.5 text-[13px] font-semibold text-blue-600">📋 Paste</button>
          </div>
          <button
            disabled={!url.trim() || busy}
            onClick={submit}
            className="h-14 whitespace-nowrap rounded-xl bg-blue-600 px-7 text-[17px] font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
          >
            ✨ {busy ? "Shortening..." : "Shorten Now"}
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {OPTIONS.map((o) => (
            <button
              key={o.key}
              onClick={() => setOn({ ...on, [o.key]: !on[o.key] })}
              className={`flex flex-col items-center gap-2.5 rounded-2xl border-2 px-2 py-4 text-sm font-semibold ${on[o.key] ? "border-blue-600 bg-blue-600/10" : "border-line bg-surface"}`}
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg text-ink" style={{ background: o.bg }}>{o.icon}</span>
              {o.label}
            </button>
          ))}
        </div>

        {(on.alias || on.password || on.expires) && (
          <div className="mt-3.5 flex flex-wrap gap-2.5">
            {on.alias && <input className={field} placeholder="Custom alias (e.g. my-sale)" value={form.alias} onChange={(e) => setForm({ ...form, alias: e.target.value.replace(/\s/g, "-") })} />}
            {on.password && <input className={field} type="password" placeholder="Link password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />}
            {on.expires && <input className={field} type="date" value={form.expires} onChange={(e) => setForm({ ...form, expires: e.target.value })} />}
          </div>
        )}

        {result && (
          <div className="mt-4 flex items-center gap-3.5 rounded-xl border border-dashed border-blue-600 bg-blue-600/10 p-3.5">
            <div className="min-w-0 flex-1">
              <small className="block text-muted">Your short link</small>
              <a href={result.shortUrl} target="_blank" rel="noreferrer" className="break-all text-lg font-bold text-blue-600">{result.shortUrl}</a>
            </div>
            {on.qr && <img alt="QR code" width="72" height="72" src={"https://api.qrserver.com/v1/create-qr-code/?size=144x144&data=" + encodeURIComponent(result.shortUrl)} />}
            <Button onClick={copy}>Copy</Button>
          </div>
        )}
      </div>

      <p className="mt-12 text-muted">Join thousands of professionals who trust ShortenLink</p>
      <div className="my-5 flex flex-wrap justify-center gap-3.5">
        <Button variant="purple" onClick={() => onAuth("register")}>Start Free →</Button>
        <Button variant="ghost" onClick={() => go("solutions")}>
          <i className="mr-1.5 rounded-full bg-fuchsia-500 px-2 py-0.5 text-[10px] font-extrabold not-italic text-white">NEW</i>Discover Pages →
        </Button>
      </div>
      <p className="text-[13px] text-muted">🐝 No credit card • ⚡ 30-second setup • 🔒 100% Secure</p>

      <div className="my-11 flex flex-wrap justify-center gap-8 md:gap-24">
        {STATS.map(([v, l]) => (
          <div key={l}><b className="block text-2xl text-slate-600 dark:text-slate-300">{v}</b><span className="text-[13px] text-muted">{l}</span></div>
        ))}
      </div>

      {banner && (
        <div className="relative mx-auto mb-10 flex max-w-808px flex-col items-center gap-5 rounded-3xl bg-linear-to-r from-fuchsia-600 via-violet-600 to-indigo-500 px-9 py-7 text-center text-white shadow-xl shadow-violet-600/30 md:flex-row md:text-left">
          <div className="grid h-60px w-60px shrink-0 place-items-center rounded-2xl bg-white/20 text-2xl">✨</div>
          <div className="flex-1">
            <i className="mr-1.5 rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold not-italic text-fuchsia-700">NEW</i>
            <small className="text-[11px] font-bold">INTRODUCING PAGES</small>
            <h3 className="my-1 text-xl font-bold">More than short links — build your full page in minutes</h3>
            <p className="text-[13px] leading-snug opacity-85">Bring links, socials, products and contacts together in one custom page. No code, built to convert.</p>
          </div>
          <Button variant="white" className="whitespace-nowrap" onClick={() => go("solutions")}>Explore Pages →</Button>
          <button onClick={() => setBanner(false)} className="absolute right-2.5 top-2.5 h-7 w-7 rounded-full bg-white/20" aria-label="Close">✕</button>
        </div>
      )}
    </section>
  );
}
