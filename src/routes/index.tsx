import { createFileRoute } from "@tanstack/react-router";

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

import heroImg from "@/assets/hero-korean-spa.jpg.asset.json";
import coloringImg from "@/assets/service-coloring.jpg";
import makeupImg from "@/assets/service-makeup.jpg";
import femaleCutImg from "@/assets/service-female-cut.jpg";
import maleCutImg from "@/assets/service-male-cut.jpg";
import extensionsImg from "@/assets/service-extensions.jpg";
import microringsImg from "@/assets/service-microrings.jpg";
import salonPic1 from "@/assets/salon-new-1.jpg.asset.json";
import salonPic2 from "@/assets/salon-new-2.jpg.asset.json";
import salonPic3 from "@/assets/salon-new-3.jpg.asset.json";
import salonPic4 from "@/assets/salon-new-4.jpg.asset.json";
import salonPic5 from "@/assets/salon-new-5.jpg.asset.json";
import salonPic6 from "@/assets/salon-new-6.jpg.asset.json";
import salonPic7 from "@/assets/salon-new-7.jpg.asset.json";
import salonPic8 from "@/assets/salon-new-8.jpg.asset.json";
import salonPic9 from "@/assets/salon-new-9.jpg.asset.json";
import salonPic10 from "@/assets/salon-new-10.jpg.asset.json";
import salonPic11 from "@/assets/salon-new-11.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    title: "Γυναικείο Κούρεμα",
    desc: "Κούρεμα σχεδιασμένο γύρω από το πρόσωπο και τον τρόπο ζωής σου, με λούσιμο και styling.",
    img: femaleCutImg,
    icon: Scissors,
    price: "13€",
  },
  {
    title: "Ανδρικό Κούρεμα",
    desc: "Classic, modern ή fade κουρέματα με προσοχή στη λεπτομέρεια.",
    img: maleCutImg,
    icon: Crown,
    price: "11€",
  },
  {
    title: "Βαφή",
    desc: "Ολική βαφή με premium χρώματα για λαμπερό και ανθεκτικό αποτέλεσμα.",
    img: coloringImg,
    icon: Palette,
    price: "27€",
  },
  {
    title: "Ρίζες & Άκρες",
    desc: "Ανανέωση χρώματος από ρίζα έως άκρη για ομοιόμορφο, φρέσκο αποτέλεσμα.",
    img: coloringImg,
    icon: Palette,
    price: "40€",
  },
  {
    title: "Ανταύγειες",
    desc: "Πολυδιάστατες ανταύγειες σε όλη την κεφαλή για φυσικό, φωτεινό αποτέλεσμα.",
    img: coloringImg,
    icon: Sparkles,
    price: "60€",
  },
  {
    title: "Ανταύγειες Μισή Κεφαλή",
    desc: "Ανταύγειες στο επάνω μέρος για διακριτική ανανέωση και φως στο πρόσωπο.",
    img: coloringImg,
    icon: Sparkles,
    price: "40€",
  },
  {
    title: "Makeup",
    desc: "Day, evening & bridal makeup από επαγγελματίες με υψηλής ποιότητας προϊόντα μακράς διάρκειας.",
    img: makeupImg,
    icon: Brush,
    price: "40€",
  },
  {
    title: "Hair Extensions",
    desc: "Φυσικά Remy extensions σε όλα τα μήκη και χρώματα, με τοποθέτηση από ειδικούς.",
    img: extensionsImg,
    icon: Sparkles,
    price: "3€ / τούφα",
  },
  {
    title: "Micro Ring",
    desc: "Διακριτική, μη-κολλητική τεχνική για όγκο και μήκος που διαρκεί χωρίς ζημιά.",
    img: microringsImg,
    icon: Gem,
    price: "4€ / τούφα",
  },
];

const testimonials = [
  {
    name: "Daniela Piuca",
    text: "Best service by far in the area, experts in all hair styles and makeup. I definitely recommend it.",
  },
  {
    name: "D. Tsiou",
    text: "Great haircut, nice experience, always happy to go back.",
  },
  {
    name: "Aranya Vijayan",
    text: "Aspa & Vangel is the best hair salon in Athens. I read a lot of positive reviews on Google before booking an appointment, and I realized why they receive only positive reviews and 5 star ratings. Their service is excellent, experienced staff, very polite, friendly and approachable to customers at the same time maintained professionalism.",
  },
];

const gallery = [
  { src: salonPic1.url, label: "Salon" },
  { src: salonPic2.url, label: "Salon" },
  { src: salonPic3.url, label: "Salon" },
  { src: salonPic4.url, label: "Salon" },
  { src: salonPic5.url, label: "Salon" },
  { src: salonPic6.url, label: "Salon" },
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
              premium προϊόντα για να αποκαλύψουμε την πιο εκλεπτυσμένη εκδοχή σου.
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

            <div className="mt-16 grid grid-cols-2 gap-6 max-w-md border-t border-gold/20 pt-8">
              {[
                ["20+", "Χρόνια εμπειρίας"],
                ["4.9★", "Google Reviews"],
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
                src={heroImg.url}
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

      {/* MASSAGE & SPA PRICING */}
      <section className="py-24 bg-onyx text-ivory border-y border-gold/20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <span className="font-script text-2xl text-gold">Massage & Spa</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">Τιμοκατάλογος</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                price: "35€",
                duration: "30′ λεπτά",
                items: ["Massage αυχένα", "κεφάλι", "θεραπεία μαλλιών"],
              },
              {
                price: "50€",
                duration: "45′ λεπτά",
                items: ["Massage πλάτη", "κεφάλι", "θεραπεία μαλλιών"],
              },
              {
                price: "70€",
                duration: "90′ λεπτά",
                items: ["Massage full body", "θεραπεία μαλλιών"],
              },
              {
                price: "90€",
                duration: "90′ λεπτά",
                items: ["Massage full body", "θεραπεία μαλλιών", "θεραπεία προσώπου"],
              },
            ].map((p) => (
              <article
                key={p.price + p.duration}
                className="border border-gold/30 bg-gradient-to-b from-onyx to-onyx/60 p-8 hover:border-gold transition-colors"
              >
                <div className="font-display text-4xl text-gold">{p.price}</div>
                <div className="mt-1 text-sm uppercase tracking-luxury text-ivory/70">
                  {p.duration}
                </div>
                <div className="mt-5 h-px w-10 bg-gold/50" />
                <ul className="mt-5 space-y-1.5 text-sm text-ivory/85 font-light">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}

            {/* Wednesday offer */}
            <article className="lg:col-span-2 border border-gold bg-gradient-gold/10 p-8 flex flex-col justify-center items-center text-center">
              <div className="font-script text-xl text-gold">Προσφορά Τετάρτης</div>
              <div className="font-display text-6xl text-gold my-3">-30%</div>
              <div className="mt-2 text-lg font-display">massage 2+1</div>
              <p className="mt-4 text-sm text-ivory/85 font-light">
                3 υπηρεσίες massage 90′
                <br />
                αξίας <span className="line-through">270€</span> — μόνο{" "}
                <span className="text-gold font-medium">180€</span>
              </p>
            </article>
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
            
            <h2 className="font-display text-5xl md:text-6xl mt-2 text-ivory">Τι λένε για εμάς</h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold" />
            <div className="mt-6 flex items-center justify-center gap-2 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm text-ivory/80 tracking-wider">4.9 / 5 από 401 κριτικές Google</span>
            </div>
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
            <h2 className="font-display text-5xl md:text-6xl mt-2">Κλείσε το ραντεβού σου</h2>
            <div className="mt-6 h-px w-16 bg-gold" />
            <p className="mt-6 text-muted-foreground max-w-md font-light">
              Κλείσε ραντεβού τηλεφωνικά ή περνώντας από το κατάστημα — θα χαρούμε να σε εξυπηρετήσουμε.
            </p>
            <div className="mt-8 space-y-4">
              <iframe
                title="Setmore Booking"
                src="https://aspavangelsspy.setmore.com/"
                width="100%"
                height="600"
                style={{ border: 0, maxWidth: "100%" }}
                loading="lazy"
              />
              <a
                href="tel:+302299024337"
                className="inline-flex items-center gap-3 bg-gold px-9 py-4 text-sm tracking-luxury text-onyx shadow-gold hover:bg-gold-light transition"
              >
                <Phone className="h-4 w-4" />
                +30 22990 24337
              </a>
            </div>
          </div>

          <div className="space-y-6">


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
                  <a href="tel:+302299024337" className="block text-sm hover:text-gold transition">+30 22990 24337</a>
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
                src="https://www.google.com/maps?q=Leof.+Porto+Rafti+17,+Markopoulo+Mesogeas+19003&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>


      </section>

      {/* FOOTER */}
      <footer className="bg-onyx text-ivory pt-16 pb-8 border-t border-gold/20">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-3 items-start">
          <div>
            <div className="font-script text-3xl text-gold">Coiffure</div>
            <div className="font-display text-lg tracking-luxury">ASPA & VANGEL</div>
            <p className="mt-5 text-sm text-ivory/60 max-w-xs font-light leading-relaxed">
              Κομμωτήριο στο Μαρκόπουλο Μεσογαίας.
            </p>
          </div>
          <div className="text-sm space-y-2 text-ivory/75">
            <div className="text-[10px] tracking-luxury uppercase text-gold mb-3">Επικοινωνία</div>
            <div>Λεωφ. Πόρτο Ράφτη 17, Μαρκόπουλο 190 03</div>
            <a href="tel:+302299024337" className="block hover:text-gold transition">+30 22990 24337</a>
          </div>
          <div className="md:text-right">
            <div className="text-[10px] tracking-luxury uppercase text-gold mb-3">Ακολούθησέ μας</div>
            <div className="flex md:justify-end gap-3">
              <a href="https://www.instagram.com/coiffure_aspa_vangel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-11 w-11 border border-gold/40 flex items-center justify-center hover:bg-gold hover:text-onyx transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/AspaVangel/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-11 w-11 border border-gold/40 flex items-center justify-center hover:bg-gold hover:text-onyx transition">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-ivory/10 text-[10px] text-ivory/40 text-center tracking-luxury uppercase">
          © {new Date().getFullYear()} Coiffure Aspa & Vangel · Designed By Nexus Media
        </div>
      </footer>
    </div>
  );
}
