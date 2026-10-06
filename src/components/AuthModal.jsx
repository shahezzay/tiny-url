import Button from "./ui/Button";
import { login, register, contactSales } from "../services/api";

const input = "w-full rounded-lg border border-line bg-surface px-3.5 py-3 text-ink outline-none focus:border-blue-600";
const TITLES = { login: "Welcome back", register: "Create your free account", sales: "Contact Sales" };
const CTA = { login: "Sign In", register: "Start Free", sales: "Send message" };

export default function AuthModal({ kind, setKind, onClose, onUser, say }) {
  if (!kind) return null;

  const submit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    try {
      if (kind === "sales") {
        await contactSales(data);
        say("Message sent. We'll contact you soon.");
      } else {
        const r = await (kind === "login" ? login : register)(data);
        localStorage.setItem("token", r.token);
        onUser(r.user);
        say(kind === "login" ? "Signed in" : "Account created");
      }
      onClose();
    } catch (err) { say(err.message); }
  };

  return (
    <div onClick={onClose} className="fixed inset-0 z-100 grid place-items-center bg-slate-900/60 p-4">
      <form onClick={(e) => e.stopPropagation()} onSubmit={submit} className="relative flex w-full max-w-sm flex-col gap-3.5 rounded-2xl bg-surface p-8 text-ink">
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-2.5 top-2.5 h-7 w-7 rounded-full bg-page">✕</button>
        <h3 className="text-xl font-bold">{TITLES[kind]}</h3>
        {kind === "sales" && <input name="name" placeholder="Full name" required className={input} />}
        <input name="email" type="email" placeholder="Email address" required className={input} />
        {kind === "sales"
          ? <textarea name="message" rows={3} placeholder="How can we help?" required className={input} />
          : <input name="password" type="password" placeholder="Password" minLength={6} required className={input} />}
        <Button className="w-full">{CTA[kind]}</Button>
        {kind !== "sales" && (
          <p className="text-center text-[13px] text-muted">
            {kind === "login" ? "New here? " : "Already registered? "}
            <a onClick={() => setKind(kind === "login" ? "register" : "login")} className="cursor-pointer font-semibold text-blue-600">
              {kind === "login" ? "Create an account" : "Sign in"}
            </a>
          </p>
        )}
      </form>
    </div>
  );
}
