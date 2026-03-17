import { Icon } from "@iconify/react";
import { contactInfo, socialMedia } from "../../data/contactData";

export default function ContactInfo() {
  return (
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
        We're excited to bring your ideas to life. Tell us about your project,
        and our team will help you craft creative digital solutions that make an
        impact.
      </p>

      {/* Contact Info List */}
      <div className="flex flex-col gap-6 mb-10">
        {contactInfo.map((info, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-50 rounded-[10px] flex items-center justify-center shrink-0">
              <Icon
                icon={info.icon}
                width={24}
                height={24}
                className="text-red-600"
              />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <span className="text-black text-sm font-bold">{info.label}</span>
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
  );
}
