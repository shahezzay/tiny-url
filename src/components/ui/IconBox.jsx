export default function IconBox({ children, bg = "#2563eb", size = "md", className = "" }) {
  const s = size === "sm" ? "h-10 w-10 text-lg" : size === "lg" ? "h-14 w-14 text-2xl" : "h-11 w-11 text-xl";
  return (
    <span className={`grid shrink-0 place-items-center rounded-xl text-white ${s} ${className}`} style={{ background: bg }}>
      {children}
    </span>
  );
}
