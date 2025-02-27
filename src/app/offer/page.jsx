import photoData from "./../galery/photoData";
import Image from "next/image";
import Link from "next/link";
import Overlay from "../mainComponents/Overlay";

const Offer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Overlay delay={0.3}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze Wypieki
            </h1>
          </Overlay>
          <Overlay delay={0.5}>
            <p className="text-gray-600 max-w-xl mx-auto">
              Poznaj nasze słodkie specjały - każdy wykonany z pasją i
              najlepszych składników
            </p>
          </Overlay>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoData.map((product, index) => (
            <div
              key={product.alt}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {product.alt}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">
                    od {product.price.base}zł
                  </span>
                  <Link
                    href={`/galery/${encodeURIComponent(product.alt)}`}
                    className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors text-sm">
                    Zobacz więcej
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
