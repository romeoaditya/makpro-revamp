import { Icon } from "@iconify/react";
import { categories } from "../../data/clientsData";

interface FilterSidebarProps {
  selectedCategories: string[];
  isCategoryOpen: boolean;
  onToggleCategory: (value: string) => void;
  onClearFilter: () => void;
  onToggleCategoryOpen: () => void;
  countByCategory: (cat: string) => number;
}

export default function FilterSidebar({
  selectedCategories,
  isCategoryOpen,
  onToggleCategory,
  onClearFilter,
  onToggleCategoryOpen,
  countByCategory,
}: FilterSidebarProps) {
  return (
    <div className="hidden lg:block w-[260px] shrink-0">
      <div className="flex items-center gap-2 mb-4">
        <Icon
          icon="mdi:filter"
          width={20}
          height={20}
          className="text-zinc-800"
        />
        <span className="text-zinc-800 text-sm font-semibold">Filter</span>
      </div>
      <div className="w-full h-px bg-black/10 mb-4" />

      <button
        onClick={onToggleCategoryOpen}
        className="flex items-center justify-between w-full mb-2 px-2.5 py-2 hover:bg-neutral-50 rounded-lg transition-colors"
      >
        <span className="text-black/80 text-sm font-semibold">Category</span>
        <Icon
          icon="mdi:chevron-down"
          width={20}
          height={20}
          className={`text-zinc-800 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`flex flex-col gap-1 overflow-hidden transition-all duration-200 ${isCategoryOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {categories.map((cat) => {
          const isChecked = selectedCategories.includes(cat.value);
          return (
            <button
              key={cat.value}
              onClick={() => onToggleCategory(cat.value)}
              className="flex items-center gap-2.5 px-2.5 py-2 hover:bg-neutral-50 rounded-lg transition-colors text-left"
            >
              <div
                className={`w-4 h-4 rounded-[5px] border flex items-center justify-center shrink-0 transition-colors ${isChecked ? "bg-red-700 border-red-700" : "border-black/20 bg-white"}`}
              >
                {isChecked && (
                  <Icon icon="mdi:check" width={12} height={12} color="white" />
                )}
              </div>
              <span className="text-zinc-800 text-sm font-semibold flex-1">
                {cat.label}
              </span>
              <span className="text-black/30 text-xs font-semibold">
                {countByCategory(cat.value)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="w-full h-px bg-black/10 my-4" />
      <button
        onClick={onClearFilter}
        className="px-4 py-2 rounded-md border border-black/20 text-zinc-800 text-sm font-semibold hover:bg-neutral-50 transition-colors"
      >
        Clear type
      </button>
    </div>
  );
}
