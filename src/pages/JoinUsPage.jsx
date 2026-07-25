import { KisNavbar } from "@/components/kis/KisNavbar";
import { KisFooter } from "@/components/kis/KisFooter";
import { Button } from "@/components/ui/button";

const VACANCIES = [
  "PRT",
  "PGT",
  "TGT",
  "FRONT DESK",
  "SPORTS",
  "MUSIC",
  "DANCE"
];

export function JoinUsPage() {
  return (
    <div className="min-w-0 bg-kis-cream font-kis-body">
      <KisNavbar />
      <main className="mx-auto max-w-5xl py-20 px-6 md:px-16 text-left">
        <h1 className="mb-12 font-kis-headings text-4xl font-bold text-kis-navy md:text-5xl uppercase border-b-4 border-kis-primary inline-block pb-2">
          JOIN US
        </h1>
        
        <div className="flex flex-col gap-6">
          {VACANCIES.map((title) => (
            <div key={title} className="rounded-2xl border border-kis-border bg-white p-6 md:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-kis-navy mb-1 uppercase">{title}</h2>
                <div className="text-kis-primary font-bold mb-2">Vacancy</div>
                <div className="text-kis-navy font-medium mb-2">Experience: 05 Years</div>
                <p className="text-sm text-kis-muted-foreground leading-relaxed">
                  <span className="font-bold text-kis-navy">Skills:</span> Computer literacy and English Fluency is a must for all posts. Only experienced candidates from reputed school will be considered. Remuneration package will commensurate with skills, attitude and work experience in the relevant field.
                </p>
              </div>
              <div>
                <Button className="rounded-xl border-2 border-kis-primary bg-transparent text-kis-primary hover:bg-kis-primary hover:text-white px-8 py-6 font-kis-body font-bold whitespace-nowrap transition-colors">
                  APPLY NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <KisFooter />
    </div>
  );
}
