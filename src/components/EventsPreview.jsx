export function EventsPreview() {
  const events = [
    { date: "Oct 15", title: "Annual Sports Meet", desc: "Join us for a day of athletics and sportsmanship at the school ground." },
    { date: "Nov 02", title: "Science Exhibition", desc: "Students showcase innovative projects across various scientific disciplines." },
    { date: "Dec 20", title: "Winter Carnival", desc: "A festive celebration with food, games, and student performances." }
  ];

  return (
    <section className="bg-white px-6 py-16 md:px-16 md:py-20">
      <div className="mb-10 text-center">
        <h2 className="font-kis-headings text-3xl font-bold text-kis-navy">Upcoming Events</h2>
        <p className="mt-2 font-kis-body text-kis-muted-foreground">Stay updated with what's happening at KIS</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {events.map((event, i) => (
          <div key={i} className="rounded-xl border border-kis-border p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-kis-primary font-bold text-lg mb-2">{event.date}</div>
            <h3 className="font-kis-headings text-xl font-semibold text-kis-navy mb-2">{event.title}</h3>
            <p className="font-kis-body text-kis-muted-foreground">{event.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
