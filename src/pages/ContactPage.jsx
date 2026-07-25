import { KisNavbar } from "@/components/kis/KisNavbar";
import { KisFooter } from "@/components/kis/KisFooter";

export function ContactPage() {
  return (
    <div className="min-w-0 bg-kis-cream font-kis-body">
      <KisNavbar />
      <main className="mx-auto max-w-5xl py-20 px-6 md:px-16 text-center">
        <div className="mb-4 font-kis-body text-xs uppercase tracking-widest text-kis-muted-foreground">
          Get in Touch
        </div>
        <h1 className="mb-8 font-kis-headings text-4xl font-bold text-kis-navy md:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-kis-muted-foreground">
          We'd love to hear from you. Whether you have a question about admissions, our programs, or anything else, our team is ready to answer all your questions.
        </p>

        <div className="mt-16 flex flex-col md:flex-row gap-12 text-left justify-center">
          <div className="flex-1 rounded-2xl border border-kis-border bg-white p-8 shadow-sm max-w-md">
            <h3 className="mb-6 text-2xl font-bold text-kis-navy">Contact Information</h3>
            
            <div className="mb-4">
              <h4 className="font-bold text-kis-navy">Address:</h4>
              <p className="text-sm text-kis-muted-foreground mt-1">Krishna International School,<br />123 Education Lane, Cityville, State 12345</p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-bold text-kis-navy">Phone:</h4>
              <p className="text-sm text-kis-muted-foreground mt-1">+91 73510 50000<br />+91 98370 50000</p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-bold text-kis-navy">Email:</h4>
              <p className="text-sm text-kis-muted-foreground mt-1">info@krishnainternational.edu<br />admissions@krishnainternational.edu</p>
            </div>
          </div>
        </div>
      </main>
      <KisFooter />
    </div>
  );
}
