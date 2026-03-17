import { useState } from "react";
import { Icon } from "@iconify/react";

export default function ContactForm() {
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

  return (
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
          <label className="text-black text-sm font-semibold">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your needs..."
            rows={6}
            className="w-full px-4 py-3 bg-white rounded-md border border-black/10 text-sm text-black/90 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Submit */}
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
  );
}
