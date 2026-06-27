"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Container from "./Container";

const links = [
{ label: "About", href: "#about" },
{ label: "Skills", href: "#skills" },
{ label: "Projects", href: "#projects" },
{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return ( <header className="sticky top-0 z-50 border-b border-(--border) bg-(--background)/80 backdrop-blur-lg"> <Container> <nav className="flex h-20 items-center justify-between">

```
      {/* Logo */}
      <Link
        href="/"
        className="text-xl font-bold tracking-tight"
      >
        Mercy
        <span className="text-(--primary) animate-pulse">.</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center md:flex">

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-(--muted) transition-colors hover:text-(--primary)"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="ml-12 rounded-full bg-(--primary) px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          Let's Talk
        </a>

      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

    </nav>
  </Container>

  {/* Mobile Menu */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.2 }}
        className="border-t border-(--border) bg-white md:hidden"
      >
        <Container>
          <div className="flex flex-col py-6">

            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-(--muted) transition-colors hover:text-(--primary)"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-full bg-(--primary) px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:shadow-lg"
            >
              Let's Talk
            </a>

          </div>
        </Container>
      </motion.div>
    )}
  </AnimatePresence>
</header>

);
}
