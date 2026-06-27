"use client";

import Container from "./Container";
import FadeUp from "./FadeUp";
import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
return ( <footer className="border-t border-(--border) py-12"> <Container>

```
    <FadeUp>
      <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">

        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold">
            Mercy
            <span className="text-(--primary)">.</span>
          </h3>

          <p className="mt-2 max-w-md text-(--muted)">
            Full-Stack Developer & UI/UX Enthusiast building
            modern, scalable, and user-focused digital experiences.
          </p>

          <p className="mt-3 text-sm text-(--primary)">
            Available for freelance & collaboration.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/mercymuimi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-(--border) p-3 transition-all duration-300 hover:-translate-y-1 hover:border-(--primary) hover:text-(--primary) hover:shadow-lg"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://wa.me/254110277215"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-full border border-(--border) p-3 transition-all duration-300 hover:-translate-y-1 hover:border-(--primary) hover:text-(--primary) hover:shadow-lg"
          >
            <FaWhatsapp size={20} />
          </a>

          <a
            href="mailto:muimimercy651@gmail.com"
            aria-label="Email"
            className="rounded-full border border-(--border) p-3 transition-all duration-300 hover:-translate-y-1 hover:border-(--primary) hover:text-(--primary) hover:shadow-lg"
          >
            <FaEnvelope size={20} />
          </a>

        </div>

      </div>
    </FadeUp>

    <div className="mt-10 border-t border-(--border) pt-6">
      <p className="text-center text-sm text-(--muted)">
        © {new Date().getFullYear()} Mercy Muimi. Crafted with Next.js,
        Tailwind CSS, and a passion for building meaningful digital products.
      </p>
    </div>

  </Container>
</footer>
);
}
