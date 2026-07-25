import { KisNavbar } from "@/components/kis/KisNavbar";
import { KisFooter } from "@/components/kis/KisFooter";

export function KisEnrollPage() {
  return (
    <div className="min-w-0 bg-kis-cream font-kis-body">
      <KisNavbar />
      <main className="mx-auto max-w-4xl py-16 px-6 md:px-16">
        <div className="mb-10 text-center">
          <div className="mb-3 font-kis-body text-xs uppercase tracking-widest text-kis-muted-foreground">
            Admissions
          </div>
          <h1 className="font-kis-headings text-3xl font-bold text-kis-navy md:text-4xl">
            Student Registration
          </h1>
        </div>
        
        <div className="rounded-2xl border border-kis-border bg-white p-8 shadow-xl">
          <form className="flex flex-col gap-6 text-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Row 1 */}
              <div className="flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Wing *:</label>
                <select className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground focus:border-kis-primary focus:outline-none">
                  <option>--TYPE --</option>
                  <option>Pre-Primary</option>
                  <option>Primary</option>
                  <option>Middle</option>
                  <option>Senior</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Class *:</label>
                <select className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground focus:border-kis-primary focus:outline-none">
                  <option></option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Student Name:*</label>
                <input type="text" placeholder="Student Name" className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground placeholder:text-kis-muted-foreground focus:border-kis-primary focus:outline-none" />
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Date of Birth :</label>
                <input 
                  type="date" 
                  className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground focus:border-kis-primary focus:outline-none" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Father Name:*</label>
                <input type="text" placeholder="Father Name" className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground placeholder:text-kis-muted-foreground focus:border-kis-primary focus:outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Mother Name:</label>
                <input type="text" placeholder="Mother Name" className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground placeholder:text-kis-muted-foreground focus:border-kis-primary focus:outline-none" />
              </div>

              {/* Row 3 */}
              <div className="flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Gender:*</label>
                <select className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground focus:border-kis-primary focus:outline-none">
                  <option>--GENDER --</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Mobile:*</label>
                <input type="tel" placeholder="Mobile" className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground placeholder:text-kis-muted-foreground focus:border-kis-primary focus:outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Current School:</label>
                <input type="text" placeholder="Current School" className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground placeholder:text-kis-muted-foreground focus:border-kis-primary focus:outline-none" />
              </div>

              {/* Row 4 */}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Previous School:*</label>
                <input type="text" placeholder="Previous School" className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground placeholder:text-kis-muted-foreground focus:border-kis-primary focus:outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Previous Class:*</label>
                <select className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground focus:border-kis-primary focus:outline-none">
                  <option></option>
                </select>
              </div>
              
              {/* Row 5 */}
              <div className="col-span-1 md:col-span-3 flex flex-col gap-2">
                <label className="font-medium text-kis-navy">Address:</label>
                <textarea placeholder="Address" rows={2} className="rounded-lg border border-kis-border bg-kis-cream p-3 text-kis-foreground placeholder:text-kis-muted-foreground focus:border-kis-primary focus:outline-none resize-none"></textarea>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button type="button" className="rounded-xl bg-[#5cb85c] px-8 py-3 font-kis-body font-bold text-white transition-colors hover:bg-[#4cae4c]">
                Submit
              </button>
              <button type="button" className="rounded-xl bg-kis-navy px-8 py-3 font-kis-body font-bold text-white transition-colors hover:bg-kis-navy/90">
                Reset
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="font-bold text-[#f44336] text-xs">
                * NOTE:- For any query contact on +91 73510 50000 or +91 98370 50000
              </p>
            </div>
          </form>
        </div>
      </main>
      <KisFooter />
    </div>
  );
}
