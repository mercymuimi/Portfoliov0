import Container from "../ui/Container";
import FadeUp from "../ui/FadeUp";
export default function About() {
  return (
    <section
      id="about"
      className="border-t border-(--border) py-20"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

          {/* Left */}
          <div>
            <FadeUp>
              <span className="text-sm font-semibold tracking-wider text-(--primary)">
                ABOUT ME
              </span>
            </FadeUp>
          </div>

          {/* Right */}
          <div>
            <FadeUp delay={0.1}>
              <h2 className="max-w-4xl text-4xl font-bold leading-tight lg:text-6xl">
                Full-Stack Developer &
                <br />
                UI/UX DESIGNER
              </h2>
            </FadeUp>

            <div className="mt-8 max-w-3xl space-y-6">
                <FadeUp delay={0.2}>
                  <p className="text-lg leading-relaxed text-(--muted)">
                    I'm Mercy Muimi, a UI/UX Designer and a Full-Stack Developer
                    passionate about designing and building scalable web applications,
                    and seamless digital experiences.
                  </p>
                </FadeUp>

              <FadeUp delay={0.3}>
                <p className="text-lg leading-relaxed text-(--muted)">
                  From Designs to frontend interfaces to backend architecture
                  I enjoy transforming complex ideas
                  into practical solutions that deliver real impact.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3">
        <FadeUp delay={0.4}>
          <div>
            <h3 className="text-5xl font-bold text-(--primary)">
              10+
            </h3>
            <p className="mt-2 text-(--muted)">
              Projects Built
            </p>
          </div>
            </FadeUp>
            <FadeUp delay={0.5}>
          <div>
            <h3 className="text-5xl font-bold text-(--primary)">
              4+
            </h3>
            <p className="mt-2 text-(--muted)">
              Core Technologies
            </p>
          </div>
            </FadeUp>
            <FadeUp delay={0.6}>
          <div>
            <h3 className="text-5xl font-bold text-(--primary)">
              Designs
              </h3>
            <p className="mt-2 text-(--muted)">
              Solutions & Integrations
            </p>
          </div>
            </FadeUp>
        </div>
      </Container>
    </section>
  );
}