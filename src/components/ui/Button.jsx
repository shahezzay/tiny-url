const VARIANTS = {
  blue: "bg-blue-600 text-white",
  purple: "bg-gradient-to-r from-indigo-600 to-violet-600 text-white",
  white: "bg-white text-fuchsia-800",
  ghost: "bg-surface text-ink border border-fuchsia-200",
  outline: "bg-transparent border-2",
};

export default function Button({ variant = "blue", className = "", ...props }) {
  return (
    <button
      {...props}
      className={`rounded-lg px-5 py-2.5 font-bold transition hover:-translate-y-px hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 ${VARIANTS[variant]} ${className}`}
    />
  );
}
