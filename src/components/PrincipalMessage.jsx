import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export function KisPrincipal({ onPrevious, onNext }) {
  return (
    <section className="flex flex-col gap-10 bg-kis-cream px-6 py-16 md:flex-row md:gap-16 md:px-16 md:py-20">
      <div className="flex-1">
        <div className="mb-3 font-kis-body text-xs uppercase tracking-widest text-kis-muted-foreground">
          Leadership
        </div>
        <h2 className="mb-8 font-kis-headings text-3xl font-bold text-kis-navy">
          Words from the Principal&apos;s Desk
        </h2>

        <blockquote className="mb-6 border-l-4 border-kis-primary pl-6">
          <p className="font-kis-headings text-lg italic leading-relaxed text-kis-navy">
            &ldquo;Education is not the filling of a pail, but the lighting of
            a fire. At KIS we believe in guiding the primary instinct — a
            passion for learning, a respect for values, and a belief that
            even the smallest act of kindness can make a difference in the
            world.&rdquo;
          </p>
        </blockquote>

        <p className="mb-4 font-kis-body text-sm leading-relaxed text-kis-muted-foreground">
          At Krishna International School we strive to build a nurturing
          environment where every child is seen, heard, and valued. Our
          dedicated faculty works tirelessly to unlock the potential of each
          student and shape them into future leaders.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-1 font-kis-body text-sm font-medium text-kis-primary hover:underline"
        >
          Read More
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="flex w-full flex-shrink-0 flex-col items-center md:w-64">
        <div className="mb-4 w-full overflow-hidden rounded-xl">
          <img
            src="/images/leadership/principal.jpg"
            alt="Mrs. Reeba Sharma, Principal of Krishna International School"
            className="w-full object-cover"
          />
        </div>
        <div className="font-kis-headings text-base font-bold text-kis-navy">
          Mrs. Reeba Sharma
        </div>
        <div className="mt-1 text-center font-kis-body text-xs text-kis-muted-foreground">
          Principal, Krishna International School
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Previous message"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-kis-muted hover:bg-kis-muted/80"
          >
            <ChevronLeft className="h-3.5 w-3.5 text-kis-navy" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next message"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-kis-navy hover:bg-kis-navy-light"
          >
            <ChevronRight className="h-3.5 w-3.5 text-kis-cream" />
          </button>
        </div>
      </div>
    </section>
  );
}
