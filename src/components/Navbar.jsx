import { Button } from "@/components/ui/button";

const NAV_LINKS = ["About", "Academics", "Life at KIS", "Admission", "Contact"];

export function KisNavbar() {
  return (
    <header className="w-full bg-kis-cream border-b border-kis-border">
      <nav
        aria-label="Main"
        className="flex items-center justify-between px-6 py-4 md:px-16"
      >
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-kis-navy">
            <span className="font-kis-headings text-lg font-bold text-kis-cream">
              K
            </span>
          </div>
          <div>
            <div className="font-kis-headings text-base font-bold leading-tight text-kis-navy">
              Krishna International
            </div>
            <div className="font-kis-body text-xs uppercase tracking-widest text-kis-muted-foreground">
              CBSE · Aligarh
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="font-kis-body text-sm font-medium text-kis-foreground hover:text-kis-primary"
            >
              {label}
            </a>
          ))}
      </div>

      <Button className="rounded-xl bg-kis-primary font-kis-body font-medium text-kis-primary-foreground hover:bg-kis-primary/90">
        Enroll Now
      </Button>
    </nav>
    </header >
  );
}
