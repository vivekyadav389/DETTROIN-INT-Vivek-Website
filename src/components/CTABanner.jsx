import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="bg-kis-navy px-6 py-16 text-center md:px-16 md:py-24">
      <h2 className="mb-6 font-kis-headings text-3xl font-bold text-kis-cream md:text-4xl">
        Ready to shape your child's future?
      </h2>
      <p className="mb-8 font-kis-body text-lg text-kis-border max-w-2xl mx-auto">
        Admissions are now open for the upcoming academic session. Give your child the foundation they deserve at Krishna International School.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button className="rounded-xl bg-kis-primary px-8 py-6 font-kis-body text-lg font-medium text-kis-primary-foreground hover:bg-kis-primary/90">
          Apply Now
        </Button>
        <Button variant="outline" className="rounded-xl border-kis-cream px-8 py-6 font-kis-body text-lg font-medium text-kis-cream hover:bg-kis-cream hover:text-kis-navy">
          Contact Admissions
        </Button>
      </div>
    </section>
  );
}
