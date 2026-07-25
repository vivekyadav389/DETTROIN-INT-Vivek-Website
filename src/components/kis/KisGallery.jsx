import { useState } from "react";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["All", "Sports", "Events", "Academics", "Cultural"];

const PHOTOS = [
  { src: "/images/gallery/lab.jpg", alt: "Students doing a science experiment in the lab", span: "col-span-2 row-span-2", category: "Academics" },
  { src: "/images/gallery/track.jpg", alt: "Children running on the school track on sports day", category: "Sports" },
  { src: "/images/gallery/dance.jpg", alt: "Students performing classical Indian dance on stage", category: "Cultural" },
  { src: "/images/gallery/prize.jpg", alt: "Prize distribution ceremony with students and trophies", category: "Events" },
  { src: "/images/gallery/library.jpg", alt: "Students reading in the school library", category: "Academics" },
];

export function KisGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visiblePhotos =
    activeCategory === "All"
      ? PHOTOS
      : PHOTOS.filter((photo) => photo.category === activeCategory);

  return (
    <section className="bg-kis-cream px-6 py-16 md:px-16 md:py-20">
      <div className="mb-10 text-center">
        <div className="mb-3 font-kis-body text-xs uppercase tracking-widest text-kis-muted-foreground">
          Photo Gallery
        </div>
        <h2 className="font-kis-headings text-3xl font-bold text-kis-navy">
          Our Life at KIS
        </h2>
      </div>

      <div
        role="tablist"
        aria-label="Filter gallery by category"
        className="mb-8 flex flex-wrap justify-center gap-3"
      >
        {CATEGORIES.map((category) => (
          <Button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? "rounded-lg bg-kis-primary font-kis-body text-sm font-medium text-kis-primary-foreground hover:bg-kis-primary/90"
                : "rounded-lg bg-kis-muted font-kis-body text-sm font-medium text-kis-foreground hover:bg-kis-muted/80"
            }
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {visiblePhotos.map((photo) => (
          <div
            key={photo.src}
            className={`overflow-hidden rounded-xl ${photo.span ?? ""}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button
          variant="outline"
          className="rounded-xl border-kis-navy px-6 py-3 font-kis-body font-medium text-kis-navy hover:bg-kis-navy hover:text-kis-cream"
        >
          Browse All Photos
        </Button>
      </div>
    </section>
  );
}
