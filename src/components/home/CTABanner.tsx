import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="w-full max-w-[1280px] mx-auto px-8">
        <div className="relative w-full bg-gradient-to-r from-red-700 to-red-900 rounded-[30px] px-8 py-14 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
          <style>{`
            @keyframes float-1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(-20px, -20px) scale(1.05); }
            }
            @keyframes float-2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(20px, 15px) scale(1.08); }
            }
            @keyframes float-3 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(-10px, 20px) scale(0.95); }
            }
            @keyframes float-4 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(15px, -15px) scale(1.1); }
            }
            .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
            .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
            .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
            .animate-float-4 { animation: float-4 9s ease-in-out infinite; }
          `}</style>

          {/* Animated floating circles */}
          <div className="animate-float-1 absolute top-[-60px] right-[-60px] w-[250px] h-[250px] rounded-full bg-white/10 pointer-events-none" />
          <div className="animate-float-2 absolute bottom-[-80px] right-[80px] w-[200px] h-[200px] rounded-full bg-white/10 pointer-events-none" />
          <div className="animate-float-3 absolute top-[-20px] left-[35%] w-[140px] h-[140px] rounded-full bg-white/10 pointer-events-none" />
          <div className="animate-float-4 absolute bottom-[-40px] left-[-40px] w-[160px] h-[160px] rounded-full bg-white/10 pointer-events-none" />

          {/* Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10">
            <h2 className="text-3xl lg:text-[42px] font-extrabold leading-[1.3] text-white mb-4">
              Ready to Start Your <br className="hidden lg:block" />
              Next Project?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              Let's work together to bring your vision to life. Contact us today
              and let our team craft the perfect digital solution for you.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 shrink-0">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white text-red-700 rounded-full text-sm font-bold hover:bg-neutral-100 hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap"
            >
              Get Started Now
            </Link>
            <Link
              to="/portofolio"
              className="px-8 py-3.5 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white/10 hover:scale-105 active:scale-95 transition-all whitespace-nowrap flex items-center gap-2"
            >
              View Our Work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
