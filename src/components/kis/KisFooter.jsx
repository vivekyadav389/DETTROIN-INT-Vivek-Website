import { motion } from "framer-motion";

const FOOTER_COLUMNS = [
  {
    title: "Krishna",
    links: ["About Us", "Admissions", "Leadership", "Affiliation", "Careers"],
  },
  {
    title: "Academics",
    links: ["CBSE Curriculum", "Programs", "Admissions", "Fee Structure"],
  },
  {
    title: "Resources",
    links: ["News & Events", "Notices", "Downloads", "Parent Portal"],
  },
  {
    title: "Contact Us",
    links: ["Aligarh, UP India", "info@kis.edu", "Campus Map"],
  },
];

export function KisFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="border-t border-kis-navy-light bg-kis-navy px-6 py-14 md:px-16"
    >
      <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <img src="/kis-logo.png" alt="KIS Logo" className="h-8 w-auto object-contain" />
            <img src="/kis-wide-name.png" alt="Krishna International School" className="h-6 w-auto object-contain brightness-0 invert" />
          </div>
          <p className="font-kis-body text-xs leading-relaxed text-kis-muted">
            Nurturing young minds since 2000. CBSE affiliated school in
            Aligarh, Uttar Pradesh.
          </p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <div className="mb-4 font-kis-body text-sm font-medium text-kis-cream">
              {column.title}
            </div>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-kis-body text-xs text-kis-muted hover:text-kis-cream"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-2 border-t border-kis-navy-light pt-6 font-kis-body text-xs text-kis-muted md:flex-row">
        <span>© 2025 Krishna International School. All rights reserved.</span>
        <span>Designed with care.</span>
      </div>
    </motion.footer>
  );
}
