import { Project } from "./projects";

interface TimeLineProps extends Project {
  active?: boolean;
}

const TimeLine = ({ date, active }: TimeLineProps) => {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[12px] tracking-[0.1em] uppercase border-l-2 pl-3 py-1 transition-colors ${
        active
          ? "border-[#e5e5e5] text-[#e5e5e5] bg-white/[0.04]"
          : "border-white/[0.06] text-neutral-500 hover:text-[#e5e5e5] hover:border-white/20"
      }`}
    >
      {date}
    </div>
  );
};

export default TimeLine;
