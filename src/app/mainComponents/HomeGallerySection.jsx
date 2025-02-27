import Link from "next/link";
import EyeButton from "./EyeButton";
import SweetBox from "./SweetBox";
import Overlay from "./Overlay";
import Title from "./Title";

const HomeGallerySection = () => {
  const categories = [
    {
      icon: "🎂",
      title: "Torty Artystyczne",
      desc: "Unikalne kompozycje na specjalne okazje",
      href: {
        pathname: "/galery",
        query: { category: "Torty" },
      },
    },
    {
      icon: "🍰",
      title: "Desery Sezonowe",
      desc: "Słodkości inspirowane porami roku",
      href: {
        pathname: "/galery",
        query: { category: "Desery" },
      },
    },
    {
      icon: "🥐",
      title: "Wypieki Domowe",
      desc: "Elegancja i lekkość w każdym kęsie",
      href: {
        pathname: "/galery",
        query: { category: "Wypieki" },
      },
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b rounded-lg shadow-md from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <Overlay delay={0.3}>
              <Title />
            </Overlay>
          </h2>
          <Overlay delay={0.5}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pozwól oczom wyobraźni rozsmakować się w naszych kreacjach
            </p>
          </Overlay>
        </div>
        <Overlay delay={0.75}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SweetBox categories={categories} />
          </div>
        </Overlay>

        <Overlay delay={1}>
          <div className="text-center mt-16">
            <Link
              href="/galery"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 text-white rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors">
              <EyeButton />
              Odkryj magiczny świat słodkości
            </Link>
          </div>
        </Overlay>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-56 h-56  bg-amber-200 opacity-50 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-300 opacity-50 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HomeGallerySection;
