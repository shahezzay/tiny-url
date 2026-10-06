export const NAV_LINKS = ["platform", "solutions", "plans", "terms"];

export const OPTIONS = [
  { key: "alias", icon: "🔗", label: "Custom Link", bg: "#dbe7ff" },
  { key: "password", icon: "🛡️", label: "Password Protection", bg: "#d5f5e3" },
  { key: "expires", icon: "📅", label: "Set Expiration", bg: "#eddcff" },
  { key: "qr", icon: "▦", label: "Generate QR Code", bg: "#fdecc0" },
];

export const STATS = [
  ["10M+", "Links Shortened"],
  ["50K+", "Active Users"],
  ["99.9%", "Uptime"],
  ["24/7", "Support"],
];

export const PLATFORM = [
  { icon: "☁️", title: "Auto-Scalable Infrastructure", text: "100% auto-scalable cloud on AWS Lambda. Guarantees 99.99% availability and scales automatically with your needs.", tag: "99.99% guaranteed uptime", color: "#2563eb", bg: "#eef3ff" },
  { icon: "⚡", title: "High Performance", text: "Extreme speed with average response time of 27ms. Optimized to offer the best experience to your users.", tag: "27ms response time", color: "#16a34a", bg: "#eafaf1" },
  { icon: "🛡️", title: "Maximum Security", text: "Complete protection for your data with ISO 27001 and PCI-DSS compliance. Your links and information are always secure.", tag: "ISO 27001 certified", color: "#9333ea", bg: "#f6f0ff" },
  { icon: "📊", title: "Advanced Analytics", text: "Detailed metrics for each link, powerful insights and deep analysis to optimize your campaigns and strategies.", tag: "Real-time reports", color: "#ea580c", bg: "#fff3ec" },
];

export const EXTRA = [
  { icon: "🌐", title: "Global CDN", text: "Global distribution network for maximum speed anywhere in the world" },
  { icon: "🖱️", title: "Unlimited Clicks", text: "No limits on the number of clicks on your links, scale without worries" },
  { icon: "✨", title: "Robust API", text: "Latest generation serverless technology, secure, with superior performance and 24/7 availability so your business never stops." },
];

export const BIG_STATS = [
  { value: "10M+", title: "Links Shortened", text: "Processed successfully", color: "#60b8ff", width: 80 },
  { value: "100M+", title: "Clicks Processed", text: "With exceptional speed", color: "#4ade80", width: 100 },
  { value: "50K+", title: "Active Users", text: "Trust our platform", color: "#c084fc", width: 75 },
];

export const QUALITY = [
  { icon: "🛡️", value: "99,99%", label: "Uptime Guaranteed", color: "#6ee7b7", bg: "#22c55e" },
  { icon: "⏱️", value: "27ms", label: "Response Time", color: "#fcd34d", bg: "#f59e0b" },
  { icon: "⭐", value: "4.9/5", label: "User Satisfaction", color: "#fda4af", bg: "#ec4899" },
];

export const SLIDES = [
  { tag: "INSIGHTS", color: "#16a34a", bg: "#d9fbe8", head: "Decisions driven by ", hl: "real data.", text: "Track every click with detailed metrics and actionable insights. Make decisions based on real data.", list: ["Real-time reports", "Advanced geolocation", "Device analysis", "Conversion & UTM tracking"], cta: "See analytics in action" },
  { tag: "BRANDING", color: "#2563eb", bg: "#dce8ff", head: "Links that carry ", hl: "your brand.", text: "Use custom aliases and your own domains so every link looks like it belongs to you.", list: ["Custom aliases", "Custom domains", "Campaign grouping", "Link editing"], cta: "Customize links" },
  { tag: "SECURITY", color: "#9333ea", bg: "#ecdcff", head: "Protect what you ", hl: "share.", text: "Add passwords and expiration dates so only the right people open your links, for the right time.", list: ["Password protection", "Expiration dates", "Safe Browsing checks", "SSL encryption"], cta: "Secure my links" },
  { tag: "PAGES", color: "#db2777", bg: "#fde0ef", head: "Your full page, ", hl: "in minutes.", text: "Bring links, socials, products and contacts together in one custom page. No code needed.", list: ["Drag & drop builder", "QR codes included", "Mobile optimized", "Built-in analytics"], cta: "Explore Pages" },
];

export const COUNTRIES = [["BR Brazil", 42], ["US United States", 28], ["PT Portugal", 18]];

export const PLANS = [
  { name: "Free", icon: "🚀", monthly: 0, annual: 0, color: "#334155", grad: "#e5e7eb", dark: true, cta: "Start Free", yes: ["100 links", "50 QR Codes", "1 page", "Unlimited clicks"], no: ["Ad removal", "Custom domains", "Campaigns", "Advanced analytics", "Priority support"] },
  { name: "Basic", icon: "⭐", monthly: 6, annual: 5, save: "~17%", color: "#1d8cf8", grad: "linear-gradient(90deg,#38bdf8,#2563eb)", cta: "Choose Basic", yes: ["1,000 links", "500 QR Codes", "5 pages", "Unlimited clicks", "Ad removal"], no: ["Custom domains", "Campaigns", "Advanced analytics", "Priority support"] },
  { name: "Pro", icon: "💎", monthly: 16, annual: 13, save: "~19%", color: "#7c3aed", grad: "linear-gradient(90deg,#6366f1,#9333ea)", popular: true, cta: "Choose Pro", yes: ["5,000 links", "2,500 QR Codes", "15 pages", "Unlimited clicks", "5 custom domains", "50 campaigns", "Ad removal", "Advanced analytics"], no: ["Priority support"] },
  { name: "Premium", icon: "👑", monthly: 49, annual: 41, save: "~16%", color: "#f97316", grad: "linear-gradient(90deg,#fbbf24,#f97316)", cta: "Choose Premium", yes: ["15,000 links", "7,500 QR Codes", "30 pages", "Unlimited clicks", "15 custom domains", "150 campaigns", "Ad removal", "Advanced analytics", "Priority support"], no: [] },
];

export const FOOTER = {
  features: ["Link Shortener", "Pages Customization", "QR Code Generator", "Advanced Analytics", "Custom Domains", "Campaign Management"],
  security: ["Google Safe Browsing", "Virus Total Protection", "Norton Safe Web", "SSL Encryption"],
  legal: ["Terms of Use", "Privacy Policy", "Cookie Policy"],
};
