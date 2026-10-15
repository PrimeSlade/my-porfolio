import { Database, Monitor, Users } from "lucide-react";

const items = [
  {
    Icon: Monitor,
    area: "web",
    title: "Build complete web apps",
    body: "From the screens people click on to the database behind them. I take an idea to a working, deployed product.",
    tech: "React · Next.js · NestJS · Express",
  },
  {
    Icon: Database,
    area: "api",
    title: "Design reliable back ends",
    body: "Systems that stay fast as users grow, keep data secure, and control who is allowed to see what.",
    tech: "PostgreSQL · Redis · RabbitMQ · Docker",
  },
  {
    Icon: Users,
    area: undefined,
    title: "Teach and lead teams",
    body: "I mentored 40+ university students and led a three-person team to ship a full app in a 28-hour hackathon.",
    tech: "Mentoring · Code review · Team lead",
  },
];

const WhatIDo = () => (
  <section>
    <div className="section-head">
      <div>
        <h2>What I do</h2>
        <p>In plain terms, here is what I can take on for a team.</p>
      </div>
    </div>
    <div className="grid-3 boxed">
      {items.map(({ Icon, area, title, body, tech }) => (
        <div className="card" key={title} data-hue={area}>
          <div className="card-header">
            <div className="icon-box">
              <Icon aria-hidden="true" />
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{body}</p>
          </div>
          <p className="stack">{tech}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhatIDo;
