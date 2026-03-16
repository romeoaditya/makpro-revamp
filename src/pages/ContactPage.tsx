import { useState } from "react";
import { Icon } from "@iconify/react";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Pesan terkirim dari: ${form.fullName}`);
  };

  const contactInfo = [
    {
      icon: "fluent:call-24-filled",
      label: "Phone",
      value: "021-589 07 647",
    },
    {
      icon: "fluent:mail-24-filled",
      label: "Email",
      value: "project@makpro.id",
    },
    {
      icon: "fluent:location-24-filled",
      label: "Address",
      value:
        "Jl. Kostrad Raya No.2 Petukangan Utara, Pesanggrahan Jakarta Selatan.",
    },
    {
      icon: "fluent:clock-24-filled",
      label: "Business Hours",
      value: "Monday - Sunday: 08:00 - 20:00 WIB",
    },
  ];

  const socialMedia = [
    { icon: "mdi:facebook", href: "#" },
    { icon: "mdi:instagram", href: "#" },
    { icon: "mdi:twitter", href: "#" },
    { icon: "mdi:whatsapp", href: "#" },
  ];

  return (
    <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        {/* ════ MAIN GRID ════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ════ LEFT — Info ════ */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-6 self-start">
              <span className="text-red-700 text-[10px] font-medium tracking-wider uppercase">
                GET IN TOUCH
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black mb-6">
              Your Vision Starts Here{" "}
              <span className="text-red-700">Let's Talk!</span>
            </h1>

            {/* Description */}
            <p className="text-sm text-black font-normal leading-relaxed mb-10 max-w-md">
              We're excited to bring your ideas to life. Tell us about your
              project, and our team will help you craft creative digital
              solutions that make an impact.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-6 mb-10">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  {/* Icon — sedikit lebih besar */}
                  <div className="w-12 h-12 bg-red-50 rounded-[10px] flex items-center justify-center shrink-0">
                    <Icon
                      icon={info.icon}
                      width={24}
                      height={24}
                      className="text-red-600"
                    />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-1 justify-center">
                    <span className="text-black text-sm font-bold">
                      {info.label}
                    </span>
                    <span className="text-slate-500 text-sm font-normal leading-relaxed">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              {socialMedia.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-11 h-10 bg-red-50 rounded-[5px] flex items-center justify-center hover:bg-red-100 transition-colors"
                >
                  <Icon
                    icon={social.icon}
                    width={20}
                    height={20}
                    className="text-red-600"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ════ RIGHT — Form ════ */}
          <div className="w-full bg-neutral-50 rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-8 md:p-10 lg:mt-[120px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1 — Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-black text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full h-10 px-4 bg-white rounded-md border border-black/10 text-sm text-black/90 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-black text-sm font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+62 895-1777-3205"
                    className="w-full h-10 px-4 bg-white rounded-md border border-black/10 text-sm text-black/90 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Row 2 — Email */}
              <div className="flex flex-col gap-2">
                <label className="text-black text-sm font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full h-10 px-4 bg-white rounded-md border border-black/10 text-sm text-black/90 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all"
                />
              </div>

              {/* Row 3 — Message */}
              <div className="flex flex-col gap-2">
                <label className="text-black text-sm font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  rows={6}
                  className="w-full px-4 py-3 bg-white rounded-md border border-black/10 text-sm text-black/90 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-l from-red-600 to-red-900 rounded-md text-white text-sm font-bold flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-[0px_4px_15px_rgba(226,29,29,0.3)]"
                >
                  Send Message
                  <Icon icon="fluent:send-24-filled" width={18} height={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
