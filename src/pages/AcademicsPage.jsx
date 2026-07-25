import { KisNavbar } from "@/components/kis/KisNavbar";
import { KisFooter } from "@/components/kis/KisFooter";

export function AcademicsPage() {
  return (
    <div className="min-w-0 bg-kis-cream font-kis-body">
      <KisNavbar />
      <main className="mx-auto max-w-5xl py-20 px-6 md:px-16 text-center">
        <div className="mb-4 font-kis-body text-xs uppercase tracking-widest text-kis-muted-foreground">
          Curriculum & Learning
        </div>
        <h1 className="mb-8 font-kis-headings text-4xl font-bold text-kis-navy md:text-5xl">
          Academics at KIS
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-kis-muted-foreground">
          Our curriculum is designed to foster intellectual curiosity, critical thinking, and a lifelong love of learning. We offer a comprehensive educational experience that prepares students for success in the modern world.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="rounded-2xl border border-kis-border bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-kis-navy">Primary School</h3>
            <p className="text-sm leading-relaxed text-kis-muted-foreground">Building a strong foundation in core subjects while encouraging creativity and social development.</p>
          </div>
          <div className="rounded-2xl border border-kis-border bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-kis-navy">Middle School</h3>
            <p className="text-sm leading-relaxed text-kis-muted-foreground">Fostering independent learning and critical thinking skills as students explore a wider range of subjects.</p>
          </div>
          <div className="rounded-2xl border border-kis-border bg-white p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-kis-navy">Senior School</h3>
            <p className="text-sm leading-relaxed text-kis-muted-foreground">Preparing students for higher education and future careers through rigorous academic programs and specialization.</p>
          </div>
        </div>
      </main>
      <KisFooter />
    </div>
  );
}
