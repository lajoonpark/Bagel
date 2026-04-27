import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import MenuList from "@/components/MenuList";
import BagelSVG from "@/components/BagelSVG";

const classicBagels = [
  "Plain",
  "Everything",
  "Sesame",
  "Pumpkin Seed",
  "Sunflower Seed",
];

const uniqueBagels = [
  "Jalapeño & Cheese",
  "Onion",
  "Cranberry",
  "Cinnamon & Raisin",
  "Olive & Italian Herbs",
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-4-7-8-7z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Hand Rolled",
    desc: "Crafted by hand, every single one",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path d="M12 3v1m0 16v1M4.22 4.22l.707.707m13.435 13.435.708.708M3 12H2m20 0h-1M4.22 19.78l.707-.707M18.364 5.636l.708-.707" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Baked Fresh Daily",
    desc: "Out of the oven every morning",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "No Preservatives",
    desc: "Pure ingredients, nothing artificial",
  },
];

export default function Home() {
  return (
    <main>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section
        id="home"
        className="bg-brand-orange min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden"
      >
        {/* Decorative background circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />

        {/* Logo */}
        <h1 className="font-heading text-white leading-none mb-4 drop-shadow-lg">
          <span className="block text-7xl sm:text-8xl md:text-9xl">Bagels</span>
          <span className="block text-7xl sm:text-8xl md:text-9xl">Beyond</span>
        </h1>

        <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-semibold mb-8 max-w-md">
          Fresh Hand-Rolled Bagels,&nbsp;Baked&nbsp;Daily
        </p>

        <Button href="#order" className="text-base px-9 py-4 mb-14">
          Order for Tomorrow
        </Button>

        {/* Bagel image */}
        <div className="drop-shadow-2xl hover:scale-105 transition-transform duration-500">
          <BagelSVG size={280} />
        </div>

        {/* Scroll hint */}
        <a
          href="#features"
          className="absolute bottom-8 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1 text-xs tracking-widest uppercase"
          aria-label="Scroll down"
        >
          <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* ─── FEATURE STRIP ────────────────────────────────────────── */}
      <section
        id="features"
        className="bg-white border-y-4 border-brand-orange py-10 px-4"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {features.map(({ icon, label, desc }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 group"
            >
              <span className="text-brand-orange transition-transform duration-300 group-hover:scale-110">
                {icon}
              </span>
              <h3 className="font-heading text-2xl text-brand-orange">{label}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DEAL SECTION ─────────────────────────────────────────── */}
      <SectionWrapper
        id="deal"
        className="bg-brand-orange text-center"
      >
        <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-1">
          The
        </p>
        <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl text-white leading-tight mb-3 drop-shadow">
          6 Bagel Deal
        </h2>
        <p className="text-white/85 text-lg sm:text-xl mb-8">
          Mix any 6 of your favourites
        </p>
        <Button href="#order" className="text-base px-10 py-4 mb-12">
          Get Your 6-Pack
        </Button>

        <div className="flex justify-center drop-shadow-2xl hover:scale-105 transition-transform duration-500 mt-4">
          <BagelSVG size={300} />
        </div>
      </SectionWrapper>

      {/* ─── MENU SECTION ─────────────────────────────────────────── */}
      <SectionWrapper id="menu" className="bg-brand-orange">
        <h2 className="font-heading text-7xl sm:text-8xl md:text-9xl text-white text-center mb-12 drop-shadow">
          Bagels
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-8">
          <MenuList title="Classic" items={classicBagels} />
          <MenuList title="Unique" items={uniqueBagels} />
        </div>

        <p className="text-white/70 text-sm italic text-center mb-10">
          Mix and match any flavours
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="#menu" variant="primary">
            View Full Menu
          </Button>
          <Button href="#order" variant="secondary">
            Order Now
          </Button>
        </div>
      </SectionWrapper>

      {/* ─── TRUST SECTION ────────────────────────────────────────── */}
      <section id="trust" className="bg-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-7 h-7 text-brand-orange" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <p className="font-heading text-4xl sm:text-5xl text-brand-orange mb-3">
            Loved by locals
          </p>

          <p className="text-gray-600 text-lg sm:text-xl font-semibold">
            Made fresh daily in Addington, Christchurch
          </p>

          <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto">
            We bake every morning so you always get the freshest bagel possible.
            No shortcuts, no preservatives — just real, honest baking.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-brand-orange py-10 px-4 text-center" id="order">
        <p className="font-heading text-white text-4xl mb-1">Bagels Beyond</p>
        <p className="text-white/80 text-sm mb-6">
          Addington, Christchurch
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex justify-center gap-6 text-white/80 text-sm font-semibold flex-wrap">
            {[
              { href: "#home", label: "Home" },
              { href: "#menu", label: "Menu" },
              { href: "#order", label: "Order" },
            ].map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-white/50 text-xs mt-8">
          © {new Date().getFullYear()} Bagels Beyond. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
