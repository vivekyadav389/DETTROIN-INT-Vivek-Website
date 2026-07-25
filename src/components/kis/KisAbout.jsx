import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HIGHLIGHTS = [
  "CBSE Affiliated Curriculum",
  "Excellence in Education",
  "Extra Curricular Activity & Sports",
  "KIS Academy Programs",
];

export function KisAbout() {
  return (
    <section className="flex flex-col gap-10 bg-kis-cream px-6 py-16 md:flex-row md:gap-16 md:px-16 md:py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative grid w-full flex-shrink-0 grid-cols-2 p-6 md:w-[450px]"
      >
        <div className="z-10 -rotate-3 transform rounded-sm bg-[#fdfbf7] p-2 shadow-xl transition-all duration-300 hover:z-50 hover:scale-105 hover:rotate-0">
          <img
            src="/images/about/a2.jpg"
            alt="About the school 1"
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="z-20 -ml-4 mt-8 rotate-3 transform rounded-sm bg-[#fdfbf7] p-2 shadow-xl transition-all duration-300 hover:z-50 hover:scale-105 hover:rotate-0">
          <img
            src="/images/about/a3.jpg"
            alt="About the school 2"
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="z-30 -mt-8 rotate-2 transform rounded-sm bg-[#fdfbf7] p-2 shadow-xl transition-all duration-300 hover:z-50 hover:scale-105 hover:rotate-0">
          <img
            src="/images/about/a4.jpg"
            alt="About the school 3"
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className="z-40 -ml-4 mt-2 -rotate-2 transform rounded-sm bg-[#fdfbf7] p-2 shadow-xl transition-all duration-300 hover:z-50 hover:scale-105 hover:rotate-0">
          <img
            src="/images/about/a5.jpg"
            alt="About the school 4"
            className="aspect-square w-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <div className="mb-3 font-kis-body text-xs uppercase tracking-widest text-kis-muted-foreground">
          About the School
        </div>
        <h2 className="mb-5 font-kis-headings text-3xl font-bold leading-snug text-kis-navy">
          Built on 5 acres, away from the noise of the city
        </h2>
        <p className="mb-4 font-kis-body text-base leading-relaxed text-kis-muted-foreground">
          Krishna International School gives students room to actually be
          students — an equipped library, science laboratories, a theatre,
          and sports facilities designed for both academic rigour and genuine
          play. Under the school motto &ldquo;dedicated to excellence,&rdquo;
          the goal has never been marks alone.
        </p>
        <p className="mb-8 font-kis-body text-base leading-relaxed text-kis-muted-foreground">
          Every student leaves with more than a report card: sound moral
          values, a scientific temperament, and a real sense of
          responsibility toward the community.
        </p>

        <ul className="mb-8 flex flex-col gap-3">
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-kis-accent" />
              <span className="font-kis-body text-sm font-medium text-kis-navy">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="inline-flex items-center gap-1 font-kis-body text-sm font-medium text-kis-primary hover:underline"
        >
          Discover More
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </motion.div>
    </section>
  );
}
