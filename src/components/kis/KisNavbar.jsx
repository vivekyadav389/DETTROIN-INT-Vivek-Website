import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const NAV_MENU = [
  {
    label: "ABOUT KIS",
    path: "/about",
    dropdown: ["Overview", "School Features", "Chairman's Message", "Principal's Message", "Quintessential Campus", "Why Krishna International?", "Recognition and Award"]
  },
  {
    label: "ADMISSION",
    path: "/enroll",
    dropdown: ["Overview", "Fee Payment", "Enroll", "Transfer certificate"]
  },
  {
    label: "ACADEMICS",
    path: "/academics",
    dropdown: ["Overview", "Academic Structure", "Subjects Taught", "Examination & Promotion", "Teaching Methodology", "School Regulation", "Student Council List", "Facilitators Development", "Roll of Honour", "Career Guidance", "Mandatory Disclosure"]
  },
  {
    label: "CO-CURRICULAR",
    path: "#",
    dropdown: ["Overview", "Sports and Life Skills", "Performing Arts", "Fine Arts", "Excursions And Trips", "Events", "Community Engagement"]
  },
  {
    label: "SCHOOL EVENTS",
    path: "#",
    dropdown: ["Recent", "Upcoming"]
  },
  {
    label: "SCHOOL PORTAL",
    path: "#",
    dropdown: ["Overview", "Alumni"]
  },
  {
    label: "GALLERY",
    path: "/life-at-kis",
    dropdown: ["Life at KIS", "Facebook", "Instagram"]
  },
  {
    label: "JOIN US",
    path: "/join",
    dropdown: ["Vacancy", "Online Student Registration"]
  }
];

export function KisNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-kis-navy-light bg-kis-navy">
      <nav
        aria-label="Main"
        className="flex items-center justify-between px-6 py-4 md:px-16"
      >
        <Link to="/" className="flex items-center gap-3">
          <img src="/kis-logo.png" alt="KIS Logo" className="h-10 w-auto object-contain" />
          <img src="/kis-wide-name.png" alt="Krishna International School" className="h-10 w-auto object-contain hidden sm:block" />
        </Link>

        <div className="hidden items-center gap-4 xl:flex">
          {NAV_MENU.map((item) => (
            <div key={item.label} className="group relative py-2">
              <Link
                to={item.path}
                className="font-kis-body text-[11px] font-bold text-kis-muted hover:text-kis-primary transition-all whitespace-nowrap tracking-wide border-b-2 border-transparent group-hover:border-kis-primary pb-1 block"
              >
                {item.label}
              </Link>
              
              {item.dropdown && item.dropdown.length > 0 && (
                <div className="absolute top-full left-0 mt-0 hidden w-56 flex-col bg-white shadow-xl rounded-xl border border-gray-100 py-3 group-hover:flex z-50">
                  {item.dropdown.map((dropItem) => {
                    let href = "#";
                    if (dropItem === "Facebook") href = "https://www.facebook.com/krishnainternationalaligarh";
                    if (dropItem === "Instagram") href = "https://www.instagram.com/krishnainternationalaligarh/";
                    if (dropItem === "Life at KIS") href = "/life-at-kis";
                    
                    if (item.label === "ABOUT KIS") {
                      if (dropItem === "Overview") href = "/about#overview";
                      if (dropItem === "School Features") href = "/about#overview";
                      if (dropItem === "Chairman's Message") href = "/about#chairman";
                      if (dropItem === "Principal's Message") href = "/about#principal";
                      if (dropItem === "Quintessential Campus") href = "/about#campus";
                      if (dropItem === "Why Krishna International?") href = "/about#why-kis";
                      if (dropItem === "Recognition and Award") href = "/about#recognition";
                    }

                    const isExternal = href.startsWith("http");

                    if (isExternal) {
                      return (
                        <a
                          key={dropItem}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2 font-kis-body text-[11px] font-bold text-kis-navy hover:bg-kis-cream hover:text-kis-primary transition-colors text-left"
                        >
                          {dropItem}
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={dropItem}
                        to={href}
                        className="px-5 py-2 font-kis-body text-[11px] font-bold text-kis-navy hover:bg-kis-cream hover:text-kis-primary transition-colors text-left"
                      >
                        {dropItem}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <Link to="/enroll" className="inline-flex h-9 items-center justify-center rounded-xl bg-kis-primary px-4 py-2 font-kis-body text-xs font-bold text-kis-primary-foreground transition-colors hover:bg-kis-primary/90 whitespace-nowrap ml-4">
          Enroll Now
        </Link>
      </nav>
    </header>
  );
}
