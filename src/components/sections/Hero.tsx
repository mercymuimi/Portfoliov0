"use client";
import Image from "next/image";
import { motion } from "motion/react";

import Container from "../ui/Container";
import FadeUp from "../ui/FadeUp";

export default function Hero() {
  return (
    <section className="py-20 lg:min-h-[85vh] lg:flex lg:items-center">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <div className="max-w-2xl">

            <FadeUp>
              <span className="rounded-full border border-(--border) px-4 py-2 text-sm text-(--muted)">
                Full-Stack Developer • UI/UX Designer
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-7xl">
                MERCY MUIMI.
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="mt-4 text-2xl text-(--muted) lg:text-3xl">
                Hi, I'm Mercy Muimi.
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-6 text-lg leading-relaxed text-(--muted)">
               I combine UI/UX design and full-stack development to create
               modern, user-centered digital solutions that solve real-world
               problems and deliver meaningful experiences.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-(--primary) px-6 py-3 font-medium text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-(--border) px-6 py-3 font-medium transition-transform duration-300 hover:-translate-y-1"
                >
                  Let's Talk
                </a>
              </div>
            </FadeUp>

          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="relative h-105 w-[320px] overflow-hidden rounded-3xl border border-(--border) bg-white shadow-xl md:h-125 md:w-95"
            >
              <Image
                src="/images/heroimage.jpg"
                alt="Mercy MUIMI"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}