import { Brain, ChartPie } from "lucide-react";
import { TbCurrentLocation } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";

const JobInfo = ({ text, type }: { text: string; type: string }) => {
  return (
    <div className="flex gap-x-2 items-center group">
      <span className="capitalize">{type === "date" ? "Due date" : text}</span>
      {type === "location" && <TbCurrentLocation />}
      {type === "mode" && <BsPersonWorkspace />}
      {type === "status" && <ChartPie />}
      {type === "AI" && (
        <Brain className="group-hover:translate-x-4 duration-200" />
      )}
    </div>
  );
};

export default JobInfo;
