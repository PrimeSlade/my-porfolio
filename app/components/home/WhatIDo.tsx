import { Database, Monitor, Users } from "lucide-react";

const items = [
  {
    Icon: Monitor,
    title: "Build complete web apps",
    body: "From the screens people click on to the database behind them. I take an idea to a working, deployed product.",
    tech: "React · Next.js · NestJS · Express",
  },
  {
    Icon: Database,
    title: "Design reliable back ends",
    body: "Systems that stay fast as users grow, keep data secure, and control who is allowed to see what.",
    tech: "System design · PostgreSQL · Redis · Docker",
  },
  {
    Icon: Users,
    title: "Teach and lead teams",
    body: "I mentored 40+ university students and led a three-person team to ship a full app in a 28-hour hackathon.",
    tech: "Mentoring · Code review · Team lead",
  },
];

const WhatIDo = () => {
  return (
    <section className="section">
      <div className="sec-head">
        <h2>What I do</h2>
        <p>In plain terms, here is what I can take on for a team.</p>
      </div>
      <div className="does">
        {items.map(({ Icon, title, body, tech }) => (
          <div className="do" key={title}>
            <div className="ic">
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <p>{body}</p>
            <small>{tech}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
