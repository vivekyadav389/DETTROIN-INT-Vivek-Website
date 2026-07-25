import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AVATARS = [
  { src: "/student/website 2.jpg", alt: "Student portrait" },
  { src: "/student/website 3.jpg", alt: "Student portrait" },
  { src: "/student/website 4.jpg", alt: "Student portrait" },
  { src: "/student/website 5.jpg", alt: "Student portrait" },
];

const COLLAGE_AVATARS = [
  "/student/website 2.jpg",
  "/student/website 3.jpg",
  "/student/website 4.jpg",
  "/student/website 5.jpg",
];

export function KisHero() {
  return (
    <section className="flex flex-col gap-10 bg-kis-cream px-6 py-12 md:flex-row md:items-start md:gap-16 md:px-16 md:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="flex-1 md:pt-6"
      >
        <div className="mb-6 flex items-center gap-2">
          <span className="font-kis-body text-xs uppercase tracking-widest text-kis-muted-foreground">
            Admissions Open
          </span>
          <span className="inline-block h-1 w-1 rounded-full bg-kis-muted-foreground" />
          <span className="font-kis-body text-xs uppercase tracking-widest text-kis-muted-foreground">
            2026–27
          </span>
        </div>

        <h1 className="mb-6 font-kis-headings text-4xl leading-tight text-kis-navy md:text-5xl">
          Where every child&apos;s{" "}
          <span className="italic text-kis-primary">curiosity</span>
          <br />
          is marked present
        </h1>

        <p className="mb-8 max-w-md font-kis-body text-base leading-relaxed text-kis-muted-foreground">
          A CBSE-affiliated school set across 5 acres in Aligarh, built for
          children who ask &ldquo;why&rdquo; more than they ask
          &ldquo;what.&rdquo; Academics, arts, and sport — held to one
          standard.
        </p>

        <div className="mb-12 flex flex-wrap gap-4">
          <Button asChild className="rounded-xl bg-kis-primary px-8 py-3.5 font-kis-body text-base font-medium text-kis-primary-foreground hover:bg-kis-primary/90">
            <Link to="/enroll">Start Enrollment</Link>
          </Button>
          <Button
            variant="outline"
            className="gap-2 rounded-xl border-kis-navy px-6 py-3 font-kis-body font-medium text-kis-navy hover:bg-kis-navy hover:text-kis-cream"
          >
            Take a Campus Tour
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {AVATARS.map((avatar, i) => (
              <img
                key={i}
                src={avatar.src}
                alt={avatar.alt}
                className="h-9 w-9 rounded-full border-2 border-kis-cream object-cover"
              />
            ))}
          </div>
          <span className="font-kis-body text-sm text-kis-muted-foreground">
            6,000+ students learning on campus right now
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-xs flex-shrink-0 pt-8 md:w-[320px] md:pt-0 lg:w-[360px]"
      >
        <div className="relative h-[340px] w-full md:h-[400px] lg:h-[440px]">
          {/* Top Left */}
          <div className="absolute left-[2%] top-0 z-10 w-[45%] -rotate-3 overflow-hidden border-[3px] border-[#a58641] bg-[#a58641] shadow-2xl transition-all duration-300 hover:z-[60] hover:scale-105">
            <img src="/student/website 2.jpg" alt="Student" className="aspect-[3/4] w-full object-cover" />
          </div>
          {/* Top Right */}
          <div className="absolute right-[2%] top-[8%] z-20 w-[45%] rotate-6 overflow-hidden border-[3px] border-[#a58641] bg-[#a58641] shadow-2xl transition-all duration-300 hover:z-[60] hover:scale-105">
            <img src="/student/website 3.jpg" alt="Student" className="aspect-[3/4] w-full object-cover" />
          </div>
          {/* Middle Left */}
          <div className="absolute left-[-2%] top-[35%] z-30 w-[55%] rotate-2 overflow-hidden border-[3px] border-[#a58641] bg-[#a58641] shadow-2xl transition-all duration-300 hover:z-[60] hover:scale-105">
            <img src="/student/website 4.jpg" alt="Student" className="aspect-[4/3] w-full object-cover" />
          </div>
          {/* Middle Right */}
          <div className="absolute right-[-2%] top-[40%] z-40 w-[55%] -rotate-3 overflow-hidden border-[3px] border-[#a58641] bg-[#a58641] shadow-2xl transition-all duration-300 hover:z-[60] hover:scale-105">
            <img src="/student/website 5.jpg" alt="Student" className="aspect-[4/3] w-full object-cover" />
          </div>
          {/* Bottom Center */}
          <div className="absolute bottom-[5%] left-[10%] z-50 w-[80%] rotate-1 overflow-hidden border-[3px] border-[#a58641] bg-[#a58641] shadow-2xl transition-all duration-300 hover:z-[60] hover:scale-105">
            <img src="/student/website 1.jpg" alt="Student" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>

        <div className="absolute -bottom-4 left-1/2 z-[70] flex w-max -translate-x-1/2 items-center gap-3 rounded-full border border-[#a58641]/30 bg-kis-navy px-5 py-2.5 shadow-2xl">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-kis-accent" />
          <span className="font-kis-body text-xs font-medium tracking-wide text-kis-cream">
            6,000+ students on campus
          </span>
        </div>
      </motion.div>
    </section>
  );
}
