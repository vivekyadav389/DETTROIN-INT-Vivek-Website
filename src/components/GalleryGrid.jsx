export function GalleryGrid() {
  const images = [
    "/images/about/classroom.jpg",
    "/images/about/cricket.jpg",
    "/images/about/annual-day.jpg",
    "/images/hero/students-outdoors.jpg"
  ];

  return (
    <section className="bg-kis-cream px-6 py-16 md:px-16 md:py-20">
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="font-kis-headings text-3xl font-bold text-kis-navy">Campus Life</h2>
          <p className="mt-2 font-kis-body text-kis-muted-foreground">Glimpses of everyday learning and joy</p>
        </div>
        <a href="#" className="hidden md:block font-kis-body text-sm font-medium text-kis-primary hover:underline">View All Gallery</a>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-xl bg-gray-200">
            {/* Using placeholder colors if images don't exist yet */}
            <div className="w-full h-full bg-kis-muted flex items-center justify-center text-xs text-kis-muted-foreground">Image {i+1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
