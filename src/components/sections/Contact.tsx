"use client";

import { useState } from "react";
import Container from "../ui/Container";
import FadeUp from "../ui/FadeUp";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setSuccess(true);

      setName("");
      setEmail("");
      setMessage("");

      // Reset button after 4 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 4000);

    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-(--border) py-24"
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <FadeUp>
            <span className="text-sm font-semibold tracking-wider text-(--primary)">
              CONTACT
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
              Let's build something great together.
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-6 text-lg text-(--muted)">
              Whether you have a project, collaboration,
              or opportunity in mind, I'd love to hear from you.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-2 text-(--muted) sm:flex-row sm:justify-center sm:gap-8">
              <span>📧 muimimercy651@gmail.com</span>
              <span>📱 +254 110 277 215</span>
            </div>
          </FadeUp>

        </div>

        <FadeUp delay={0.4}>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-2xl space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-2xl border border-(--border) px-5 py-4 outline-none transition-all duration-300 focus:border-(--primary) focus:shadow-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-2xl border border-(--border) px-5 py-4 outline-none transition-all duration-300 focus:border-(--primary) focus:shadow-lg"
            />

            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full resize-none rounded-2xl border border-(--border) px-5 py-4 outline-none transition-all duration-300 focus:border-(--primary) focus:shadow-lg"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-(--primary) py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading
                ? "Sending..."
                : success
                ? "Message Sent ✓"
                : "Send Message"}
            </button>

          </form>
        </FadeUp>

      </Container>
    </section>
  );
}