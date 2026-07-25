import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function KisCta({ onEnrollClick }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-kis-navy px-6 py-16 text-center md:px-16 md:py-20"
    >
      <div className="mb-4 font-kis-body text-xs uppercase tracking-widest text-kis-muted">
        Get Started
      </div>
      <h2 className="mb-4 font-kis-headings text-3xl font-bold text-kis-cream md:text-4xl">
        Give Your Child the KIS Advantage
      </h2>
      <p className="mx-auto mb-10 max-w-md font-kis-body text-base leading-relaxed text-kis-muted">
        Enroll your child at Krishna International School and raise
        confident, compassionate leaders of tomorrow.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild className="rounded-xl bg-kis-primary px-7 py-3 font-kis-body font-medium text-kis-primary-foreground hover:bg-kis-primary/90">
          <Link to="/enroll">Apply Now</Link>
        </Button>
        <Button
          variant="outline"
          className="rounded-xl border-kis-cream px-7 py-3 font-kis-body font-medium text-kis-cream hover:bg-kis-cream hover:text-kis-navy"
        >
          Know More
        </Button>
      </div>
    </motion.section>
  );
}
