export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918529339349"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition z-50 font-semibold"
      >
        Chat on WhatsApp
      </a>

      {/* Header */}
      <header className="bg-blue-950 text-white p-6 shadow-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center shadow-lg">
              <span className="text-white font-extrabold text-lg tracking-wider">TS</span>
            </div>
            <div className="leading-tight">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">Tech Supports</h1>
              <p className="text-xs text-gray-400 tracking-[0.3em] uppercase">Industrial Solutions</p>
            </div>
          </div>
          <div className="space-x-6 hidden md:block text-sm font-medium">
            <a href="#services" className="hover:text-gray-300">Products</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
            <a href="#indiamart" className="hover:text-gray-300">IndiaMART</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-white py-24">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            <span className="block uppercase tracking-[0.18em] bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400 drop-shadow-2xl animate-pulse">
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

      {/* Product Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">Our Product Gallery</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Buffing Wheel", img: "/images/buffing-wheel.jpg", link: "https://www.indiamart.com/tech-supports-jaipur/" },
              { name: "Glue Applicator With Foam Roller", img: "/images/glue-applicator.jpg", link: "https://www.indiamart.com/tech-supports-jaipur/" },
              { name: "CNC Machine Rollers", img: "/images/cnc-rollers.jpg", link: "https://www.indiamart.com/tech-supports-jaipur/" },
              { name: "Silicon Vacuum Suction Cups", img: "/images/suction-cups.jpg", link: "https://www.indiamart.com/tech-supports-jaipur/" },
              { name: "Graphite Sheet & Cloth", img: "/images/graphite-sheet.jpg", link: "https://www.indiamart.com/tech-supports-jaipur/" },
              { name: "Wood Cutting Tools", img: "/images/wood-cutting-tools.jpg", link: "https://www.indiamart.com/tech-supports-jaipur/" }
            ].map((product, index) => (
              <a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition block"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold">{product.name}</h4>
                  <p className="text-sm text-blue-600 mt-2">View on IndiaMART →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Services Section */}
      <section id="consultancy" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">Consultancy Services</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Wood Working Plant Layout Planning",
              "Wood Furniture Process & Machine Selection",
              "Complete Plant Layout Design",
              "Electrical Layout Planning & Implementation",
              "Pneumatic System Layout Design",
              "Industrial Ducting Layout & Consultancy Support"
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
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

      {/* Consultancy Services Section */}
      <section id="consultancy" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">Consultancy Services</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              "Wood Working Plant Layout Planning",
              "Wood Furniture Process & Machine Selection",
              "Complete Plant Layout Design",
              "Electrical Layout Planning & Implementation",
              "Pneumatic System Layout Design",
              "Industrial Ducting Layout & Consultancy Support"
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-14">Our Products</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              "CNC Machine Rollers & Guide Bearings",
              "PTFE Tip Washer & Spray Gun Parts",
              "Vacuum Suction Plates & Silicon Products",
              "Glue Applicators & Foam Rollers",
              "Electrical Spares & Energy Meters",
              "Heaters, Thermocouples & Lubrication Pumps",
              "Wood Treatment Chamber & Door Seals",
              "Buffing Wheels & Polishing Materials",
              "Graphite Sheets & Felt Buffing Materials"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition"
              >
                <h4 className="text-xl font-bold mb-3">{item}</h4>
                <p className="text-gray-600">
                  Premium quality materials designed for durability, precision and long-lasting industrial performance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IndiaMART Section */}
      <section id="indiamart" className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">We Are Also Available on IndiaMART</h3>
          <p className="text-xl mb-8">
            You can explore our products and send direct enquiries through our official IndiaMART profile.
          </p>
          <a
            href="https://www.indiamart.com/tech-supports-jaipur/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 px-8 py-3 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
          >
            Visit Our IndiaMART Profile
          </a>
        </div>
      </section>

      {/* Download Section */}
      <section id="downloads" className="py-20 px-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-10">Download Our Catalogues</h3>
          <p className="text-lg mb-12">Access our complete spare parts and buffing materials catalogues in PDF format.</p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a
              href="/catalogues/Spare-Parts-Catalogue-Tech-Supports.pdf"
              target="_blank"
              className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
            >
              Download Spare Parts Catalogue
            </a>
            <a
              href="/catalogues/Buffing-and-Sanding-Catalogue-Tech-Supports.pdf"
              target="_blank"
              className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
            >
              Download Buffing & Sanding Catalogue
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Contact & Enquiry</h3>

          <div className="bg-gray-50 p-10 rounded-3xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-lg mb-3"><strong>Phone:</strong> 8529339349</p>
                <p className="text-lg mb-3"><strong>Email:</strong> tsindustrial919@gmail.com</p>
                <p className="text-lg mb-3"><strong>GST No:</strong> 08ABTPY8536F1ZR</p>
                <p className="text-lg">
                  <strong>Address:</strong><br />
                  E65-72, Ved Heights 19,<br />
                  Shree Dadudayal Nagar, Kalyanpura,<br />
                  Mansarovar, Jaipur - 302020,<br />
                  Rajasthan, India
                </p>
              </div>

              <form className="grid gap-4">
                <input type="text" placeholder="Your Name" className="border p-3 rounded-xl" />
                <input type="email" placeholder="Your Email" className="border p-3 rounded-xl" />
                <input type="tel" placeholder="Your Mobile Number" className="border p-3 rounded-xl" />
                <textarea placeholder="Your Enquiry" rows="4" className="border p-3 rounded-xl"></textarea>
                <button
                  type="submit"
                  className="bg-blue-900 text-white py-3 rounded-2xl font-bold hover:scale-105 transition"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-10">Our Location</h3>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=E65-72+Ved+Heights+19+Shree+Dadudayal+Nagar+Kalyanpura+Mansarovar+Jaipur+302020&output=embed"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center p-6">
        <p className="text-lg font-semibold">Tech Supports</p>
        <p className="text-sm mt-2">Industrial Tools & Machinery Solutions</p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} Tech Supports. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
