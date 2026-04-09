import { motion } from "framer-motion";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
          >
            <ContactInfo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Maps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-sm border border-gray-100"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5133.37163454971!2d106.75711199999999!3d-6.233808899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0c3678756b3%3A0xa6785e8fa8d063!2sMAK%20Production!5e1!3m2!1sid!2sid!4v1775698315763!5m2!1sid!2sid"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
