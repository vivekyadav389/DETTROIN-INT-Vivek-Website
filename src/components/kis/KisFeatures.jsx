import { GraduationCap, Library, ShieldCheck, Wind } from "lucide-react";

const FEATURES = [
  {
    icon: Wind,
    title: "Climate Controlled Classrooms",
    description:
      "State-of-the-art classrooms designed for optimal learning environments for students year-round.",
  },
  {
    icon: GraduationCap,
    title: "CBSE-Linked Curriculum",
    description:
      "Curriculum that integrates the CBSE framework with innovative programs to ensure all-round academic excellence.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Campus Security",
    description:
      "Advanced security surveillance and trained security personnel to ensure the complete safety of every student.",
  },
  {
    icon: Library,
    title: "Knowledge-Rich Library",
    description:
      "An expansive library, thousands of books, digital resources, and quiet reading spaces to inspire a love of learning.",
  },
];

function KisFeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-kis-border bg-kis-cream p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-kis-accent">
        <Icon className="h-5 w-5 text-kis-navy" aria-hidden="true" />
      </div>
      <h3 className="font-kis-headings text-lg font-bold leading-snug text-kis-navy">
        {title}
      </h3>
      <p className="font-kis-body text-sm leading-relaxed text-kis-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export function KisFeatures() {
  return (
    <section className="bg-kis-muted px-6 py-16 md:px-16 md:py-20">
      <div className="mb-12 text-center">
        <div className="mb-3 font-kis-body text-xs uppercase tracking-widest text-kis-muted-foreground">
          Our Offer
        </div>
        <h2 className="font-kis-headings text-3xl font-bold text-kis-navy">
          Everything Your Child Needs,
          <br />
          Under One Roof
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <KisFeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
