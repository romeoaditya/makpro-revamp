interface StatBadgeProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function StatBadge({
  title,
  subtitle,
  className = "",
}: StatBadgeProps) {
  return (
    <div
      className={`absolute bg-white rounded-xl shadow-[0px_8px_24px_rgba(0,0,0,0.12)] px-4 py-2.5 flex flex-col items-center justify-center z-30 transition-transform hover:scale-105 ${className}`}
    >
      <span className="text-red-700 text-xl font-extrabold leading-tight">
        {title}
      </span>
      <span className="text-neutral-500 text-[11px] font-medium whitespace-nowrap">
        {subtitle}
      </span>
    </div>
  );
}
