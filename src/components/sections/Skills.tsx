"use client";

import Container from "../ui/Container";
import FadeUp from "../ui/FadeUp";

const skills = [
{
title: "Frontend",
technologies: [
"React",
"Next.js",
"TypeScript",
"Tailwind CSS",
"Framer Motion",
"shadcn/ui",
"TanStack Query",
],
},
{
title: "Backend",
technologies: [
"Node.js",
"Django",
"Express.js",
"REST APIs",
"JWT / OAuth",
"Docker",
],
},
{
title: "Database",
technologies: [
"PostgreSQL",
"MySQL",
"Supabase",
"MongoDB",
"Firebase",
],
},
{
title: "API Integration",
technologies: [
"M-Pesa API",
"OpenAI API",
"Resend",
"Axios",
"Webhook Integration",
"Authentication APIs",
],
},
{
title: "UI & UX",
technologies: [
"Figma",
"FigJam",
"Framer",
"Lottie",
],
},
];

export default function Skills() {
return ( <section
   id="skills"
   className="border-t border-(--border) py-24"
 > <Container>

```
    <FadeUp>
      <div className="mb-16 text-center">
        <span className="text-sm font-medium tracking-wider text-(--primary)">
          SKILLS
        </span>

        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
          Technologies I work with
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-(--muted)">
          A combination of frontend, backend, database,
          API integration, and UI/UX skills used to build
          modern digital experiences.
        </p>
      </div>
    </FadeUp>

    <div className="grid gap-6 md:grid-cols-2">

      {skills.map((skill, index) => (
        <FadeUp
          key={skill.title}
          delay={index * 0.1}
        >
          <div className="group rounded-3xl border border-(--border) bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-(--primary) hover:shadow-xl">

            <h3 className="mb-6 text-2xl font-semibold transition-colors duration-300 group-hover:text-(--primary)">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skill.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-orange-50 px-4 py-2 text-sm transition-all duration-300 hover:bg-orange-100 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </FadeUp>
      ))}

    </div>

  </Container>
</section>
);
}
