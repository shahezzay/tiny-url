// Backend integration point. MOCK = false karte hi real endpoints hit honge.
const MOCK = true;
const BASE = import.meta.env.VITE_API_URL || "http://localhost:5050";

const post = async (path, body) => {
  const res = await fetch(BASE + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + (localStorage.getItem("token") || ""),
    },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
};

const slug = () => Math.random().toString(36).slice(2, 8);

export const shortenUrl = async (d) =>
  MOCK ? { shortUrl: `https://lnk.sh/${d.alias || slug()}` } : post("/url/shorten", d);
export const login = async (d) =>
  MOCK ? { token: "mock", user: { email: d.email } } : post("/user/login", d);
export const register = async (d) =>
  MOCK ? { token: "mock", user: { email: d.email } } : post("/user/register", d);
export const contactSales = async (d) => (MOCK ? { ok: true } : post("/contact/sales", d));
export const checkout = async (d) => (MOCK ? { ok: true } : post("/subscribe/checkout", d));
