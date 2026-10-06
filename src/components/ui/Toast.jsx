export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-6 left-1/2 z-200 -translate-x-1/2 rounded-xl bg-slate-900 px-6 py-3 text-sm text-white shadow-2xl">
      {message}
    </div>
  );
}
