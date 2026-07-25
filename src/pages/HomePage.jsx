import { KisNavbar } from "@/components/kis/KisNavbar";
import { KisHero } from "@/components/kis/KisHero";
import { KisStatsBar } from "@/components/kis/KisStatsBar";
import { KisAbout } from "@/components/kis/KisAbout";
import { KisFeatures } from "@/components/kis/KisFeatures";
import { KisPrincipal } from "@/components/kis/KisPrincipal";
import { KisEvents } from "@/components/kis/KisEvents";
import { KisCta } from "@/components/kis/KisCta";
import { KisFooter } from "@/components/kis/KisFooter";

export default function KisLandingPage() {
  return (
    <div className="min-w-0 bg-kis-cream font-kis-body">
      <KisNavbar />
      <KisHero />
      <KisStatsBar />
      <KisAbout />
      <KisFeatures />
      <KisPrincipal />
      <KisEvents />

      <KisCta />
      <KisFooter />
    </div>
  );
}
