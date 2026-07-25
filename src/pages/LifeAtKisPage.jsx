import { KisNavbar } from "@/components/kis/KisNavbar";
import { KisGallery } from "@/components/kis/KisGallery";
import { KisFooter } from "@/components/kis/KisFooter";

export function LifeAtKisPage() {
  return (
    <div className="min-w-0 bg-kis-cream font-kis-body">
      <KisNavbar />
      <div className="pt-8">
        <KisGallery />
      </div>
      <KisFooter />
    </div>
  );
}
