import type { ReactNode } from 'react';

interface ServiceBadgeProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export default function ServiceBadge({ icon, label, className = '' }: ServiceBadgeProps) {
  return (
    <div
      className={`flex items-center gap-[5px] px-2.5 py-2.5 bg-white rounded-[5px] shadow-[0px_6px_20px_0px_rgba(0,0,0,0.10)] w-max hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ${className}`}
    >
      <div className="w-6 h-6 flex items-center justify-center text-red-700 shrink-0">
        {icon}
      </div>
      <span className="text-black text-xs font-medium font-inter whitespace-nowrap">{label}</span>
    </div>
  );
}
