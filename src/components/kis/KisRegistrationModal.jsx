import { X } from "lucide-react";

export function KisRegistrationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl rounded-xl border border-gray-700 bg-[#2b2b2b] p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <form className="flex flex-col gap-5 text-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Row 1 */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Wing *:</label>
              <select className="rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 focus:border-kis-primary focus:outline-none">
                <option>--TYPE --</option>
                <option>Pre-Primary</option>
                <option>Primary</option>
                <option>Middle</option>
                <option>Senior</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Class *:</label>
              <select className="rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 focus:border-kis-primary focus:outline-none">
                <option></option>
                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Student Name:*</label>
              <input type="text" placeholder="Student Name" className="rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 placeholder:text-gray-400 focus:border-kis-primary focus:outline-none" />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Date of Birth :</label>
              <div className="flex gap-2">
                <select className="flex-1 rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 focus:border-kis-primary focus:outline-none">
                  <option>DD</option>
                </select>
                <select className="flex-1 rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 focus:border-kis-primary focus:outline-none">
                  <option>MM</option>
                </select>
                <select className="flex-1 rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 focus:border-kis-primary focus:outline-none">
                  <option>YYYY</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Father Name:*</label>
              <input type="text" placeholder="Father Name" className="rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 placeholder:text-gray-400 focus:border-kis-primary focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Mother Name:</label>
              <input type="text" placeholder="Mother Name" className="rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 placeholder:text-gray-400 focus:border-kis-primary focus:outline-none" />
            </div>

            {/* Row 3 */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Gender:*</label>
              <select className="rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 focus:border-kis-primary focus:outline-none">
                <option>--GENDER --</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Mobile:*</label>
              <input type="tel" placeholder="Mobile" className="rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 placeholder:text-gray-400 focus:border-kis-primary focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Current School:</label>
              <input type="text" placeholder="Current School" className="rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 placeholder:text-gray-400 focus:border-kis-primary focus:outline-none" />
            </div>

            {/* Row 4 */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <label className="text-gray-300">Previous School:*</label>
              <input type="text" placeholder="Previous School" className="rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 placeholder:text-gray-400 focus:border-kis-primary focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300">Previous Class:*</label>
              <select className="rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 focus:border-kis-primary focus:outline-none">
                <option></option>
              </select>
            </div>
            
            {/* Row 5 */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-2">
              <label className="text-gray-300">Address:</label>
              <textarea placeholder="Address" rows={2} className="rounded-md border border-gray-600 bg-[#505050] p-2.5 text-gray-300 placeholder:text-gray-400 focus:border-kis-primary focus:outline-none resize-none"></textarea>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <div className="flex items-center justify-between rounded bg-white p-3 pr-2 w-[300px] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-sm border-2 border-gray-300 bg-white"></div>
                <span className="text-sm font-medium text-gray-700">I'm not a robot</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-8 h-8" alt="reCAPTCHA logo" />
                <span className="text-[9px] text-gray-500 mt-1">reCAPTCHA</span>
                <div className="text-[7px] text-gray-500 flex gap-1"><a href="#" className="hover:underline">Privacy</a> - <a href="#" className="hover:underline">Terms</a></div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-4">
            <button type="button" className="rounded-full bg-[#5cb85c] px-8 py-2 font-medium text-white hover:bg-[#4cae4c]">
              Submit
            </button>
            <button type="button" className="rounded-full bg-[#337ab7] px-8 py-2 font-medium text-white hover:bg-[#286090]">
              Reset
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="font-bold text-[#ffeb3b] text-xs">
              * NOTE:- For any query contact on +91 73510 50000 or +91 98370 50000
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
