const STATS = [
  { value: "6,000+", label: "Students & Faculty" },
  { value: "60+", label: "National & Intl. Awards" },
  { value: "5 acres", label: "Green Campus" },
  { value: "CBSE", label: "Affiliated" },
];

export function KisStatsBar() {
  return (
    <div className="mt-16 w-full bg-kis-navy px-6 py-10 md:px-16">
      <dl className="flex flex-col divide-y divide-kis-navy-light md:flex-row md:divide-x md:divide-y-0">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-1 flex-col items-center gap-1 py-4 first:pt-0 last:pb-0 md:py-0"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-kis-headings text-4xl font-bold text-kis-accent">
              {stat.value}
            </dd>
            <span className="font-kis-body text-xs tracking-widest text-kis-muted">
              {stat.label.toUpperCase()}
            </span>
          </div>
        ))}
      </dl>
    </div>
  );
}
