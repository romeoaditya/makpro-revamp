import { useState } from "react";
import { motion } from "framer-motion";
import { servicesData, type ServiceItem } from "../data/servicesData";
import ServiceCard from "../components/services/ServiceCard";
import SoftwareModal from "../components/services/SoftwareModal";

export default function ServicesPage() {
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  return (
    <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
              LAYANAN KAMI
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Siap Memberikan{" "}
            <span className="text-red-700">
              Layanan
              <br className="hidden md:block" />
              Terbaik
            </span>{" "}
            untuk Anda.
          </motion.h2>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-16">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2 + index * 0.15,
              }}
            >
              <ServiceCard
                service={service}
                index={index}
                onOpenModal={() => setModalService(service)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <SoftwareModal
        isOpen={modalService !== null}
        onClose={() => setModalService(null)}
        serviceTitle={modalService?.title ?? ""}
        software={modalService?.software ?? []}
      />
    </section>
  );
}
