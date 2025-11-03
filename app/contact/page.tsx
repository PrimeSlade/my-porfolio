import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="lg:min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
          <p className="text-gray-400">
            Let’s turn your ideas into scalable solutions
          </p>
        </div>

        <div className="border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            Let’s Build Something Robust
          </h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Open to backend or backend-focused fullstack opportunities and
            freelance projects. I’m passionate about designing reliable
            architectures, developing clean and efficient APIs, and integrating
            systems that perform at scale. Always up for tackling complex
            technical challenges and building products that make a difference.
          </p>

          <div className="space-y-4 mb-8">
            <a
              href="mailto:engineer@example.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-lg text-gray-300 hover:text-green-400 hover:border-green-500/40 transition-all group"
            >
              <Mail size={20} />
              <span>saib6064@gmail.com</span>
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/PrimeSlade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-gray-400 hover:text-green-400 hover:border-green-500/40 transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-zayar-hein-863232352/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-gray-400 hover:text-green-400 hover:border-green-500/40 transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
