import { useState } from "react";
import Button from "./ui/Button";
import { NAV_LINKS } from "../data/content";

const LANGS = ["US EN", "BR PT", "ES ES"];

export default function Navbar({ user, dark, onToggleTheme, onAuth, onSignOut, go }) {
  const [lang, setLang] = useState(LANGS[0]);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <div className="mx-auto flex h-58px max-w-1120px items-center justify-between px-5">
        <a onClick={() => go("top")} className="flex cursor-pointer items-center gap-2">
          <span className="text-2xl">🔗</span>
          <span className="leading-none">
            <b className="bg-linear-to-r from-violet-700 to-cyan-600 bg-clip-text text-xl text-transparent">LinkShort</b>
            <small className="-mt-0.5 block text-[9px] font-semibold tracking-[.14em] text-muted">SMART LINKS</small>
          </span>
        </a>

        <nav className="hidden gap-8 font-medium text-muted md:flex">
          {NAV_LINKS.map((k) => (
            <a key={k} onClick={() => go(k)} className="cursor-pointer capitalize hover:text-blue-600">{k}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button onClick={() => setOpen(!open)} className="h-9 rounded-lg border border-line px-3 text-[13px] font-semibold">
              🌐 {lang} ▾
            </button>
            {open && (
              <div className="absolute right-0 top-11 min-w-28 rounded-lg border border-line bg-surface shadow-xl">
                {LANGS.map((l) => (
                  <a key={l} onClick={() => { setLang(l); setOpen(false); }} className="block cursor-pointer px-4 py-2 text-[13px] hover:bg-page">{l}</a>
                ))}
              </div>
            )}
          </div>
          <button onClick={onToggleTheme} title="Toggle theme" className="h-9 w-9 rounded-lg border border-line">{dark ? "☀️" : "🖥️"}</button>
          {user ? (
            <a onClick={onSignOut} className="hidden cursor-pointer font-medium text-muted sm:block">{user.email} · Sign out</a>
          ) : (
            <a onClick={() => onAuth("login")} className="hidden cursor-pointer px-2 font-medium text-muted sm:block">Sign In</a>
          )}
          <Button className="py-2! text-[15px]" onClick={() => onAuth("register")}>Start Free</Button>
        </div>
      </div>
    </header>
  );
}
