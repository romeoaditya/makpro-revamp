import { useState } from "react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: form.fullName,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
          to_email: "project@makpro.id",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setForm({ fullName: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-neutral-50 rounded-2xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-8 md:p-10 lg:mt-[120px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-black text-sm font-semibold">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              required
              className="w-full h-10 px-4 bg-white rounded-md border border-black/10 text-sm text-black/90 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-red-300 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black text-sm font-semibold">
              Nomor Telepon
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Contoh: 08123456789"
              required
              className="w-full h-10 px-4 bg-white rounded-md border border-black/10 text-sm text-black/90 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-red-300 transition-all"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">
            Alamat Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="contoh@email.com"
            required
            className="w-full h-10 px-4 bg-white rounded-md border border-black/10 text-sm text-black/90 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-red-300 transition-all"
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col gap-2">
          <label className="text-black text-sm font-semibold">Pesan</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tuliskan kebutuhan atau pesan Anda di sini..."
            rows={6}
            required
            className="w-full px-4 py-3 bg-white rounded-md border border-black/10 text-sm text-black/90 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-red-300 transition-all resize-none"
          />
        </div>

        {/* Status */}
        {status === "success" && (
          <div className="flex items-center gap-2 text-green-600 text-sm font-medium bg-green-50 px-4 py-3 rounded-lg">
            <Icon icon="mdi:check-circle" width={18} height={18} />
            Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-600 text-sm font-medium bg-red-50 px-4 py-3 rounded-lg">
            <Icon icon="mdi:alert-circle" width={18} height={18} />
            Gagal mengirim pesan. Silakan coba lagi.
          </div>
        )}

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 bg-gradient-to-l from-red-600 to-red-900 rounded-md text-white text-sm font-bold flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-[0px_4px_15px_rgba(226,29,29,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <Icon
                  icon="mdi:loading"
                  width={18}
                  height={18}
                  className="animate-spin"
                />
                Mengirim...
              </>
            ) : (
              <>
                Kirim Pesan
                <Icon icon="fluent:send-24-filled" width={18} height={18} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
