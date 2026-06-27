"use client";

import Image from "next/image";
import { motion } from "motion/react";

import Container from "../ui/Container";
import FadeUp from "../ui/FadeUp";

export default function Projects() {
return ( <section
   id="projects"
   className="border-t border-(--border) py-24"
 > <Container>

```
    <FadeUp>
      <div className="mb-16">
        <span className="text-sm font-semibold tracking-wider text-(--primary)">
          FEATURED PROJECT
        </span>

        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
          Recent Work
        </h2>
      </div>
    </FadeUp>

    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="grid items-center gap-12 lg:grid-cols-2"
    >

      {/* Project Image */}
      <FadeUp>
        <div className="overflow-hidden rounded-3xl border border-(--border) bg-white shadow-sm">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/project1.png"
              alt="Style & Splash"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </FadeUp>

      {/* Project Details */}
      <FadeUp delay={0.2}>
        <div>
          <span className="text-sm font-medium text-(--primary)">
            E-Commerce Platform
          </span>

          <h3 className="mt-3 text-3xl font-bold lg:text-4xl">
            Style & Splash
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-(--muted)">
            A modern fashion event ticket site designed
            for fashion lovers to view upcoming TSE event ( Style and Splash )and purchase
            tickets for the event.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "next.js",
              "supabase",
              "Tailwind CSS",
              "TypeScript",
              "Vercel",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-orange-50 px-4 py-2 text-sm transition-all duration-300 hover:scale-105 hover:bg-orange-100"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://style-and-splash.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-semibold text-(--primary)"
            >
              View Project

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </FadeUp>

    </motion.div>

  </Container>
</section>
);
}
