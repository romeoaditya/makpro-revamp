import { Icon } from "@iconify/react";
import type { ClientItem } from "../../data/clientsData";

interface ClientCardProps {
  client: ClientItem;
}

export default function ClientCard({ client }: ClientCardProps) {
  return (
    <div className="flex flex-col bg-neutral-50 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.10)] p-5 hover:shadow-md transition-shadow">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm shrink-0">
        <img
          src={client.logo}
          alt={client.name}
          className="w-14 h-14 object-contain"
        />
      </div>
      <h4 className="text-zinc-800 text-sm font-bold uppercase leading-snug mb-3">
        {client.name}
      </h4>
      <p className="text-zinc-800/70 text-xs font-normal leading-relaxed flex-1 mb-5">
        {client.desc}
      </p>
      <button className="flex items-center gap-1.5 text-red-700 text-xs font-medium hover:gap-2.5 transition-all self-start">
        View More
        <Icon icon="formkit:arrowright" width={14} height={14} />
      </button>
    </div>
  );
}
