import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const EVENTS = [
  {
    image: "/images/events/investiture.jpg",
    alt: "Investiture ceremony, students in uniform on stage",
    tag: "Achievement",
    title: "Investiture Ceremony 2025",
    date: "25 July 2025",
    attendance: "500+ Students",
  },
  {
    image: "/images/events/independence-day.jpg",
    alt: "Independence Day celebration with students and flag",
    tag: "Patriotism",
    title: "Independence Day Celebration",
    date: "15 August 2024",
    attendance: "400+ Students",
  },
  {
    image: "/images/events/cultural-fest.jpg",
    alt: "Students dancing in colorful costumes at the cultural fest",
    tag: "Cultural",
    title: "Annual Cultural Fest 2024",
    date: "10 November 2024",
    attendance: "600+ Students",
  },
];

function KisEventCard({ image, alt, tag, title, date, attendance }) {
  return (
    <article className="flex flex-col h-full overflow-hidden rounded-xl border border-kis-border bg-kis-cream">
      <img src={image} alt={alt} className="aspect-video w-full object-cover" />
      <div className="flex flex-col gap-2 p-5 flex-1">
        <span className="font-kis-body text-xs font-medium uppercase tracking-wider text-kis-primary">
          {tag}
        </span>
        <h3 className="font-kis-headings text-lg font-bold leading-snug text-kis-navy">
          {title}
        </h3>
        <div className="mt-auto flex gap-4 pt-4 font-kis-body text-xs text-kis-muted-foreground">
          <span>{date}</span>
          <span>{attendance}</span>
        </div>
      </div>
    </article>
  );
}

export function KisEvents() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-kis-muted px-6 py-16 md:px-16 md:py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <div className="mb-3 font-kis-body text-xs uppercase tracking-widest text-kis-muted-foreground">
            Events
          </div>
          <h2 className="font-kis-headings text-3xl font-bold text-kis-navy">
            Events That Shape Memories
          </h2>
        </div>
        <div className="flex gap-3">
          <Button className="rounded-lg bg-kis-primary font-kis-body text-sm font-medium text-kis-primary-foreground hover:bg-kis-primary/90">
            Recent Events
          </Button>
          <a
            href="#"
            className="inline-flex items-center gap-1 font-kis-body text-sm font-medium text-kis-navy hover:underline"
          >
            View All
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {EVENTS.map((event) => (
          <motion.div key={event.title} variants={itemVariants} className="h-full">
            <KisEventCard {...event} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
