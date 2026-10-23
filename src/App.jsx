import { useEffect, useRef, useState } from "react";

// ---- Edit these in one place ----
const PHONE_DISPLAY = "+91 85293 39349";
const PHONE_TEL = "+918529339349";
const WHATSAPP_NUMBER = "918529339349";
const EMAIL = "tsindustrial919@gmail.com";
const GSTIN = "08ABTPY8536F1ZR";
const INDIAMART = "https://www.indiamart.com/tech-supports-jaipur/";
// TODO: confirm which is correct: "605, Ved Heights 19" or "E65-72, Ved Heights 19"
const ADDRESS_LINES = [
  "E65-72, Ved Heights 19,",
  "Shree Dadudayal Nagar, Kalyanpura,",
  "Mansarovar, Jaipur - 302020,",
  "Rajasthan, India",
];
// Direct Google Maps link (opens the exact business pin)
const MAPS_LINK = "https://maps.app.goo.gl/4CRkxhA5rUfwYbqK9";
// Embedded map pinned to the same spot (short links can't be embedded, so we use its coordinates)
const MAP_EMBED = "https://www.google.com/maps?q=26.825083,75.7624051&z=17&output=embed";

// Menu (3-line button). Each href is a section on the site.
const NAV = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "WhatsApp Enquiry", href: "#contact" },
  { label: "About", href: "#about" },
];

const DEFAULT_DESC =
  "Premium quality materials designed for durability, precision and long-lasting industrial performance.";

// ---- PRODUCTS ----
// To add a product: copy one line, change the values.
//   featured: true  -> also shows in the scrolling gallery on the home page (in this order)
//   img: photo file inside public/images/  (use null if there is no photo yet)
//   link: this product's own IndiaMART page
//   category: optional small line under the name
//   desc: optional custom description (otherwise DEFAULT_DESC is used)
const PRODUCTS = [
  {
    name: "Buffing Wheels & Polishing Materials",
    img: "/images/buffing-wheel.jpg",
    link: INDIAMART,
    featured: true,
  },
  {
    name: "Graphite Sheet/Cloth",
    category: "Graphite Sheets & Felt Buffing Materials",
    img: "/images/graphite-sheet.jpg",
    link: INDIAMART,
    featured: true,
  },
  {
    name: "Glue Applicator with Foam Roller",
    category: "Glue Applicators & Foam Rollers",
    img: "/images/glue-applicator.jpg",
    link: INDIAMART,
    featured: true,
  },
  {
    name: "Silicone and Rubber Suction Cups",
    category: "Vacuum Suction Plates & Silicon Products",
    img: "/images/suction-cups.jpg",
    link: INDIAMART,
    featured: true,
  },
  {
    name: "Energy Meter",
    category: "Electrical Spares & Energy Meters",
    img: "/images/energy-meter.jpg",
    link: INDIAMART,
    featured: true,
  },
  {
    name: "CNC Machine Rollers",
    category: "CNC Machine Rollers & Guide Bearings",
    img: "/images/cnc-rollers.jpg",
    link: INDIAMART,
    featured: true,
  },
  // More products from the old "Our Products" list (add photos later)
  {
    name: "PTFE Tip Washer & Spray Gun Parts",
    img: null,
    link: INDIAMART,
  },
  {
    name: "Heaters, Thermocouples & Lubrication Pumps",
    img: null,
    link: INDIAMART,
  },
  {
    name: "Wood Treatment Chamber & Door Seals",
    img: null,
    link: INDIAMART,
  },
];

const CONSULTANCY = [
  "Wood Working Plant Layout Planning",
  "Wood Furniture Process & Machine Selection",
  "Complete Plant Layout Design",
  "Electrical Layout Planning & Implementation",
  "Pneumatic System Layout Design",
  "Industrial Ducting Layout & Consultancy Support",
];

const getView = () => (window.location.hash === "#products" ? "products" : "home");

// Image with a grey box if the file is missing (or no photo yet)
function ProductImage({ src, alt, className }) {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center text-gray-500 text-sm overflow-hidden ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.visibility = "hidden";
          }}
        />
      ) : (
        <span>Image coming soon</span>
      )}
    </div>
  );
}

export default function App() {
  const [view, setView] = useState(getView);
  const [menuOpen, setMenuOpen] = useState(false);
  const scroller = useRef(null);

  // "#products" shows the product list; every other link shows the home page
  useEffect(() => {
    const onHash = () => setView(getView());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // After switching view, jump to the right place
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const el = id && view === "home" ? document.getElementById(id) : null;
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [view]);

  const scrollGallery = (dir) =>
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  // Opens WhatsApp with the enquiry pre-filled (no backend needed)
  const handleEnquiry = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text =
      `New enquiry from website\n` +
      `Name: ${data.get("name")}\n` +
      `Email: ${data.get("email")}\n` +
      `Mobile: ${data.get("phone")}\n` +
      `Enquiry: ${data.get("message")}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition z-50 font-semibold"
      >
        Chat on WhatsApp
      </a>

      {/* Header */}
      <header className="bg-blue-950 text-white shadow-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
          <a href="#home" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center shadow-lg">
              <span className="text-white font-extrabold text-lg tracking-wider">TS</span>
            </div>
            <div className="leading-tight">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">Tech Supports</h1>
              <p className="text-xs text-gray-400 tracking-[0.3em] uppercase">Industrial Solutions</p>
            </div>
          </a>

          {/* 3-line menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-blue-900"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block w-6 h-0.5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block w-6 h-0.5 bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {menuOpen && (
          <nav className="absolute right-4 top-full mt-2 w-64 bg-blue-900 rounded-2xl shadow-2xl overflow-hidden border border-blue-700">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-sm font-semibold hover:bg-blue-800 border-b border-blue-800 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {view === "products" ? (
        /* ---------- ALL PRODUCTS (list) ---------- */
        <section id="products" className="py-16 px-4 bg-gray-100 min-h-screen">
          <div className="max-w-5xl mx-auto">
            <a href="#home" className="text-blue-700 font-semibold hover:underline">
              ← Back to Home
            </a>
            <h3 className="text-4xl font-bold text-center my-10">Our Products</h3>
            <div className="grid gap-6">
              {PRODUCTS.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col md:flex-row"
                >
                  <ProductImage
                    src={p.img}
                    alt={p.name}
                    className="h-56 md:h-auto md:w-64 shrink-0"
                  />
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h4 className="text-xl font-bold mb-1">{p.name}</h4>
                    {p.category && p.category !== p.name && (
                      <p className="text-sm font-semibold text-blue-700 mb-3">{p.category}</p>
                    )}
                    <p className="text-gray-600 mb-4">{p.desc || DEFAULT_DESC}</p>
                    <div>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-blue-600 hover:underline"
                      >
                        View on IndiaMART →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* ---------- HOME ---------- */
        <>
          {/* Hero Section */}
          <section
            id="home"
            className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-white py-24 scroll-mt-24"
          >
            <div className="max-w-6xl mx-auto text-center px-4">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                <span className="block uppercase tracking-[0.18em] bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400 drop-shadow-2xl">
                  Industrial Machines, Tools & Spares
                </span>
                <span className="block text-2xl md:text-3xl font-semibold mt-6 tracking-wide text-blue-100">
                  Plant Technical Consultants & Service Providers
                </span>
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                We supply premium industrial machines, tools, spare parts and provide plant technical consultancy and complete industrial service solutions with reliability, efficiency and professional expertise.
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <a
                  href="#contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
                >
                  Get Quote
                </a>
                <a
                  href="#downloads"
                  className="border-2 border-white px-8 py-3 rounded-2xl font-bold hover:bg-white hover:text-blue-900 transition"
                >
                  Download Catalog
                </a>
              </div>
            </div>
          </section>

          {/* Product Gallery (sideways scroll) */}
          <section id="gallery" className="py-20 px-4 bg-white scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-4xl font-bold text-center mb-14">Our Product Gallery</h3>
              <div className="relative">
                {/* Arrow buttons (desktop only; on phones just swipe) */}
                <button
                  type="button"
                  onClick={() => scrollGallery(-1)}
                  aria-label="Scroll left"
                  className="hidden md:flex absolute left-3 top-[36%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-blue-900 border border-gray-200 shadow-lg items-center justify-center hover:bg-blue-900 hover:text-white hover:border-blue-900 active:scale-95 transition"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => scrollGallery(1)}
                  aria-label="Scroll right"
                  className="hidden md:flex absolute right-3 top-[36%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-blue-900 border border-gray-200 shadow-lg items-center justify-center hover:bg-blue-900 hover:text-white hover:border-blue-900 active:scale-95 transition"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>

                <div
                  ref={scroller}
                  className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1"
                >
                  {PRODUCTS.filter((p) => p.featured).map((p) => (
                    <a
                      key={p.name}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="snap-start shrink-0 w-72 md:w-80 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition block"
                    >
                      <ProductImage src={p.img} alt={p.name} className="h-64" />
                      <div className="p-6 text-center">
                        <h4 className="text-xl font-bold">{p.name}</h4>
                        <p className="text-sm text-blue-600 mt-2">View on IndiaMART →</p>
                      </div>
                    </a>
                  ))}

                  {/* Last card */}
                  <a
                    href="#products"
                    className="snap-start shrink-0 w-72 md:w-80 rounded-3xl bg-gradient-to-br from-blue-800 to-blue-600 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition flex flex-col items-center justify-center text-center p-8"
                  >
                    <span className="text-5xl mb-4">→</span>
                    <span className="text-2xl font-bold">Explore More Products</span>
                    <span className="text-sm text-blue-100 mt-2">See our full product list</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Consultancy Services Section */}
          <section id="consultancy" className="py-20 px-4 bg-gray-100 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-4xl font-bold text-center mb-14">Consultancy Services</h3>
              <div className="grid md:grid-cols-2 gap-10">
                {CONSULTANCY.map((service) => (
                  <div
                    key={service}
                    className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
                  >
                    <h4 className="text-xl font-bold mb-3">{service}</h4>
                    <p className="text-gray-600">
                      Professional technical guidance and engineering support to ensure optimized plant performance, efficiency and long-term operational reliability.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IndiaMART Section */}
          <section
            id="indiamart"
            className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white scroll-mt-24"
          >
            <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-4xl font-bold mb-6">We Are Also Available on IndiaMART</h3>
              <p className="text-xl mb-8">
                You can explore our products and send direct enquiries through our official IndiaMART profile.
              </p>
              <a
                href={INDIAMART}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
              >
                Visit Our IndiaMART Profile
              </a>
            </div>
          </section>

          {/* Download Section */}
          <section
            id="downloads"
            className="py-20 px-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white scroll-mt-24"
          >
            <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-4xl font-bold mb-10">Download Our Catalogues</h3>
              <p className="text-lg mb-12">Access our complete spare parts and buffing materials catalogues in PDF format.</p>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <a
                  href="/catalogues/Spare-Parts-Catalogue-Tech-Supports.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
                >
                  Download Spare Parts Catalogue
                </a>
                <a
                  href="/catalogues/Buffing-and-Sanding-Catalogue-Tech-Supports.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
                >
                  Download Buffing & Sanding Catalogue
                </a>
              </div>
            </div>
          </section>

          {/* Contact & Enquiry */}
          <section id="contact" className="py-20 px-4 bg-white scroll-mt-24">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-4xl font-bold text-center mb-12">Contact & Enquiry</h3>
              <form
                className="grid gap-4 bg-gray-50 p-6 md:p-10 rounded-3xl shadow-2xl"
                onSubmit={handleEnquiry}
              >
                <input name="name" type="text" required placeholder="Your Name" className="border p-3 rounded-xl" />
                <input name="email" type="email" placeholder="Your Email" className="border p-3 rounded-xl" />
                <input name="phone" type="tel" required placeholder="Your Mobile Number" className="border p-3 rounded-xl" />
                <textarea name="message" required placeholder="Your Enquiry" rows="4" className="border p-3 rounded-xl"></textarea>
                <button
                  type="submit"
                  className="bg-green-600 text-white py-3 rounded-2xl font-bold hover:scale-105 transition"
                >
                  Send Enquiry on WhatsApp
                </button>
              </form>
            </div>
          </section>

          {/* About + Contact Information */}
          <section id="about" className="py-20 px-4 bg-gray-100 scroll-mt-24">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-4xl font-bold text-center mb-6">About Us & Contact Information</h3>
              <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
                Tech Supports is a supplier of premium industrial machines, tools and spares, and a plant technical consultancy and service provider based in Jaipur, Rajasthan.
              </p>
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl grid md:grid-cols-2 gap-6">
                <p className="text-lg">
                  <strong>Phone / WhatsApp:</strong>
                  <br />
                  <a href={`tel:${PHONE_TEL}`} className="text-blue-800 hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p className="text-lg break-words">
                  <strong>Email:</strong>
                  <br />
                  <a href={`mailto:${EMAIL}`} className="text-blue-800 hover:underline">
                    {EMAIL}
                  </a>
                </p>
                <p className="text-lg">
                  <strong>GST No:</strong>
                  <br />
                  {GSTIN}
                </p>
                <p className="text-lg">
                  <strong>Address:</strong>
                  <br />
                  {ADDRESS_LINES.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < ADDRESS_LINES.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center">
              <h3 className="text-4xl font-bold mb-10">Our Location</h3>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  title="Tech Supports location map"
                  src={MAP_EMBED}
                  width="100%"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-blue-900 text-white px-8 py-3 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
              >
                Open in Google Maps
              </a>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center p-6">
        <p className="text-lg font-semibold">Tech Supports</p>
        <p className="text-sm mt-2">Industrial Tools & Machinery Solutions</p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} Tech Supports. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
