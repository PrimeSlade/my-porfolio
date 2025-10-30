import { Code2, Server, BookOpen } from "lucide-react";
import { colorStyles } from "../Color/colorStyles";
import {
  backendExpertise,
  currentlyLearning,
  frontendExpertise,
  techData,
} from "./techData";

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
          {techData.map((card) => {
            const styles = colorStyles[card.color as keyof typeof colorStyles];
            return (
              <div
                key={card.title}
                className={`border border-slate-800 bg-slate-900/50 p-6 rounded-xl ${styles.hoverBorder} transition-all`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 rounded-lg ${styles.bg} border ${styles.border}`}
                  >
                    <card.icon className={styles.text} size={20} />
                  </div>
                  <h3 className="text-lg font-bold">{card.title}</h3>
                </div>

                <ul className="space-y-3 text-sm text-gray-400">
                  {card.items.map((item) => {
                    const itemStyles =
                      colorStyles[item.color as keyof typeof colorStyles];
                    return (
                      <li
                        key={item.name}
                        className={`flex items-center gap-2 ${itemStyles.hoverText} transition-colors cursor-default`}
                      >
                        {item.Icon && (
                          <item.Icon className={itemStyles.text} size={16} />
                        )}
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code2 className="text-purple-400" size={20} />
              Frontend Expertise
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
              {frontendExpertise.map((expert, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                  <p>{expert}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Server className="text-green-400" size={20} />
              Backend Expertise
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
              {backendExpertise.map((expert, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <p>{expert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="text-orange-400" size={20} />
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-4">
            {currentlyLearning.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 hover:border-orange-500 transition-all cursor-default"
              >
                <item.Icon className="text-orange-400" size={16} />
                <span className="text-sm text-gray-300">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
