import { Project } from "./projects";

interface TimeLineProps extends Project {
  active?: boolean;
}

const TimeLine = ({ date, active }: TimeLineProps) => {
  return (
    <div
      className={`transition-all duration-300 ${
        active ? "text-emerald-400 font-semibold" : "text-gray-500"
      }`}
    >
      {date}
    </div>
  );
};

export default TimeLine;
