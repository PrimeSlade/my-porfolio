import { Project } from "./projects";

interface TimeLineProps extends Project {
  active?: boolean;
}

const TimeLine = ({ date, active }: TimeLineProps) => {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[12px] tracking-[0.1em] uppercase border-l-2 pl-3 py-1 transition-colors ${
        active
          ? "border-white text-white bg-white/5"
          : "border-white/10 text-neutral-500 hover:text-white hover:border-white/30"
      }`}
    >
      {date}
    </div>
  );
};

export default TimeLine;
