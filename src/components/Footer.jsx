export function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-12 text-gray-300 md:px-16">
      <div className="grid gap-8 md:grid-cols-4 border-b border-gray-800 pb-12">
        <div className="md:col-span-1">
          <div className="mb-4 text-xl font-bold text-white font-kis-headings">Krishna International</div>
          <p className="text-sm leading-relaxed">Dedicated to excellence in education, character building, and community service since our foundation.</p>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Academics</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Campus Life</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Parent Portal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Alumni</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Aligarh, Uttar Pradesh</li>
            <li>+91 98765 43210</li>
            <li>info@krishnainternational.edu</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2026 Krishna International School. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed by Vivek Yadav</p>
      </div>
    </footer>
  );
}
