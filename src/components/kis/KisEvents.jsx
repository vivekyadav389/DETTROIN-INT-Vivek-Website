import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const EVENTS = [
  {
    image: "/images/events/investiture.jpg",
    alt: "Investiture ceremony, students in uniform on stage",
    tag: "Achievement",
    title: "Investiture Ceremony 2025",
    description: "We empower our students to take on responsibilities early, cultivating leadership, discipline, and a strong sense of duty towards their school and community.",
    date: "25 July 2025",
    attendance: "500+ Students",
  },
  {
    image: "/images/events/independence-day.jpg",
    alt: "Independence Day celebration with students and flag",
    tag: "Patriotism",
    title: "Independence Day Celebration",
    description: "Fostering a deep sense of patriotism, our students proudly celebrate the spirit of freedom and unity with cultural performances and flag hoisting.",
    date: "15 August 2024",
    attendance: "400+ Students",
  },
  {
    image: "/images/events/cultural-fest.jpg",
    alt: "Students dancing in colorful costumes at the cultural fest",
    tag: "Cultural",
    title: "Annual Cultural Fest 2024",
    description: "We encourage every student at School to express themselves creatively, showcasing their talents in dance, music, and arts on a grand stage.",
    date: "10 November 2024",
    attendance: "600+ Students",
  },
];

function KisEventCard({ image, alt, tag, title, description }) {
  return (
    <article className="group flex flex-col h-full overflow-hidden rounded-xl border border-kis-border bg-kis-cream transition-shadow hover:shadow-lg">
      <div className="overflow-hidden">
        <img src={image} alt={alt} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-col gap-3 p-6 flex-1">
        <h3 className="font-kis-headings text-xl font-bold leading-snug text-kis-navy">
          {title}
        </h3>
        <p className="font-kis-body text-sm leading-relaxed text-kis-muted-foreground">
          {description}
        </p>
        <div className="mt-auto pt-4">
          <a href="#" className="inline-flex items-center gap-1 font-kis-body text-sm font-bold text-kis-primary hover:underline hover:text-kis-primary/80">
            Explore now
          </a>
        </div>
      </div>
    </article>
  );
}

export function KisEvents() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="bg-kis-muted px-6 py-16 md:px-16 md:py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
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
        viewport={{ once: false, amount: 0.2 }}
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
