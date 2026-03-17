import { Icon } from "@iconify/react";
import type { FAQItem } from "../../data/faqData";

interface FAQAccordionProps {
  faqs: FAQItem[];
  openIndex: number | null;
  onToggle: (index: number) => void;
}

export default function FAQAccordion({
  faqs,
  openIndex,
  onToggle,
}: FAQAccordionProps) {
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-neutral-50 rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.10)]"
          >
            <button
              onClick={() => onToggle(i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <span className="text-black text-base font-semibold pr-4">
                {faq.question}
              </span>
              <div className="w-9 h-9 bg-red-50 rounded-[10px] flex items-center justify-center shrink-0">
                <Icon
                  icon={isOpen ? "mdi:minus" : "mdi:plus"}
                  width={18}
                  height={18}
                  className="text-red-600"
                />
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-neutral-600 text-sm font-normal px-6 pb-5 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
