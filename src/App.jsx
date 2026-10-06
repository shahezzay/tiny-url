import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
import Results from "./components/Results";
import Solutions from "./components/Solutions";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import Toast from "./components/ui/Toast";

export default function App() {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(null); // "login" | "register" | "sales"
  const [toast, setToast] = useState("");

  const say = (msg) => { setToast(msg); setTimeout(() => setToast(""), 2400); };
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const signOut = () => { setUser(null); localStorage.removeItem("token"); say("Signed out"); };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-page text-ink">
        <Navbar user={user} dark={dark} onToggleTheme={() => setDark(!dark)} onAuth={setModal} onSignOut={signOut} go={go} />
        <Hero say={say} onAuth={setModal} go={go} />
        <Platform />
        <Results />
        <Solutions say={say} onAuth={setModal} go={go} />
        <Pricing user={user} onAuth={setModal} say={say} />
        <Footer go={go} say={say} />
        <AuthModal kind={modal} setKind={setModal} onClose={() => setModal(null)} onUser={setUser} say={say} />
        <Toast message={toast} />
      </div>
    </div>
  );
}
