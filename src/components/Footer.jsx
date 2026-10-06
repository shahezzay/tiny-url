import { FOOTER } from "../data/content";

const link = "mb-3 block cursor-pointer text-[13px] leading-normal hover:text-white";

export default function Footer({ go, say }) {
  return (
    <footer id="terms" className="scroll-mt-16 bg-gray-900 pb-6 pt-14 text-slate-400">
      <div className="mx-auto grid max-w-1100px gap-10 px-5 md:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div>
          <div className="mb-3.5 flex items-center gap-2 text-lg font-bold text-white"><span>🔗</span>LinkShort</div>
          <p className="text-[13px] leading-relaxed">Efficient, secure and accessible URL shortening service. We transform long links into short and powerful experiences.</p>
        </div>
        <div>
          <h5 className="mb-4 font-semibold text-white">Features</h5>
          {FOOTER.features.map((x) => <a key={x} onClick={() => go("platform")} className={link}>{x}</a>)}
        </div>
        <div>
          <h5 className="mb-4 font-semibold text-white">Security</h5>
          {FOOTER.security.map((x) => <span key={x} className={link.replace("cursor-pointer ", "")}>🛡️ {x}</span>)}
        </div>
        <div>
          <h5 className="mb-4 font-semibold text-white">Contact & Legal</h5>
          <span className="mb-3 block text-[13px] leading-normal">📍 R. Gomes de Carvalho, 1105 - Vila Olímpia, São Paulo - SP</span>
          <a href="mailto:support@linkshort.app" className={link}>✉️ support@linkshort.app</a>
          {FOOTER.legal.map((x) => <a key={x} onClick={() => say(`${x} page coming soon`)} className={`${link} mt-4`}>{x}</a>)}
        </div>
      </div>
      <div className="mx-auto mt-9 flex max-w-1100px flex-wrap justify-between gap-2.5 border-t border-slate-800 px-5 pt-5 text-xs">
        <span>© 2026 <b className="text-blue-400">LinkShort</b>. All rights reserved.</span>
        <span>● System Operational &nbsp; ⏱ 27ms response &nbsp; 🛡 99.99% uptime</span>
      </div>
    </footer>
  );
}
