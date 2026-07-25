import { motion } from "framer-motion";

const STATS = [
  { value: "6,000+", label: "Students & Faculty" },
  { value: "60+", label: "National & Intl. Awards" },
  { value: "5 acres", label: "Green Campus" },
  { value: "CBSE", label: "Affiliated" },
];

export function KisStatsBar() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="mt-16 w-full bg-kis-navy px-6 py-10 md:px-16 overflow-hidden">
      <motion.dl
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col divide-y divide-kis-navy-light md:flex-row md:divide-x md:divide-y-0"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="flex flex-1 flex-col items-center gap-1 py-4 first:pt-0 last:pb-0 md:py-0"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-kis-headings text-4xl font-bold text-kis-accent">
              {stat.value}
            </dd>
            <span className="font-kis-body text-xs tracking-widest text-kis-muted">
              {stat.label.toUpperCase()}
            </span>
          </motion.div>
        ))}
      </motion.dl>
    </div>
  );
}
