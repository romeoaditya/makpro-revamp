import { useState } from "react";
import { Icon } from "@iconify/react";
import { servicesData, type ServiceItem } from "../data/servicesData";
import SoftwareModal from "../components/SoftwareModal";

export default function ServicesPage() {
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  const handleWhatsAppClick = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Halo MAK Production, saya tertarik dengan layanan ${serviceTitle}. Bisa minta informasi lebih lanjut?`,
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5">
            <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black">
            Ready to provide our{" "}
            <span className="text-red-700">
              best
              <br className="hidden md:block" />
              service
            </span>{" "}
            for you.
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-16">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch w-full"
              >
                {/* IMAGE COLUMN */}
                <div
                  className={`h-full ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div
                    className="w-full h-full bg-white rounded-[24px] p-4"
                    style={{
                      border: "1.5px solid #e5e7eb",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-[16px]"
                    />
                  </div>
                </div>

                {/* TEXT COLUMN */}
                <div
                  className={`flex flex-col ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <h3 className="text-3xl md:text-[32px] font-bold text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[15px] font-normal text-neutral-800 leading-[1.6] mb-8">
                    {service.description}
                  </p>

                  {/* How do we help */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-black mb-4">
                      How do we help
                    </h4>
                    <ul className="grid grid-cols-2 gap-y-3 gap-x-2">
                      {service.howWeHelp.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <div className="w-3.5 h-[1.5px] bg-black shrink-0" />
                          <span className="text-[15px] text-black font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
                    {/* Software Icons */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {service.software.slice(0, 3).map((sw, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center p-2 shadow-sm transition-transform hover:scale-110"
                        >
                          <img
                            src={sw.icon}
                            alt={sw.name}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      ))}
                      {/* ✅ Titik 3 — buka modal */}
                      <button
                        onClick={() => setModalService(service)}
                        className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm cursor-pointer transition-transform hover:scale-110 hover:border-red-300 hover:bg-red-50"
                      >
                        <Icon
                          icon="fluent:more-horizontal-20-filled"
                          width={18}
                          height={18}
                          className="text-black/60"
                        />
                      </button>
                    </div>

                    {/* WhatsApp CTA */}
                    <button
                      onClick={() => handleWhatsAppClick(service.title)}
                      className="px-5 py-2.5 bg-green-50 rounded-full border border-green-200 text-green-700 flex items-center gap-2 hover:bg-green-100 hover:border-green-300 active:scale-95 transition-all w-full sm:w-auto justify-center whitespace-nowrap"
                    >
                      <Icon icon="logos:whatsapp-icon" width={20} height={20} />
                      <span className="text-sm font-semibold tracking-wide">
                        Pesan Sekarang
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ Software Modal */}
      <SoftwareModal
        isOpen={modalService !== null}
        onClose={() => setModalService(null)}
        serviceTitle={modalService?.title ?? ""}
        software={modalService?.software ?? []}
      />
    </section>
  );
}
