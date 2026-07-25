import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { KisNavbar } from "@/components/kis/KisNavbar";
import { KisFooter } from "@/components/kis/KisFooter";
import { KisRegistrationModal } from "@/components/kis/KisRegistrationModal";
import { motion } from "framer-motion";

const TABS = [
  "OVERVIEW",
  "CHAIRMAN'S MESSAGE",
  "PRINCIPAL'S MESSAGE",
  "QUINTESSENTIAL CAMPUS",
  "WHY KIS?",
  "RECOGNITION AND AWARDS",
];

const CARDS = [
  { title: "ADMISSION", image: "/images/adm-image.jpg" },
  { title: "REGISTRATION", image: "/images/admission_overview.jpg" },
  { title: "UPCOMING EVENTS", image: "/images/upcoming-event.jpg" },
];

const HERO_IMAGES = {
  "OVERVIEW": "/images/about-us-head1.jpg",
  "CHAIRMAN'S MESSAGE": "/director.png",
  "PRINCIPAL'S MESSAGE": "/images/leadership/principal-head3.jpg",
  "QUINTESSENTIAL CAMPUS": "/images/quintessential-campus.jpg",
  "WHY KIS?": "/images/why_kis1.jpg",
  "RECOGNITION AND AWARDS": "/images/recognition-awards.jpg",
};

export function KisAboutPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("CHAIRMAN'S MESSAGE");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "overview") setActiveTab("OVERVIEW");
    else if (hash === "chairman") setActiveTab("CHAIRMAN'S MESSAGE");
    else if (hash === "principal") setActiveTab("PRINCIPAL'S MESSAGE");
    else if (hash === "campus") setActiveTab("QUINTESSENTIAL CAMPUS");
    else if (hash === "why-kis") setActiveTab("WHY KIS?");
    else if (hash === "recognition") setActiveTab("RECOGNITION AND AWARDS");
  }, [location.hash]);

  return (
    <div className="min-w-0 bg-kis-cream text-kis-foreground font-kis-body">
      <KisNavbar onEnrollClick={() => setIsModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative flex min-h-[400px] w-full items-center overflow-hidden px-6 py-12 md:px-16 md:py-0">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGES[activeTab] || "/director.png"} alt="Hero Background" className="h-full w-full object-cover object-center transition-opacity duration-500" />
        </div>
        <div className="relative z-10 w-full md:w-1/2">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border-l-4 border-kis-primary bg-kis-navy/90 px-6 py-3 font-kis-headings text-3xl font-bold tracking-widest text-kis-cream backdrop-blur-sm md:text-4xl"
          >
            ABOUT US
          </motion.h1>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-kis-cream px-6 py-10 md:px-16">
        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors border border-transparent ${
                activeTab === tab
                  ? "bg-kis-primary text-kis-primary-foreground border-kis-primary shadow-sm"
                  : "bg-kis-muted text-kis-muted-foreground hover:bg-white hover:text-kis-navy hover:border-kis-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          {activeTab === "OVERVIEW" && (
            <>
              <h2 className="mb-2 font-kis-headings text-3xl font-bold text-kis-navy uppercase">
                ABOUT KRISHNA INTERNATIONAL SCHOOL
              </h2>
              <div className="mb-8 h-1 w-16 bg-kis-primary" />
              
              <div className="flex flex-col gap-6 text-sm leading-relaxed text-kis-muted-foreground">
                <p>
                  We at Krishna International ensure our students grow as a GREAT citizen, empowered to live successfully in their personal and global lives.
                </p>
                <div>
                  <p className="font-bold text-kis-primary text-base mb-3">Being a GREAT citizen means :-</p>
                  <ul className="space-y-2">
                    <li><span className="font-bold text-kis-primary">G</span> - Giving and receiving the very best.</li>
                    <li><span className="font-bold text-kis-primary">R</span> - Respecting ourselves, others and our surroundings.</li>
                    <li><span className="font-bold text-kis-primary">E</span> - Excelling by setting high expectations and having a solid work ethic.</li>
                    <li><span className="font-bold text-kis-primary">A</span> - Attitude of being open to learning.</li>
                    <li><span className="font-bold text-kis-primary">T</span> - Thinking critically and creatively in a changing world</li>
                  </ul>
                </div>
                <p>
                  We highly value connections with our parents and community. Building strong family and community partnerships enable us to maximize the learning and social experiences of our students.
                </p>
                <ul className="space-y-1">
                  <li>• Our warm, family-like environment where everyone counts!</li>
                  <li>• Our high expectations for our students to reach their full potential.</li>
                  <li>• Our committed, dedicated and caring staff strive to make your child's learning and social experiences fun and meaningful.</li>
                </ul>
              </div>
            </>
          )}

          {activeTab === "CHAIRMAN'S MESSAGE" && (
            <>
              <h2 className="mb-2 font-kis-headings text-3xl font-bold text-kis-navy uppercase">
                CHAIRMAN'S MESSAGE
              </h2>
              <div className="mb-8 h-1 w-16 bg-kis-primary" />
              
              <div className="flex flex-col gap-6 text-sm leading-relaxed text-kis-muted-foreground">
                <p>
                  Don't educate your children to be rich. Educate them to be happy, so they know the value of things, not the price.
                </p>
                <p>
                  The above said has been stuck with me for years. Educational is not just about getting a job and being rich. It is about imparting principles, ethics & moral values. Educating the mind without educating the heart is not education.
                </p>
                <p>
                  Educational institutions all around the world with the aspiration & students & parents have undergone critical transformations with time. At KIS we aspire to provide top-quality education to all, win a well-balanced & relevant curriculum.
                </p>
                <p>
                  We stand on the threshold of a new beginning. KIS has been endeavouring to create independent thinking, creative & sensitive individuals who will serve as torch bearers to further trigger many more achievements & create a world, painted with love, harmony, happiness.
                </p>
                <p>
                  In short, we aim at ensuring that our comprehensive development programmes provide our students with an international learning experience and at the same time with no dearth for core Indian values and ethics.
                </p>
              </div>

              <div className="mt-12 text-right">
                <div className="font-kis-headings text-xl font-bold text-kis-primary uppercase tracking-wide">
                  PRAVIN AGARWAL
                </div>
                <div className="text-xs text-kis-muted-foreground">
                  Managing Chairman, KIS-
                </div>
              </div>
            </>
          )}

          {activeTab === "PRINCIPAL'S MESSAGE" && (
            <>
              <h2 className="mb-2 font-kis-headings text-3xl font-bold text-kis-navy uppercase">
                PRINCIPAL'S MESSAGE
              </h2>
              <div className="mb-8 h-1 w-16 bg-kis-primary" />
              
              <div className="flex flex-col gap-6 text-sm leading-relaxed text-kis-muted-foreground">
                <p className="font-bold text-kis-primary text-base">
                  It is with great pleasure that I welcome you to our school website.
                </p>
                <p className="font-bold text-kis-navy">
                  Dear Parents, Students & Visitors:-
                </p>
                <p>
                  As we embark unto a new journey of growth & learning, we are more than certain that with the help of God & your continuous support, we will be able to take our school to the next level.
                </p>
                <p>
                  As a Principal, I am hugely impressed by the commitment of the school & the staff to the provision of an excellent all-round education for our students in our state of the art facilities, under my leadership, and as a team working together, we strongly promote academics as well as co-curricular achievement among our students.
                </p>
                <p>
                  I strongly believe being an educator myself that our job is not to prepare students for something. Our job is to help students prepare themselves for anything. The ability to learn is a stein which is not only for students but for us educators and parents as well.
                </p>
                <p>
                  I am also pleased to inform that Krishna International School, Aligarh is breaking new grounds offering all three streams-Humanities, Commerce and Sciences along with NCC. We are here committed to impart quality education which we are known for. In our voyage for excellence in academics, we never close our eyes towards the liability that we sense towards our society as we believe education without values is like a beautiful body without a soul.
                </p>
                <p>
                  It is in wanting to learn that will result in actually getting to learn.
                </p>
              </div>

              <div className="mt-12 text-right">
                <div className="font-kis-headings text-xl font-bold text-kis-primary uppercase tracking-wide">
                  -NANDINI SINGH AGARWAL
                </div>
                <div className="text-xs text-kis-muted-foreground">
                  Principal KIS
                </div>
              </div>
            </>
          )}

          {activeTab === "QUINTESSENTIAL CAMPUS" && (
            <>
              <h2 className="mb-2 font-kis-headings text-3xl font-bold text-kis-navy uppercase">
                QUINTESSENTIAL CAMPUS
              </h2>
              <div className="mb-8 h-1 w-16 bg-kis-primary" />
              
              <div className="flex flex-col gap-6 text-sm leading-relaxed text-kis-muted-foreground">
                <p>
                  Set in 5 acres of attractive countryside, just five kilometres from Aligarh city centre, KrishKnights enjoy a calm, happy and purposeful atmosphere drawing upon the beautiful location of the campus.
                </p>
                <p>
                  Krishna International is a marvel of modern architecture and impeccable landscaping. Blending seamlessly with the environs, beautiful and functional academic campus.
                </p>
                <p>
                  Lively Air Conditioned classrooms, well-equipped laboratories, spacious and comfortable social rooms are at the heart of the School campus. Extensive co-curricular facilities including an indoor swimming pool and multiple playing fields and courts add to the tranquil environment at Krishna International.
                </p>
                <p>
                  The School is a safe and secure place for Students. The CCTV control room monitors all activities pan-campus without interfering with the privacy of Students.
                </p>
                <p>
                  School boasts state of the art air-conditioned transport to ensure the comfort of the students during their commute to and from school.
                </p>
                <p>
                  Professional security personnel guard the campus round-the-clock to ensure utmost safe environment for the Future Brand Ambassadors of the School.
                </p>
              </div>
            </>
          )}

          {activeTab === "WHY KIS?" && (
            <>
              <h2 className="mb-2 font-kis-headings text-3xl font-bold text-kis-navy uppercase">
                WHY KRISHNA INTERNATIONAL SCHOOL?
              </h2>
              <div className="mb-8 h-1 w-16 bg-kis-primary" />
              
              <div className="flex flex-col gap-6 text-sm leading-relaxed text-kis-muted-foreground">
                <p className="font-bold text-kis-primary text-base">Dear Parents,</p>
                <p>
                  Won't you all agree that a school must be located away from the hustle-bustle of the city? There should be no power-horns cracking the ear-drums of the innocent lives- the bedlam of the market, the rush of traffic and all this prove to be a nightmare for school-going kids. No wonder, today's child is averse to teaching-learning, not to say disoriented to visit the school and classroom(s).
                </p>
                <p>
                  Times have changed and so do the tastes, demands, and requirements of a modern kid and the so-called old-schools of learning fail to cater to live up to the sky-rocketing aspirations of a cyber-techno pupil of gen-next. The century-old ways and methodologies can't work and take the pupils to trail off the path of modern challenges and make them an 'unfit'.
                </p>
                <p>
                  Krishna International School since its inception tried to target this core concept of education and changed the dynamics of imparting times savvy, challenges-oriented, skill honing and developing, keeping the future mechanism in mind, and preparing the tomorrow leaders through our visionary, platinum edged multifarious approach.
                </p>
                <p>
                  The school is located in lush green, serene lap of Mother Nature and this gives a calm and meditated feel of our saintly 'Gurukul' of ancient/Vedic India. Krishna being the pioneer in state of the art infrastructure believes a stress-free environment can do wonders in a kid's personality. So the school takes it as a responsibility to provide a cool,
                </p>
                <p>
                  clean and composed atmosphere that includes all five elements of stature including air and water.
                </p>
                <p>
                  Our school does believe in the fact that versatility of a pupil must be aroused.
                </p>
              </div>
            </>
          )}

          {activeTab === "RECOGNITION AND AWARDS" && (
            <>
              <h2 className="mb-2 font-kis-headings text-3xl font-bold text-kis-navy uppercase">
                RECOGNITION AND AWARDS
              </h2>
              <div className="mb-8 h-1 w-16 bg-kis-primary" />
              
              <div className="flex flex-col gap-6 text-sm leading-relaxed text-kis-muted-foreground">
                <p>
                  Content coming soon...
                </p>
              </div>
            </>
          )}

          {activeTab !== "OVERVIEW" && activeTab !== "CHAIRMAN'S MESSAGE" && activeTab !== "PRINCIPAL'S MESSAGE" && activeTab !== "QUINTESSENTIAL CAMPUS" && activeTab !== "WHY KIS?" && activeTab !== "RECOGNITION AND AWARDS" && (
            <div className="py-20 text-center text-kis-muted-foreground">
              Content for {activeTab} coming soon...
            </div>
          )}
        </motion.div>

        {/* Action Cards */}
        <div className="mx-auto mt-24 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.title} className="group relative overflow-hidden rounded-xl border border-kis-border bg-kis-muted transition-all hover:scale-105 hover:shadow-xl">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={card.image} alt={card.title} className="h-full w-full object-cover opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-kis-navy/90 via-kis-navy/60 to-transparent p-6 text-center">
                <span className="font-kis-headings text-lg font-bold text-kis-cream transition-colors group-hover:text-kis-primary">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <KisFooter />
      <KisRegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
