import React from "react";
import { Code2, Database, Layers, Server } from "lucide-react";
import {
  SiJavascript,
  SiPython,
  SiTypescript,
  SiOpenjdk,
} from "react-icons/si";

type TechItem = {
  name: string;
  color: string;
  Icon?: React.ElementType;
};

type TechCard = {
  title: string;
  color: string;
  icon: React.ElementType;
  items: TechItem[];
};

const techData: TechCard[] = [
  {
    title: "Languages",
    color: "green",
    icon: Code2,
    items: [
      { name: "JavaScript", color: "green", Icon: SiJavascript },
      { name: "Node.js / TypeScript", color: "green", Icon: SiTypescript },
      { name: "Java", color: "green", Icon: SiOpenjdk },
    ],
  },
  {
    title: "Databases",
    color: "cyan",
    icon: Database,
    items: [
      { name: "PostgreSQL", color: "cyan" },
      { name: "MongoDB", color: "cyan" },
      { name: "Redis", color: "cyan" },
      { name: "Elasticsearch", color: "cyan" },
      { name: "Cassandra", color: "cyan" },
    ],
  },
  {
    title: "Infrastructure",
    color: "amber",
    icon: Server,
    items: [
      { name: "Docker / Kubernetes", color: "amber" },
      { name: "AWS / GCP", color: "amber" },
      { name: "Terraform", color: "amber" },
      { name: "GitHub Actions", color: "amber" },
      { name: "Nginx", color: "amber" },
    ],
  },
];

const coreExpertise = [
  "System Design & Architecture",
  "API Development (REST, GraphQL, gRPC)",
  "Database Optimization & Scaling",
  "Microservices & Event-Driven Systems",
  "DevOps & Cloud Infrastructure",
  "Performance Tuning & Monitoring",
];

const TechStack = () => {
  return (
    <section
      id="stack"
      className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Technology Stack</h2>
          <p className="text-gray-400">
            Tools and technologies I work with daily
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {techData.map((card) => (
            <div
              key={card.title}
              className={`border border-slate-800 bg-slate-900/50 p-6 rounded-xl hover:border-${card.color}-500 transition-all`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2 rounded-lg bg-${card.color}-500/10 border border-${card.color}-500/20`}
                >
                  <card.icon className={`text-${card.color}-400`} size={20} />
                </div>
                <h3 className="text-lg font-bold">{card.title}</h3>
              </div>

              <ul className="space-y-3 text-sm text-gray-400">
                {card.items.map((item) => (
                  <li
                    key={item.name}
                    className={`flex items-center gap-2 hover:text-${item.color}-400 transition-colors cursor-default`}
                  >
                    {item.Icon && (
                      <item.Icon
                        className={`text-${item.color}-400`}
                        size={16}
                      />
                    )}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Layers className="text-green-400" size={20} />
            Core Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
            {coreExpertise.map((expert, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                <p>{expert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
