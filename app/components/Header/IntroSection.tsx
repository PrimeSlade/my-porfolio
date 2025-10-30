"use client";
import { Activity, Code, Cpu, Layers } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const IntroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent"></div>
      <div className="max-w-5xl mx-auto relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <TypeAnimation
            sequence={["SaiZayarHein", 10000, "PrimeSlade", 10000]}
            speed={50}
            wrapper="span"
            repeat={3}
            cursor={false}
          />
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mb-8 font-mono whitespace-pre-wrap">
          <TypeAnimation
            sequence={[
              `Full Stack Software Engineer with backend expertise, proficient in JavaScript/TypeScript, Java, React, and Node.js frameworks including Express and Hono.\n
Passionate about building scalable systems, optimizing databases, and architecting robust APIs.\n
Happy to work in backend fields, with strong interests in distributed systems, microservices, and system design.`,
            ]}
            speed={88}
            cursor={true}
            repeat={0}
            style={{ display: "inline-block" }}
          />
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
            <Cpu className="text-emerald-400" size={16} />
            <span className="text-gray-300">System Design</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
            <Layers className="text-cyan-400" size={16} />
            <span className="text-gray-300">Microservices</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
            <Code className="text-yellow-400" size={16} />
            <span className="text-gray-300">Data Structures</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
            <Activity className="text-pink-400" size={16} />
            <span className="text-gray-300">Algorithms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
