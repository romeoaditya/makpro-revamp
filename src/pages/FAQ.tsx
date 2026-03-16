import { useState } from "react";
import { Icon } from "@iconify/react";
import FaqImage from "../assets/faq/faq-image.png";

const faqData = [
  {
    question: "Can i install/upload anything i want on there?",
    answer:
      "For now it is limited to 100MB per instance. We'll offer expansion options soon.",
  },
  {
    question: "How long is this site live?",
    answer:
      "Your site will remain live as long as your subscription is active. We offer monthly and annual plans.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 customer support via email and WhatsApp for all our clients.",
  },
  {
    question: "Can I customize the design of my project?",
    answer:
      "Absolutely! We offer full customization based on your brand guidelines and preferences.",
  },
  {
    question: "How do I get started with MAK Production?",
    answer:
      "Simply contact us through the contact page or WhatsApp, and our team will guide you through the process.",
  },
  {
    question: "Do you offer revision services?",
    answer:
      "Yes, we include revision rounds in all our packages. The number of revisions depends on the package chosen.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on complexity. A typical website takes 2-4 weeks.",
  },
  {
    question: "Do you provide maintenance after project completion?",
    answer:
      "Yes, we offer ongoing maintenance packages to keep your project running smoothly after launch.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, credit cards, and digital wallets including GoPay and OVO.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we work with clients worldwide and can accommodate different time zones for meetings.",
  },
];

// ✅ 5 item per page
const ITEMS_PER_PAGE = 5;

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);
  const currentFaqs = faqData.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  return (
    <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div className="mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5">
            <span className="text-red-700 text-[10px] font-medium tracking-wider uppercase">
              FAQ
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black">
            Frequently Asked <br />
            <span className="text-red-700">Questions</span>
          </h1>
        </div>

        {/* ✅ Flex bukan grid — gambar tidak ikut bergerak */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left — sticky image */}
          <div className="hidden lg:block w-[45%] shrink-0">
            <div className="sticky top-8">
              <img
                src={FaqImage}
                alt="FAQ Illustration"
                className="w-full max-w-[480px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Right — Accordion */}
          <div className="flex-1 flex flex-col gap-3">
            {currentFaqs.map((faq, i) => {
              const globalIndex = page * ITEMS_PER_PAGE + i;
              const isOpen = openIndex === globalIndex;

              return (
                <div
                  key={globalIndex}
                  className="bg-neutral-50 rounded-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.10)]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
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
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-neutral-600 text-sm font-normal px-6 pb-5 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Pagination */}
            <div className="flex items-center justify-end gap-4 mt-2">
              <span className="text-red-700 text-sm font-normal">
                Show others
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setPage((p) => Math.max(0, p - 1));
                    setOpenIndex(null);
                  }}
                  disabled={page === 0}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                    page === 0
                      ? "border-neutral-300 text-neutral-300 cursor-not-allowed"
                      : "border-neutral-600 text-neutral-600 hover:bg-neutral-50"
                  }`}
                >
                  <Icon icon="mdi:chevron-left" width={20} height={20} />
                </button>
                <span className="text-black text-base font-normal">
                  {page + 1}/{totalPages}
                </span>
                <button
                  onClick={() => {
                    setPage((p) => Math.min(totalPages - 1, p + 1));
                    setOpenIndex(null);
                  }}
                  disabled={page === totalPages - 1}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                    page === totalPages - 1
                      ? "border-neutral-300 text-neutral-300 cursor-not-allowed"
                      : "border-red-700 text-red-700 hover:bg-red-50"
                  }`}
                >
                  <Icon icon="mdi:chevron-right" width={20} height={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
