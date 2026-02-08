"use client";
import { Activity, Code, Cpu, Layers } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const IntroSection = () => {
  return (
    <section className="lg:min-h-screen pt-30 lg:pt-20 px-6 relative flex items-center">
      <div className="absolute inset-0 from-emerald-950/20 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <TypeAnimation
                sequence={["SaiZayarHein", 10000, "PrimeSlade", 10000]}
                speed={50}
                wrapper="span"
                repeat={3}
                cursor={false}
              />
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-10 font-mono">
              Full Stack Software Engineer with backend expertise, proficient in
              JavaScript/TypeScript, Java, React, and Node.js frameworks
              including NestJs, Express and Hono. Passionate about building
              scalable systems, optimizing databases, and architecting robust
              APIs. Happy to work in backend fields, with strong interests in
              distributed systems, microservices, and system design.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-emerald-400/50 transition-colors">
                <Cpu className="text-emerald-400" size={16} />
                <span className="text-gray-300">System Design</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-400/50 transition-colors">
                <Layers className="text-cyan-400" size={16} />
                <span className="text-gray-300">Microservices</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-yellow-400/50 transition-colors">
                <Code className="text-yellow-400" size={16} />
                <span className="text-gray-300">Data Structures</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 md:px-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-pink-400/50 transition-colors">
                <Activity className="text-pink-400" size={16} />
                <span className="text-gray-300">Algorithms</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-sm text-gray-300 font-mono">
                  <code>{`const developer = {
  name: "PrimeSlade",
  role: "Full Stack Engineer",
  focus: ["Backend", "System Design"],
  tech: {
    languages: ["TypeScript", "JavaScript","Java"],
    frameworks: ["React", "Next.js", "Express", "Hono", "NestJS"],
    databases: ["PostgreSQL", "Prisma"]
  }
};`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
