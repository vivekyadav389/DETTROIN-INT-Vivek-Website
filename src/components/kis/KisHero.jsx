import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AVATARS = [
  { src: "/images/avatars/student-1.jpg", alt: "Student portrait" },
  { src: "/images/avatars/student-2.jpg", alt: "Student portrait" },
  { src: "/images/avatars/student-3.jpg", alt: "Student portrait" },
  { src: "/images/avatars/student-4.jpg", alt: "Student portrait" },
];

const COLLAGE_AVATARS = [
  "/images/avatars/student-5.jpg",
  "/images/avatars/student-6.jpg",
  "/images/avatars/student-7.jpg",
  "/images/avatars/student-8.jpg",
];

export function KisHero() {
  return (
    <section className="flex flex-col gap-10 bg-kis-cream px-6 pt-12 md:flex-row md:items-start md:gap-16 md:px-16 md:pt-16">
      <div className="flex-1 md:pt-6">
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
          <Button className="rounded-xl bg-kis-primary px-6 py-3 font-kis-body font-medium text-kis-primary-foreground hover:bg-kis-primary/90">
            Start Enrollment
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
      </div>

      <div className="w-full flex-shrink-0 md:w-96">
        <div className="overflow-hidden rounded-xl border border-kis-border">
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-2 overflow-hidden rounded-lg">
              <img
                src="/images/hero/students-outdoors.jpg"
                alt="Students smiling outdoors on campus"
                className="aspect-video w-full object-cover"
              />
            </div>
            {COLLAGE_AVATARS.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt="Student portrait"
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-kis-navy px-4 py-3">
          <span className="inline-block h-2 w-2 rounded-full bg-kis-accent" />
          <span className="font-kis-body text-sm text-kis-cream">
            6,000+ students learning on campus right now
          </span>
        </div>
      </div>
    </section>
  );
}
