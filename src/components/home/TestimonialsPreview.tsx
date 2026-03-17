import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { testimonialsData } from "../../data/testimonialsData";

export default function TestimonialsPreview() {
  const preview = testimonialsData.slice(0, 3);

  return (
    <section className="w-full py-16 lg:py-20 bg-neutral-50">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-4">
            <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
              TESTIMONI
            </span>
          </div>
          <h2 className="text-3xl lg:text-[42px] font-extrabold leading-[1.3] text-black">
            Apa Kata <span className="text-red-700">Klien Kami.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col bg-white rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] border-b-[5px] border-red-700 p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-4 right-4 w-10 h-9 bg-red-700 rounded-lg flex items-center justify-center shadow-md">
                <Icon
                  icon="mdi:format-quote-close"
                  width={22}
                  height={22}
                  color="white"
                />
              </div>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, s) => (
                  <Icon
                    key={s}
                    icon="mdi:star"
                    width={18}
                    height={18}
                    className="text-amber-300"
                  />
                ))}
              </div>
              <p className="text-black text-sm font-normal leading-relaxed flex-1 mb-6">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-red-700 flex items-center justify-center bg-neutral-200 shrink-0">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <Icon
                      icon="mdi:account"
                      width={24}
                      height={24}
                      className="text-neutral-400"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-sm font-semibold">
                    {item.name}
                  </span>
                  <span className="text-red-700 text-xs font-normal">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/testimonials"
            className="px-8 py-3 rounded-full border border-black/20 text-black text-sm font-medium hover:bg-black hover:text-white transition-all flex items-center gap-2"
          >
            Lihat Semua Testimoni <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
