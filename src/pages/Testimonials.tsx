import { useState, useRef } from "react";
import { Icon } from "@iconify/react";

const testimonialsData = [
  {
    name: "Romeo Aditya",
    role: "Fullstack Developer at NASA",
    avatar: null,
    rating: 5,
    text: "Saya kagum dengan profesionalisme dan kecepatan kerja mereka. Setiap revisi selalu ditanggapi dengan cepat, dan hasil akhirnya benar-benar menunjukkan kualitas tinggi serta kreativitas yang luar biasa.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    avatar: null,
    rating: 5,
    text: "Saya kagum dengan profesionalisme dan kecepatan kerja mereka. Setiap revisi selalu ditanggapi dengan cepat, dan hasil akhirnya benar-benar menunjukkan kualitas tinggi serta kreativitas yang luar biasa.",
  },
  {
    name: "Budi Santoso",
    role: "Marketing Manager at Tokopedia",
    avatar: null,
    rating: 5,
    text: "Saya kagum dengan profesionalisme dan kecepatan kerja mereka. Setiap revisi selalu ditanggapi dengan cepat, dan hasil akhirnya benar-benar menunjukkan kualitas tinggi serta kreativitas yang luar biasa.",
  },
  {
    name: "Andi Pratama",
    role: "Product Designer at Gojek",
    avatar: null,
    rating: 5,
    text: "Saya kagum dengan profesionalisme dan kecepatan kerja mereka. Setiap revisi selalu ditanggapi dengan cepat, dan hasil akhirnya benar-benar menunjukkan kualitas tinggi serta kreativitas yang luar biasa.",
  },
  {
    name: "Linda Wijaya",
    role: "Director at Kemendag",
    avatar: null,
    rating: 5,
    text: "Saya kagum dengan profesionalisme dan kecepatan kerja mereka. Setiap revisi selalu ditanggapi dengan cepat, dan hasil akhirnya benar-benar menunjukkan kualitas tinggi serta kreativitas yang luar biasa.",
  },
  {
    name: "Dian Kusuma",
    role: "Head of IT at BNI",
    avatar: null,
    rating: 5,
    text: "Saya kagum dengan profesionalisme dan kecepatan kerja mereka. Setiap revisi selalu ditanggapi dengan cepat, dan hasil akhirnya benar-benar menunjukkan kualitas tinggi serta kreativitas yang luar biasa.",
  },
  {
    name: "Reza Firmansyah",
    role: "CTO at Startup ID",
    avatar: null,
    rating: 5,
    text: "Saya kagum dengan profesionalisme dan kecepatan kerja mereka. Setiap revisi selalu ditanggapi dengan cepat, dan hasil akhirnya benar-benar menunjukkan kualitas tinggi serta kreativitas yang luar biasa.",
  },
  {
    name: "Maya Sari",
    role: "Brand Manager at Shopee",
    avatar: null,
    rating: 5,
    text: "Saya kagum dengan profesionalisme dan kecepatan kerja mereka. Setiap revisi selalu ditanggapi dengan cepat, dan hasil akhirnya benar-benar menunjukkan kualitas tinggi serta kreativitas yang luar biasa.",
  },
];

const ITEMS_PER_PAGE = 4;

export default function TestimonialsPage() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonialsData.length / ITEMS_PER_PAGE);
  const dragStartX = useRef<number | null>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragStartX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const endX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (diff > 50) setPage((p) => Math.min(totalPages - 1, p + 1));
    else if (diff < -50) setPage((p) => Math.max(0, p - 1));
    dragStartX.current = null;
  };

  const currentItems = testimonialsData.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  return (
    <section className="w-full bg-white overflow-hidden py-16 lg:py-24">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-5">
            <span className="text-red-700 text-[10px] font-medium tracking-wider uppercase">
              TESTIMONIALS
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-[1.3] text-black">
            What Our Clients <span className="text-red-700">Say's.</span>
          </h1>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {currentItems.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col bg-neutral-50 rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] border-b-[5px] border-red-700 p-6 hover:scale-105 transition-transform duration-300"
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

        <div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`rounded-full transition-all duration-300 ${
                i === page ? "w-3 h-3 bg-red-700" : "w-2 h-2 bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
