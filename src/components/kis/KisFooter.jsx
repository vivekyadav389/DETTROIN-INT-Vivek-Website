import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "ABOUT KIS",
    links: [
      "Overview",
      "School Features",
      "Chairman's Message",
      "Principal's Message",
      "Quintessential Campus",
      "Why Krishna International?",
      "Recognition and Award",
    ],
  },
  {
    title: "ADMISSION",
    links: ["Overview", "Fee Payment", "Fee Structure", "Withdrawals"],
  },
  {
    title: "ACADEMICS",
    links: [
      "Overview",
      "Academic Structure",
      "Student Teacher Partnership",
      "Curriculum",
      "Subjects",
      "Teaching Staff",
      "Roll of Honour",
      "Future Guidance",
    ],
  },
  {
    title: "CO-CURRICULAR",
    links: [
      "Overview",
      "Sports and Life Skills",
      "Performing Arts",
      "Fine Arts",
      "Excursions And Trips",
      "Events",
      "Community Engagement",
    ],
  },
  {
    title: "SCHOOL EVENTS",
    links: ["Recent", "Upcoming"],
  },
];

export function KisFooter() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="bg-kis-navy px-6 py-8 md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-kis-navy-light pb-6 mb-6">
          <div className="flex justify-center md:justify-start items-center">
            <img src="/kis-logo.png" alt="KIS Logo" className="h-20 w-auto object-contain" />
          </div>
          
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-kis-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-kis-body text-xs text-kis-cream font-medium">KRISHNA INTERNATIONAL SCHOOL</p>
                <p className="font-kis-body text-xs text-kis-muted">Delhi G.T. Road, Aligarh-202001<br/>(U.P.) INDIA</p>
                <a href="#" className="font-kis-body text-xs text-kis-primary font-bold mt-1 inline-block hover:underline">- View Direction</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-kis-primary shrink-0" />
              <p className="font-kis-body text-xs text-kis-muted">+ (91) 983-70-50000<br/>+ (91) 735-10-50000</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-kis-primary shrink-0" />
              <a href="mailto:info@kisaligarh.com" className="font-kis-body text-xs text-kis-muted hover:text-kis-cream">info@kisaligarh.com</a>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <a href="#" className="hover:opacity-80 transition-opacity"><img src="/images/footer/youtube.png" alt="YouTube" className="w-6 h-6 object-contain" /></a>
              <a href="https://www.facebook.com/krishnainternationalaligarh" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity"><img src="/images/footer/facebook.png" alt="Facebook" className="w-6 h-6 object-contain" /></a>
              <a href="https://www.instagram.com/krishnainternationalaligarh/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity"><img src="/images/footer/instagram.png" alt="Instagram" className="w-6 h-6 object-contain" /></a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center">
            <img src="/images/footer/qrcode.png" alt="QR Code" className="h-20 w-20 bg-white p-1.5 rounded-md object-contain" />
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-6 md:gap-8">
          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <div className="mb-3 font-kis-body text-[13px] font-medium text-kis-primary">
                {column.title}
              </div>
              <ul className="flex flex-col gap-1.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-kis-body text-[11px] text-kis-muted hover:text-kis-cream transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Join Us Column */}
          <div>
            <div className="mb-3 font-kis-body text-[13px] font-medium text-kis-primary">
              JOIN US
            </div>
            <ul className="flex flex-col gap-1.5 mb-4">
              <li><a href="#" className="font-kis-body text-[11px] text-kis-muted hover:text-kis-cream transition-colors">Vacancy</a></li>
              <li><a href="#" className="font-kis-body text-[11px] text-kis-muted hover:text-kis-cream transition-colors">Online Student Registration</a></li>
            </ul>
            <div className="mb-2 font-kis-body text-[13px] font-medium text-kis-primary">
              School App
            </div>
            <div className="flex gap-2 mb-2">
              <div className="flex flex-col items-center">
                <img src="/images/footer/android-qr.png" alt="Android App" className="w-12 h-12 bg-white p-1 rounded-sm object-contain" />
                <span className="text-[9px] mt-0.5 text-kis-cream font-bold">Android</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/footer/ios-qr.png" alt="iOS App" className="w-12 h-12 bg-white p-1 rounded-sm object-contain" />
                <span className="text-[9px] mt-0.5 text-kis-cream font-bold">iOS</span>
              </div>
            </div>
            <div className="text-[9px] text-kis-cream font-bold">School code: KISALG</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-kis-navy-light pt-4 font-kis-body text-[11px] text-kis-muted md:flex-row">
          <span>© 2025 Krishna International School. All rights reserved.</span>
          <span>Designed with care.</span>
        </div>
      </div>
    </motion.footer>
  );
}
