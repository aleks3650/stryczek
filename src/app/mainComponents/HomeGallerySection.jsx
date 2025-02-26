"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeGallerySection = () => {
  const categories = [
    {
      icon: "🎂",
      title: "Torty Artystyczne",
      desc: "Unikalne kompozycje na specjalne okazje",
    },
    {
      icon: "🍰",
      title: "Desery Sezonowe",
      desc: "Słodkości inspirowane porami roku",
    },
    {
      icon: "🥐",
      title: "Wypieki Domowe",
      desc: "Elegancja i lekkość w każdym kęsie",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b rounded-lg shadow-md from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-400">
              Słodkości na wyciągnięcie ręki
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pozwól oczom wyobraźni rozsmakować się w naszych kreacjach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative">
              <Link
                href="/galery"
                className="block p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow">
                <motion.div
                  whileHover={{
                    rotate: Math.random() > 0.5 ? 10 : -10,
                    scale: 1.1,
                  }}
                  className="text-6xl mb-6 w-fit mx-auto">
                  {category.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">{category.desc}</p>

                <div className="relative h-1 w-full bg-amber-100 overflow-hidden rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2 }}
                    className="absolute h-full bg-gradient-to-r from-amber-400 to-amber-600"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16">
          <Link
            href="/galery"
            className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 text-white rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors">
            <motion.span
              animate={{ x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 2 }}>
              👁️
            </motion.span>
            Odkryj magiczny świat słodkości
          </Link>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-100 opacity-20 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-200 opacity-15 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
