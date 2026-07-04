import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors,
  Brush,
  Palette,
  Sparkles,
  Crown,
  Gem,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Calendar,
  Droplets,
} from "lucide-react";

import koreanSpa1 from "@/assets/korean-spa-1.jpg.asset.json";
import koreanSpa2 from "@/assets/korean-spa-2.jpg.asset.json";
import koreanSpa3 from "@/assets/korean-spa-3.jpg.asset.json";
import koreanSpa4 from "@/assets/korean-spa-4.jpg.asset.json";

import heroImg from "@/assets/hero-hair.jpg";
import coloringImg from "@/assets/service-coloring.jpg";
import makeupImg from "@/assets/service-makeup.jpg";
import femaleCutImg from "@/assets/service-female-cut.jpg";
import maleCutImg from "@/assets/service-male-cut.jpg";
import extensionsImg from "@/assets/service-extensions.jpg";
import microringsImg from "@/assets/service-microrings.jpg";
import gallery1 from "@/assets/hair-gallery-1.jpg";
import gallery2 from "@/assets/hair-gallery-2.jpg";
import gallery3 from "@/assets/hair-gallery-3.jpg";
import gallery4 from "@/assets/hair-gallery-4.jpg";
import salonInterior from "@/assets/salon-interior-hair.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    title: "Βαφές & Ανταύγειες",
    desc: "Balayage, ombré, ολική βαφή και πολύχρωμες ανταύγειες με premium χρώματα χωρίς αμμωνία.",
    img: coloringImg,
    icon: Palette,
    price: "€45 – €120",
  },
  {
    title: "Makeup",
    desc: "Day, evening, bridal makeup από επαγγελματίες με υψηλής ποιότητας προϊόντα μακράς διάρκειας.",
    img: makeupImg,
    icon: Brush,
    price: "€40 – €90",
  },
  {
    title: "Γυναικείο Κούρεμα",
    desc: "Κούρεμα σχεδιασμένο γύρω από το πρόσωπο και τον τρόπο ζωής σου, με λούσιμο και styling.",
    img: femaleCutImg,
    icon: Scissors,
    price: "€25 – €45",
  },
  {
    title: "Ανδρικό Κούρεμα",
    desc: "Classic, modern ή fade κουρέματα με ξύρισμα κλασικού στυλ και περιποίηση γενιού.",
    img: maleCutImg,
    icon: Crown,
    price: "€18 – €28",
  },
  {
    title: "Hair Extensions",
    desc: "Φυσικά Remy extensions σε όλα τα μήκη και χρώματα. Συμβουλευτική και τοποθέτηση από ειδικούς.",
    img: extensionsImg,
    icon: Sparkles,
    price: "€180 – €650",
  },
  {
    title: "Micro Rings",
    desc: "Διακριτική, μη-κολλητική τεχνική για όγκο και μήκος που διαρκεί έως 6 μήνες χωρίς ζημιά.",
    img: microringsImg,
    icon: Gem,
    price: "€220 – €550",
  },
];

const testimonials = [
  {
    name: "Μαρία Παπαδοπούλου",
    text: "Η Άσπα είναι μάστερ στο balayage. Το χρώμα κράτησε μήνες, τα μαλλιά μου ποτέ δεν ήταν τόσο υγιή και λαμπερά.",
    role: "Πελάτισσα από το 2019",
  },
  {
    name: "Κατερίνα Νικολάου",
    text: "Έβαλα extensions και κανείς δεν καταλαβαίνει ότι δεν είναι δικά μου. Επαγγελματισμός σε άλλο επίπεδο.",
    role: "Πελάτισσα από το 2021",
  },
  {
    name: "Γιώργος Αντωνίου",
    text: "Ο Βαγγέλης είναι ο μόνος που έχω εμπιστευτεί τα μαλλιά μου τα τελευταία 5 χρόνια. Πάντα τέλειο αποτέλεσμα.",
    role: "Πελάτης από το 2020",
  },
];

const gallery = [
  { src: gallery1, label: "Color Swatches" },
  { src: gallery2, label: "Copper Glow" },
  { src: gallery3, label: "The Salon" },
  { src: gallery4, label: "Styling Tools" },
  { src: extensionsImg, label: "Extensions" },
  { src: microringsImg, label: "Micro Rings" },
];

const hours = [
  ["Δευτέρα", "Κλειστά"],
  ["Τρίτη", "08:30 – 13:30, 17:00 – 20:30"],
  ["Τετάρτη", "09:00 – 15:00"],
  ["Πέμπτη", "08:30 – 13:30, 17:00 – 20:30"],
  ["Παρασκευή", "09:00 – 20:00"],
  ["Σάββατο", "08:30 – 17:00"],
  ["Κυριακή", "Κλειστά"],
];

const koreanSpaImages = [koreanSpa1, koreanSpa2, koreanSpa3, koreanSpa4];

function Home() {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactSent, setContactSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-onyx/85 border-b border-gold/15">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex flex-col leading-none text-ivory">
            <span className="font-script text-2xl text-gold">Coiffure</span>
            <span className="font-display text-base tracking-luxury -mt-1">ASPA & VANGEL</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-luxury uppercase text-ivory/85">
            <a href="#services" className="hover:text-gold transition">Υπηρεσίες</a>
            <a href="#korean-spa" className="hover:text-gold transition">Korean Spa</a>
            <a href="#gallery" className="hover:text-gold transition">Gallery</a>
            <a href="#testimonials" className="hover:text-gold transition">Κριτικές</a>
            <a href="#contact" className="hover:text-gold transition">Επικοινωνία</a>
          </nav>
          <a
            href="#booking"
            className="hidden sm:inline-flex items-center gap-2 rounded-none border border-gold/60 bg-gold/10 px-5 py-2.5 text-xs tracking-luxury text-gold hover:bg-gold hover:text-onyx transition"
          >
            <Calendar className="h-3.5 w-3.5" />
            Ραντεβού
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-onyx text-ivory">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold-deep blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold blur-[120px] opacity-50" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="font-script text-2xl text-gold">Coiffure since 2003</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-ivory">
              Η Ομορφιά σου<br />
              στα <em className="italic text-gradient-gold">Καλύτερά</em> της
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ivory/70 leading-relaxed font-light">
              Στο Coiffure Aspa & Vangel συνδυάζουμε 20+ χρόνια εμπειρίας, διεθνείς τεχνικές και
              premium προϊόντα για να αποκαλύψουμε την πιο εκλεπτυσμένη εκδοχή σου — στην καρδιά της Αθήνας.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-3 bg-gold px-9 py-4 text-sm tracking-luxury text-onyx shadow-gold hover:bg-gold-light transition"
              >
                Online Booking
                <Calendar className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-gold/40 px-9 py-4 text-sm tracking-luxury text-gold hover:bg-gold/10 transition"
              >
                Οι Υπηρεσίες μας
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-md border-t border-gold/20 pt-8">
              {[
                ["20+", "Χρόνια εμπειρίας"],
                ["4.9★", "Google Reviews"],
                ["8K+", "Happy Clients"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-display text-4xl text-gold">{k}</div>
                  <div className="text-[10px] uppercase tracking-luxury text-ivory/60 mt-2">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-gold opacity-40 blur-2xl" />
            <div className="relative overflow-hidden border border-gold/30">
              <img
                src={heroImg}
                alt="Coiffure Aspa & Vangel — luxury hair editorial"
                className="h-[640px] w-full object-cover"
                width={1088}
                height={1440}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-onyx border border-gold/30 p-5 max-w-[240px]">
              <div className="flex items-center gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-ivory italic font-display">
                "Master craftsmanship & ατέλειωτη προσοχή στη λεπτομέρεια."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-script text-2xl text-gold-deep">Οι Υπηρεσίες μας</span>
            <h2 className="font-display text-5xl md:text-6xl mt-2">Τέχνη & Τεχνική</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold" />
            <p className="mt-6 text-muted-foreground font-light">
              Από το πιο διακριτικό κούρεμα μέχρι την πιο τολμηρή βαφή — κάθε υπηρεσία προσαρμοσμένη
              στο πρόσωπο, το στυλ και τη ρουτίνα σου.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="group bg-card border border-border overflow-hidden hover:border-gold/60 transition-all duration-500"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 h-11 w-11 bg-onyx/85 border border-gold/40 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-gold" />
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-baseline justify-between gap-3 border-b border-border pb-4">
                      <h3 className="font-display text-2xl">{s.title}</h3>
                      <span className="text-sm text-gold-deep font-medium whitespace-nowrap tracking-wider">{s.price}</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* KOREAN SPA */}
      <section id="korean-spa" className="py-32 bg-gradient-onyx text-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="h-5 w-5 text-gold" />
                <span className="font-script text-2xl text-gold">Signature Ritual</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl text-ivory leading-[1.05]">
                Korean <em className="italic text-gradient-gold">Spa</em>
              </h2>
              <div className="mt-6 h-px w-16 bg-gold" />
              <p className="mt-6 text-ivory/75 font-light leading-relaxed">
                Μια πολυαισθητηριακή εμπειρία εμπνευσμένη από τη Νότια Κορέα: θεραπεία τριχωτής κεφαλής
                με ζεστό νερό, χρωματοθεραπεία, βότανα και μασάζ που χαλαρώνει βαθιά και αναζωογονεί
                τα μαλλιά από τη ρίζα.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-ivory/80">
                {[
                  "Βαθύς καθαρισμός & απολέπιση τριχωτού",
                  "Θεραπεία με βότανα και αιθέρια έλαια",
                  "Χρωματοθεραπεία & μασάζ κεφαλής",
                  "Ενυδάτωση και λάμψη μαλλιών",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-gold/15 pb-2">
                    <span className="text-gold mt-1">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className="mt-10 inline-flex items-center gap-3 bg-gold px-9 py-4 text-sm tracking-luxury text-onyx shadow-gold hover:bg-gold-light transition"
              >
                Κλείσε το Korean Spa
                <Calendar className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {koreanSpaImages.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden border border-gold/20 ${
                    i === 0 ? "row-span-2 h-full" : ""
                  }`}
                >
                  <img
                    src={img.url}
                    alt={`Korean Spa θεραπεία ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover hover:scale-105 transition duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-script text-2xl text-gold-deep">Atelier</span>
              <h2 className="font-display text-5xl md:text-6xl mt-2">Στιγμές από το Salon</h2>
            </div>
            <p className="max-w-md text-muted-foreground font-light">
              Χρώματα, υφές, εργαλεία και χώροι — τα στοιχεία που συνθέτουν την εμπειρία Coiffure
              Aspa & Vangel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 auto-rows-[200px]">
            {gallery.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group ${
                  i === 0 ? "col-span-2 row-span-2" : i === 2 ? "lg:col-span-2" : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-onyx/40 opacity-0 group-hover:opacity-100 transition flex items-end p-5">
                  <span className="text-ivory text-xs tracking-luxury uppercase border-b border-gold pb-1">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-32 bg-gradient-onyx text-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-script text-2xl text-gold">Μαρτυρίες</span>
            <h2 className="font-display text-5xl md:text-6xl mt-2 text-ivory">Τι λένε για εμάς</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-onyx/60 border border-gold/20 p-9 flex flex-col backdrop-blur-sm"
              >
                <div className="flex items-center gap-1 text-gold mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="font-display text-xl italic leading-relaxed text-ivory flex-1">
                  "{t.text}"
                </p>
                <div className="mt-7 pt-6 border-t border-gold/20 flex items-center gap-3">
                  <div className="h-10 w-10 border border-gold/60 flex items-center justify-center text-gold font-display text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-ivory text-sm">{t.name}</div>
                    <div className="text-xs text-ivory/55 tracking-wider mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING + LOCATION */}
      <section id="contact" className="py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2">
          <div id="booking">
            <span className="font-script text-2xl text-gold-deep">Online Booking</span>
            <h2 className="font-display text-5xl md:text-6xl mt-2">Κλείσε το ραντεβού σου</h2>
            <div className="mt-6 h-px w-16 bg-gold" />
            <p className="mt-6 text-muted-foreground max-w-md font-light">
              Κλείσε ραντεβού online σε χρόνο μηδέν. Διάλεξε υπηρεσία, ημερομηνία και ώρα
              απευθείας από το ημερολόγιό μας — επιβεβαίωση άμεσα.
            </p>

            <div className="mt-8 border border-gold/30 bg-card overflow-hidden">
              <iframe
                src="https://nexusnkz9.setmore.com"
                title="Online Κράτηση — Coiffure Aspa & Vangel"
                className="w-full"
                style={{ border: 0, height: 720 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://nexusnkz9.setmore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm tracking-luxury text-gold-deep hover:text-gold transition"
            >
              <Calendar className="h-4 w-4" />
              Άνοιγμα κράτησης σε νέο παράθυρο
            </a>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden border border-border">
              <img
                src={salonInterior}
                alt="Εσωτερικό του Coiffure Aspa & Vangel"
                loading="lazy"
                width={1536}
                height={864}
                className="w-full h-72 object-cover"
              />
            </div>

            <div className="bg-onyx text-ivory p-8 space-y-5">
              <h3 className="font-display text-3xl text-ivory">Επισκέψου μας</h3>
              <div className="h-px w-12 bg-gold" />

              <div className="flex items-start gap-4">
                <MapPin className="h-4 w-4 text-gold mt-1 shrink-0" />
                <div>
                  <div className="text-[10px] tracking-luxury uppercase text-ivory/60">Διεύθυνση</div>
                  <div className="text-sm mt-1">Λεωφ. Πόρτο Ράφτη 17, Μαρκόπουλο Μεσογαίας 190 03</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-4 w-4 text-gold mt-1 shrink-0" />
                <div>
                  <div className="text-[10px] tracking-luxury uppercase text-ivory/60">Τηλέφωνο</div>
                  <a href="tel:+302103612345" className="text-sm hover:text-gold transition">+30 210 361 2345</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-4 w-4 text-gold mt-1 shrink-0" />
                <div>
                  <div className="text-[10px] tracking-luxury uppercase text-ivory/60">Email</div>
                  <a href="mailto:info@aspavangel.gr" className="text-sm hover:text-gold transition">info@aspavangel.gr</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-4 w-4 text-gold mt-1 shrink-0" />
                <div className="w-full">
                  <div className="text-[10px] tracking-luxury uppercase text-ivory/60 mb-2">Ωράριο Λειτουργίας</div>
                  <ul className="text-sm space-y-1">
                    {hours.map(([day, time]) => (
                      <li key={day} className="flex justify-between gap-6 border-b border-ivory/10 pb-1">
                        <span className="text-ivory/80">{day}</span>
                        <span className={time === "Κλειστά" ? "text-ivory/50" : "text-gold"}>{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-border">
              <iframe
                title="Χάρτης — Coiffure Aspa & Vangel"
                src="https://www.google.com/maps?q=Skoufa+38+Kolonaki+Athens&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="mx-auto max-w-3xl px-6 mt-24 pt-20 border-t border-border">
          <div className="text-center mb-10">
            <span className="font-script text-2xl text-gold-deep">Επικοινωνία</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">Στείλε μας μήνυμα</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          </div>

          {contactSent ? (
            <div className="border border-gold/40 bg-gold/5 p-8 text-center">
              <p className="font-display text-2xl">Το μήνυμά σου παραλήφθηκε</p>
              <p className="text-muted-foreground mt-2 text-sm">Θα σου απαντήσουμε το συντομότερο.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setContactSent(true);
              }}
              className="grid gap-5 md:grid-cols-2"
            >
              <input
                required
                value={contact.name}
                onChange={(e) => setContact({ ...contact, name: e.target.value })}
                placeholder="Όνομα"
                className="border border-input bg-card px-4 py-3 focus:outline-none focus:border-gold transition"
              />
              <input
                required
                type="email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                placeholder="Email"
                className="border border-input bg-card px-4 py-3 focus:outline-none focus:border-gold transition"
              />
              <textarea
                required
                rows={5}
                value={contact.message}
                onChange={(e) => setContact({ ...contact, message: e.target.value })}
                placeholder="Το μήνυμά σου"
                className="md:col-span-2 border border-input bg-card px-4 py-3 focus:outline-none focus:border-gold transition resize-none"
              />
              <button
                type="submit"
                className="md:col-span-2 bg-onyx px-8 py-4 text-ivory text-sm tracking-luxury hover:bg-gold hover:text-onyx transition"
              >
                ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-onyx text-ivory pt-16 pb-8 border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-3 items-start">
          <div>
            <div className="font-script text-3xl text-gold">Coiffure</div>
            <div className="font-display text-lg tracking-luxury">ASPA & VANGEL</div>
            <p className="mt-5 text-sm text-ivory/60 max-w-xs font-light leading-relaxed">
              Κομμωτήριο πολυτελείας στο Κολωνάκι. Από το 2003 δίπλα σου, για την ομορφιά που σου αξίζει.
            </p>
          </div>
          <div className="text-sm space-y-2 text-ivory/75">
            <div className="text-[10px] tracking-luxury uppercase text-gold mb-3">Επικοινωνία</div>
            <div>Σκουφά 38, Κολωνάκι 10673</div>
            <a href="tel:+302103612345" className="block hover:text-gold transition">+30 210 361 2345</a>
            <a href="mailto:info@aspavangel.gr" className="block hover:text-gold transition">info@aspavangel.gr</a>
          </div>
          <div className="md:text-right">
            <div className="text-[10px] tracking-luxury uppercase text-gold mb-3">Ακολούθησέ μας</div>
            <div className="flex md:justify-end gap-3">
              <a href="#" aria-label="Instagram" className="h-11 w-11 border border-gold/40 flex items-center justify-center hover:bg-gold hover:text-onyx transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="h-11 w-11 border border-gold/40 flex items-center justify-center hover:bg-gold hover:text-onyx transition">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-ivory/10 text-[10px] text-ivory/40 text-center tracking-luxury uppercase">
          © {new Date().getFullYear()} Coiffure Aspa & Vangel · Crafted with Devotion
        </div>
      </footer>
    </div>
  );
}
