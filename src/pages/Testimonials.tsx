import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { testimonialsData } from "../data/testimonialsData";

const ITEMS_PER_SLIDE = 3;
const preview = testimonialsData.slice(0, 9);
const totalSlides = Math.ceil(preview.length / ITEMS_PER_SLIDE);
const slides = Array.from({ length: totalSlides }, (_, i) =>
  preview.slice(i * ITEMS_PER_SLIDE, i * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE),
);

export default function TestimonialsPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const isPausedRef = useRef(false);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const measure = () => setSlideWidth(el.clientWidth);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || slideWidth === 0) return;

    const slideToIndex = (index: number) => {
      el.scrollTo({ left: index * slideWidth, behavior: "smooth" });
      activeIndexRef.current = index;
      setActiveIndex(index);
    };

    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      const next =
        activeIndexRef.current >= totalSlides - 1
          ? 0
          : activeIndexRef.current + 1;
      slideToIndex(next);
    }, 3000);

    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / slideWidth);
      const clamped = Math.max(0, Math.min(index, totalSlides - 1));
      activeIndexRef.current = clamped;
      setActiveIndex(clamped);
    };

    const pause = () => {
      isPausedRef.current = true;
    };
    const resume = () => {
      setTimeout(() => {
        isPausedRef.current = false;
      }, 1000);
    };

    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("scroll", handleScroll);
    };
  }, [slideWidth]);

  const goToSlide = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * slideWidth, behavior: "smooth" });
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  return (
    <section className="w-full py-16 lg:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-red-50 rounded-[50px] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <span className="text-red-700 text-[10px] font-bold tracking-wider uppercase">
              TESTIMONI
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl lg:text-[42px] font-extrabold leading-[1.3] text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Apa Kata <span className="text-red-700">Klien Kami.</span>
          </motion.h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
      >
        <div
          ref={wrapperRef}
          className="w-full max-w-[1280px] mx-auto overflow-hidden"
        >
          <div
            ref={scrollRef}
            className="flex"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="shrink-0"
                style={{
                  width: slideWidth > 0 ? `${slideWidth}px` : "100%",
                  scrollSnapAlign: "start",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pt-6">
                  {slide.map((item, i) => (
                    <div
                      key={i}
                      className="relative flex flex-col bg-white rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] border-b-[5px] border-red-700 p-6"
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
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-1.5 mt-10">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "w-6 h-2 bg-red-700"
                  : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/testimonials"
            className="px-8 py-3 rounded-full border border-black/20 text-black text-sm font-medium hover:bg-black hover:text-white transition-all flex items-center gap-2"
          >
            Lihat Semua Testimoni <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
