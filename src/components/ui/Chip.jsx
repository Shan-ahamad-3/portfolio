/**
 * Honest skill/category chip badge with light/dark color accents.
 */
export default function Chip({ label, level, variant = "default" }) {
  const isPrimary = variant === "primary";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
        isPrimary
          ? "bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-200 border-teal-200 dark:border-teal-800"
          : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700"
      }`}
    >
      <span>{label}</span>
      {level && (
        <span className="text-[10px] font-normal opacity-75 border-l border-slate-300 dark:border-slate-600 pl-1.5">
          {level}
        </span>
      )}
    </span>
  );
}

