import { SiLeetcode, SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Download, Phone, Mail, ArrowUpRight } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <section id="contact" className="bg-black min-h-[calc(100vh-57px)]">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-mono text-neutral-500 mb-3">
            <span className="w-8 h-px bg-white/20" />
            Contact
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.04em] text-white">
            Get In Touch
          </h2>
          <p className="font-mono text-sm text-neutral-500 mt-2">
            Let’s turn your ideas into scalable solutions
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="border border-white/10 bg-[#050505]">
          {/* Top stripe */}
          <div className="h-1 bg-white" />
          <div className="p-8">
            <h3 className="text-2xl font-black tracking-tight text-white mb-3">
              Let’s Build Something Robust
            </h3>
            <p className="font-mono text-[13px] leading-6 text-neutral-400 max-w-3xl mb-8">
              Open to backend or backend-focused fullstack opportunities and freelance
              projects. I’m passionate about designing reliable architectures, developing
              clean and efficient APIs, and integrating systems that perform at scale.
            </p>

            <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-8">
              <a
                href="mailto:saib6064@gmail.com"
                className="bg-black px-4 py-4 flex items-center gap-3 hover:bg-white group transition-colors"
              >
                <span className="w-9 h-9 border border-white/10 flex items-center justify-center bg-[#0a0a0a] group-hover:bg-black group-hover:border-black transition-colors">
                  <SiGmail size={16} className="text-white group-hover:text-white" />
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] tracking-[0.15em] uppercase font-mono text-neutral-500 group-hover:text-black/60">
                    Email
                  </div>
                  <div className="text-[13px] font-mono text-white group-hover:text-black truncate">
                    saib6064@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+66970184800"
                className="bg-black px-4 py-4 flex items-center gap-3 hover:bg-white group transition-colors"
              >
                <span className="w-9 h-9 border border-white/10 flex items-center justify-center bg-[#0a0a0a] group-hover:bg-black transition-colors">
                  <Phone size={16} className="text-white group-hover:text-white" />
                </span>
                <div>
                  <div className="text-[10px] tracking-[0.15em] uppercase font-mono text-neutral-500 group-hover:text-black/60">
                    Phone
                  </div>
                  <div className="text-[13px] font-mono text-white group-hover:text-black">
                    +66 97 018 4800
                  </div>
                </div>
              </a>

              <a
                href="/resume.pdf"
                download
                className="bg-white px-4 py-4 flex items-center justify-between hover:bg-neutral-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 border border-black/10 bg-black flex items-center justify-center">
                    <Download size={16} className="text-white" />
                  </span>
                  <div>
                    <div className="text-[10px] tracking-[0.15em] uppercase font-mono text-black/60">
                      Resume
                    </div>
                    <div className="text-[13px] font-bold tracking-tight text-black">
                      Download PDF
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-black/40 group-hover:text-black" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { href: "https://github.com/PrimeSlade", Icon: SiGithub, label: "GitHub" },
                { href: "https://www.linkedin.com/in/sai-zayar-hein-863232352/", Icon: SiLinkedin, label: "LinkedIn" },
                { href: "https://leetcode.com/u/Sladeee/", Icon: SiLeetcode, label: "LeetCode" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/10 bg-black text-white hover:bg-white hover:text-black hover:border-white transition-colors text-[11px] tracking-[0.14em] uppercase font-mono"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
              <a
                href="mailto:saib6064@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-white bg-white text-black hover:bg-neutral-100 transition-colors text-[11px] tracking-[0.14em] uppercase font-bold"
              >
                <Mail size={14} />
                Email Me
              </a>
            </div>
          </div>

          <div className="px-8 py-3 border-t border-white/10 flex justify-between text-[10px] font-mono tracking-[0.15em] uppercase text-neutral-600">
            <span>Response time — ~24h</span>
            <span>Bangkok · Remote</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
