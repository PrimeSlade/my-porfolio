import { Project } from "./projects";

interface TimeLineProps extends Project {
  active?: boolean;
}

const TimeLine = ({ date, active }: TimeLineProps) => {
  return (
    <div
      className={`transition-all duration-300 font-semibold ${
        active ? "text-green-400" : "text-gray-500"
      }`}
    >
      {date}
    </div>
  );
};

export default TimeLine;
