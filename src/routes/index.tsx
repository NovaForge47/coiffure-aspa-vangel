import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Hand,
  Footprints,
  Sparkles,
  Palette,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Heart,
} from "lucide-react";

import heroImg from "@/assets/hero-nails.jpg";
import manicureImg from "@/assets/service-manicure.jpg";
import pedicureImg from "@/assets/service-pedicure.jpg";
import gelImg from "@/assets/service-gel.jpg";
import nailartImg from "@/assets/service-nailart.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import salonInterior from "@/assets/salon-interior.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    title: "Manicure",
    desc: "Κλασικό ή spa manicure με βαθιά ενυδάτωση και τέλειο φινίρισμα που διαρκεί.",
    img: manicureImg,
    icon: Hand,
    price: "από €18",
  },
  {
    title: "Pedicure",
    desc: "Spa pedicure με peeling, μάσκα και massage. Νιώσε τα πόδια σου να αναγεννιούνται.",
    img: pedicureImg,
    icon: Footprints,
    price: "από €25",
  },
  {
    title: "Gel Nails",
    desc: "Ημιμόνιμη βαφή ή χτίσιμο με gel premium qualität, διάρκεια έως 4 εβδομάδες.",
    img: gelImg,
    icon: Sparkles,
    price: "από €30",
  },
  {
    title: "Nail Art",
    desc: "Από minimal gold lines μέχρι 3D σχέδια — μοναδικά designs φτιαγμένα για σένα.",
    img: nailartImg,
    icon: Palette,
    price: "από €5/νύχι",
  },
];

const testimonials = [
  {
    name: "Μαρία Παπαδοπούλου",
    text: "Τα πιο όμορφα νύχια που είχα ποτέ. Το gel κρατάει 4 εβδομάδες χωρίς να σπάει και ο χώρος είναι ονειρικός.",
    role: "Πελάτισσα από το 2022",
  },
  {
    name: "Ελένη Κωνσταντίνου",
    text: "Επαγγελματισμός, καθαριότητα και τέλειο αποτέλεσμα κάθε φορά. Η Σοφία είναι μάγισσα με το nail art!",
    role: "Πελάτισσα από το 2021",
  },
  {
    name: "Άννα Δημητρίου",
    text: "Νυφικά νύχια ονειρικά. Όλες οι καλεσμένες ρωτούσαν πού τα έκανα. Συστήνω ανεπιφύλακτα!",
    role: "Πελάτισσα από το 2023",
  },
];

const gallery = [
  { src: gallery1, label: "Before / After" },
  { src: gallery2, label: "Chrome Pink" },
  { src: gallery3, label: "Bridal Lace" },
  { src: gallery4, label: "Minimal Gold" },
  { src: nailartImg, label: "Floral Art" },
  { src: gelImg, label: "Glossy Nude" },
];

function Home() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex flex-col leading-none">
            <span className="font-script text-2xl text-rose-gold-deep">Νύχια</span>
            <span className="font-display text-lg tracking-[0.3em] text-foreground -mt-1">ΑΘΗΝΑ</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
            <a href="#services" className="hover:text-rose-gold-deep transition">Υπηρεσίες</a>
            <a href="#gallery" className="hover:text-rose-gold-deep transition">Gallery</a>
            <a href="#testimonials" className="hover:text-rose-gold-deep transition">Κριτικές</a>
            <a href="#contact" className="hover:text-rose-gold-deep transition">Επικοινωνία</a>
          </nav>
          <a
            href="#booking"
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-rose px-5 py-2.5 text-sm tracking-wider text-primary-foreground shadow-soft hover:opacity-90 transition"
          >
            Κλείσε Ραντεβού
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blush blur-3xl opacity-70" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-rose-gold-light blur-3xl opacity-60" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-rose-gold" />
              <span className="font-script text-2xl text-rose-gold-deep">Premium Nail Salon · Athens</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground">
              Τέλεια Νύχια <em className="italic text-gradient-rose">Κάθε</em> Φορά
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Στο Νύχια Αθήνα, κάθε ραντεβού είναι μια στιγμή φροντίδας μόνο για σένα. Έμπειρες nail
              artists, premium προϊόντα και αυστηρά πρωτόκολλα υγιεινής.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-rose px-8 py-4 text-base tracking-wider text-primary-foreground shadow-elegant hover:scale-[1.02] transition"
              >
                Online Booking
                <Sparkles className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-rose-gold/40 px-8 py-4 text-base tracking-wider text-rose-gold-deep hover:bg-rose-gold-light/30 transition"
              >
                Δες τις Υπηρεσίες
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["10+", "Χρόνια εμπειρίας"],
                ["4.9★", "Google Reviews"],
                ["5K+", "Happy Clients"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-display text-3xl text-rose-gold-deep">{k}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-rose rounded-[2rem] opacity-25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
              <img
                src={heroImg}
                alt="Τέλεια νύχια σε ροζ απόχρωση στο Νύχια Αθήνα"
                className="h-[600px] w-full object-cover"
                width={1080}
                height={1440}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-soft border border-border max-w-[230px]">
              <div className="flex items-center gap-1 text-rose-gold-deep">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm text-foreground italic">"Τα πιο τέλεια νύχια στην Αθήνα."</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-script text-2xl text-rose-gold-deep">Οι Υπηρεσίες μας</span>
            <h2 className="font-display text-5xl md:text-6xl mt-3">Φτιαγμένες για σένα</h2>
            <p className="mt-5 text-muted-foreground">
              Από το πιο διακριτικό nude μέχρι το πιο εντυπωσιακό nail art — η ομάδα μας δημιουργεί
              αποτελέσματα που σε κάνουν να λάμπεις.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 h-12 w-12 rounded-full bg-background/90 backdrop-blur flex items-center justify-center">
                      <Icon className="h-5 w-5 text-rose-gold-deep" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl">{s.title}</h3>
                      <span className="text-sm text-rose-gold-deep font-medium whitespace-nowrap">{s.price}</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-script text-2xl text-rose-gold-deep">Before & After</span>
              <h2 className="font-display text-5xl md:text-6xl mt-3">Δουλειές που Μιλούν</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Κάθε εικόνα είναι μια ιστορία μεταμόρφωσης. Δες λίγες από τις πιο πρόσφατες δημιουργίες μας.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-[200px]">
            {gallery.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl shadow-soft group ${
                  i === 0 ? "col-span-2 row-span-2" : i === 3 ? "lg:col-span-2" : ""
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
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition">
                  <span className="text-background text-sm tracking-wider uppercase">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-28 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-script text-2xl text-rose-gold-deep">Κριτικές</span>
            <h2 className="font-display text-5xl md:text-6xl mt-3">Τι λένε για εμάς</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-3xl p-8 shadow-soft border border-border/60 flex flex-col"
              >
                <div className="flex items-center gap-1 text-rose-gold-deep mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="font-display text-xl italic leading-relaxed text-foreground flex-1">
                  "{t.text}"
                </p>
                <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground font-display text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT + LOCATION */}
      <section id="contact" className="py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2">
          <div id="booking">
            <span className="font-script text-2xl text-rose-gold-deep">Online Booking</span>
            <h2 className="font-display text-5xl md:text-6xl mt-3">Κλείσε το ραντεβού σου</h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              Συμπλήρωσε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σου μέσα σε λίγες ώρες για να
              επιβεβαιώσει ημερομηνία και ώρα.
            </p>

            {sent ? (
              <div className="mt-10 rounded-2xl bg-rose-gold-light/40 border border-rose-gold/30 p-8 text-center">
                <Heart className="mx-auto h-8 w-8 text-rose-gold-deep fill-current" />
                <p className="mt-3 font-display text-2xl">Ευχαριστούμε!</p>
                <p className="text-muted-foreground mt-2">Θα σε καλέσουμε πολύ σύντομα.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-10 space-y-5"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Όνομα</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-full border border-input bg-card px-5 py-3.5 focus:outline-none focus:border-rose-gold transition"
                    placeholder="Το όνομά σου"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Τηλέφωνο</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-full border border-input bg-card px-5 py-3.5 focus:outline-none focus:border-rose-gold transition"
                    placeholder="69XXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Υπηρεσία</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-full border border-input bg-card px-5 py-3.5 focus:outline-none focus:border-rose-gold transition"
                  >
                    <option value="">Διάλεξε υπηρεσία</option>
                    <option>Manicure</option>
                    <option>Pedicure</option>
                    <option>Gel Nails</option>
                    <option>Nail Art</option>
                    <option>Συνδυασμός</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Σημειώσεις</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-3xl border border-input bg-card px-5 py-3.5 focus:outline-none focus:border-rose-gold transition resize-none"
                    placeholder="π.χ. Gel + nail art Σάββατο πρωί"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-rose px-8 py-4 text-primary-foreground tracking-wider shadow-elegant hover:scale-[1.01] transition"
                >
                  Στείλε Αίτημα Ραντεβού
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={salonInterior}
                alt="Εσωτερικό του nail salon Νύχια Αθήνα"
                loading="lazy"
                width={1536}
                height={1024}
                className="w-full h-72 object-cover"
              />
            </div>

            <div className="bg-cream rounded-3xl p-8 space-y-5">
              <h3 className="font-display text-3xl">Επισκέψου μας</h3>

              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-rose-gold-deep mt-1 shrink-0" />
                <div>
                  <div className="font-medium">Διεύθυνση</div>
                  <div className="text-muted-foreground text-sm">Ερμού 42, Σύνταγμα, Αθήνα 10563</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-rose-gold-deep mt-1 shrink-0" />
                <div>
                  <div className="font-medium">Τηλέφωνο</div>
                  <a href="tel:+302103456789" className="text-muted-foreground text-sm hover:text-rose-gold-deep">
                    +30 210 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-rose-gold-deep mt-1 shrink-0" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:hello@nyxia-athina.gr" className="text-muted-foreground text-sm hover:text-rose-gold-deep">
                    hello@nyxia-athina.gr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-rose-gold-deep mt-1 shrink-0" />
                <div>
                  <div className="font-medium">Ωράριο</div>
                  <div className="text-muted-foreground text-sm">
                    Δευτ–Παρ: 09:00 – 21:00<br />
                    Σάββατο: 09:00 – 18:00<br />
                    Κυριακή: Κλειστά
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-soft border border-border">
              <iframe
                title="Χάρτης - Νύχια Αθήνα"
                src="https://www.google.com/maps?q=Ermou+42+Athens&output=embed"
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
      <footer className="bg-foreground text-background py-14">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-3 items-start">
          <div>
            <div className="font-script text-3xl text-rose-gold-light">Νύχια</div>
            <div className="font-display text-xl tracking-[0.3em]">ΑΘΗΝΑ</div>
            <p className="mt-4 text-sm text-background/70 max-w-xs">
              Premium nail salon στην καρδιά της Αθήνας. Από το 2014 δίπλα στην κάθε γυναίκα.
            </p>
          </div>
          <div className="text-sm space-y-2 text-background/80">
            <div>Ερμού 42, Σύνταγμα 10563</div>
            <div>+30 210 345 6789</div>
            <div>hello@nyxia-athina.gr</div>
          </div>
          <div className="flex md:justify-end gap-4">
            <a href="#" aria-label="Instagram" className="h-11 w-11 rounded-full border border-background/30 flex items-center justify-center hover:bg-rose-gold hover:border-rose-gold transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="h-11 w-11 rounded-full border border-background/30 flex items-center justify-center hover:bg-rose-gold hover:border-rose-gold transition">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-background/15 text-xs text-background/50 text-center">
          © {new Date().getFullYear()} Νύχια Αθήνα. Με αγάπη και στυλ.
        </div>
      </footer>
    </div>
  );
}
