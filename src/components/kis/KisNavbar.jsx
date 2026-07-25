import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NAV_LINKS = ["About", "Academics", "Life at KIS", "Admission", "Contact"];

export function KisNavbar({ onEnrollClick }) {
  return (
    <header className="w-full border-b border-kis-navy-light bg-kis-navy">
      <nav
        aria-label="Main"
        className="flex items-center justify-between px-6 py-4 md:px-16"
      >
        <Link to="/" className="flex items-center gap-3">
          <img src="/kis-logo.png" alt="KIS Logo" className="h-10 w-auto object-contain" />
          <img src="/kis-wide-name.png" alt="Krishna International School" className="h-10 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((label) => {
            let path = "#";
            if (label === "About") path = "/about";
            if (label === "Life at KIS") path = "/life-at-kis";
            if (label === "Academics") path = "/academics";
            if (label === "Admission") path = "/enroll";
            if (label === "Contact") path = "/contact";
            
            return (
              <Link
                key={label}
                to={path}
                className="font-kis-body text-sm font-medium text-kis-muted hover:text-kis-cream"
              >
                {label}
              </Link>
            );
          })}
      </div>

      <Link to="/enroll" className="inline-flex h-10 items-center justify-center rounded-xl bg-kis-primary px-4 py-2 font-kis-body text-sm font-medium text-kis-primary-foreground transition-colors hover:bg-kis-primary/90">
        Enroll Now
      </Link>
    </nav>
    </header >
  );
}
