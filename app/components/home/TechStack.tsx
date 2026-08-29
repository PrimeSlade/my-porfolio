import {
  backendExpertise,
  currentlyLearning,
  frontendExpertise,
  techData,
} from "./skills";

const TechStack = () => {
  // Merge all categories into one deduped list — no empty gaps like before
  const allItems = (() => {
    const seen = new Set<string>();
    const flat: typeof techData[number]["items"] = [];
    for (const cat of techData) {
      for (const item of cat.items) {
        const key = item.name.toLowerCase();
        if (!seen.has(key)) {
          seen.add(key);
          flat.push(item);
        }
      }
    }
    return flat;
  })();

  return (
    <section id="stack" className="bg-black border-t border-white/10">
      {/* Header — Stack */}
      <div className="border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-end justify-between gap-4">
          <h2 className="text-[42px] sm:text-[56px] font-black tracking-[-0.05em] leading-none text-white">
            Stack
          </h2>
          <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-500 pb-2">
            <span className="w-10 h-px bg-white/20" />
            <span>{allItems.length} Technologies</span>
            <span className="w-10 h-px bg-white/20" />
            <span>2026</span>
          </div>
        </div>
      </div>

      {/* Single dense grid — like reference image, 0 rounded, real colors */}
      <div className="dot-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto border-x border-white/10 bg-black">
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-px bg-white/10">
            {allItems.map((item) => (
              <div
                key={item.name}
                className="group bg-black flex flex-col items-center justify-center gap-2 p-4 sm:p-5 aspect-square hover:bg-white transition-colors cursor-default"
                title={item.name}
              >
                {item.Icon ? (
                  <item.Icon
                    size={28}
                    style={{ color: item.brand || "#ffffff" }}
                    className="shrink-0 transition-colors group-hover:!text-black"
                  />
                ) : (
                  <span className="text-[11px] font-mono font-bold tracking-widest text-white group-hover:text-black">
                    {item.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
                <span className="text-[9px] leading-none tracking-[0.1em] uppercase font-mono text-neutral-500 group-hover:text-black text-center line-clamp-1 w-full truncate px-1">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Striped footer like reference */}
          <div
            className="h-6 bg-[repeating-linear-gradient(-45deg,#0a0a0a_0_8px,#111_8px_16px)] border-t border-white/10"
            aria-hidden
          />
        </div>
      </div>

      {/* Expertise — kept, monochrome */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="bg-black p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1 h-4 bg-white" />
              <h3 className="text-[12px] tracking-[0.2em] uppercase font-mono font-bold text-white">
                Frontend Expertise
              </h3>
            </div>
            <ul className="space-y-3">
              {frontendExpertise.map((expert) => (
                <li
                  key={expert}
                  className="flex items-start gap-3 text-[13px] leading-6 font-mono text-neutral-400 border-l border-white/10 pl-3 hover:border-white hover:text-white transition-colors"
                >
                  {expert}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1 h-4 bg-white" />
              <h3 className="text-[12px] tracking-[0.2em] uppercase font-mono font-bold text-white">
                Backend Expertise
              </h3>
            </div>
            <ul className="space-y-3">
              {backendExpertise.map((expert) => (
                <li
                  key={expert}
                  className="flex items-start gap-3 text-[13px] leading-6 font-mono text-neutral-400 border-l border-white/10 pl-3 hover:border-white hover:text-white transition-colors"
                >
                  {expert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Currently learning */}
        <div className="mt-px border border-white/10 bg-black p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-1 h-4 bg-white" />
            <h3 className="text-[12px] tracking-[0.2em] uppercase font-mono font-bold text-white">
              Currently Learning
            </h3>
          </div>
          <div className="h-px sm:h-6 sm:w-px bg-white/10 shrink-0" />
          <div className="flex flex-wrap gap-2">
            {currentlyLearning.map((item) => (
              <div
                key={item.name}
                className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 bg-[#0a0a0a] hover:bg-white hover:border-white group transition-colors cursor-default"
              >
                <item.Icon
                  size={16}
                  style={{ color: item.brand }}
                  className="group-hover:!text-black transition-colors"
                />
                <span className="text-[11px] tracking-[0.12em] uppercase font-mono text-white group-hover:text-black">
                  {item.name}
                </span>
              </div>
            ))}
            <span className="inline-flex items-center px-3 py-2 border border-dashed border-white/15 text-[11px] font-mono tracking-[0.12em] uppercase text-neutral-600">
              + More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
