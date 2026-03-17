interface LaptopMockupProps {
  image: string;
  title: string;
}

export default function LaptopMockup({ image, title }: LaptopMockupProps) {
  return (
    <div className="relative w-full max-w-[480px] mx-auto lg:max-w-full">
      {/* ✅ Screen */}
      <div className="relative bg-neutral-900 rounded-t-xl pt-6 px-3 pb-0 shadow-2xl">
        {/* Traffic lights */}
        <div className="absolute top-2 left-3 flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>

        {/* Address bar */}
        <div className="bg-neutral-800 rounded-md px-3 py-1.5 mb-2 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
          <div className="flex-1 h-1.5 bg-neutral-700 rounded-full" />
        </div>

        {/* Screenshot */}
        <div className="overflow-hidden rounded-t-sm">
          <img
            src={image}
            alt={title}
            className="w-full object-cover object-top"
          />
        </div>
      </div>

      {/* ✅ Base / hinge */}
      <div className="h-3 bg-neutral-800 rounded-b-sm" />
      <div className="h-2 bg-neutral-700 rounded-b-lg mx-[-6px]" />
      <div className="h-1.5 bg-neutral-600 rounded-b-xl mx-[-12px]" />

      {/* ✅ Red glow bawah */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-[40px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(226,29,29,0.5) 0%, rgba(226,29,29,0) 100%)",
          filter: "blur(14px)",
        }}
      />

      {/* ✅ Shadow hitam melayang */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[30px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
          filter: "blur(10px)",
        }}
      />
    </div>
  );
}
