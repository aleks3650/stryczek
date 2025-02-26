import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import photoData from "../photoData";
import ImageComponent from "./ImageComponent";

export async function generateMetadata({ params }) {
  const cakeName = decodeURIComponent(params.cake);
  const cake = photoData.find((item) => item.alt === cakeName);

  return {
    title: `${cakeName} - Słodka Pętelka`,
    description: cake?.description || "Wyjątkowy wypiek przygotowany z pasją",
    openGraph: {
      images: cake?.src.src ? [cake.src.src] : [],
    },
  };
}

export default async function CakePage({ params }) {
  const cakeName = decodeURIComponent(params.cake);
  const cake = photoData.find((item) => item.alt === cakeName);

  if (!cake) notFound();

  return (
    <main className="container mx-auto px-4 py-8 mt-32">
      <div className="max-w-6xl mx-auto">
        <nav aria-label="Nawigacja " className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link
                href="/"
                className="hover:text-indigo-600 transition-colors">
                Strona główna
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/galery"
                className="hover:text-indigo-600 transition-colors">
                Galeria
              </Link>
            </li>
            <li>/</li>
            <li className="font-medium text-gray-900">{cakeName}</li>
          </ol>
        </nav>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
            <ImageComponent src={cake.src} alt={cake.alt} />
          </div>

          <article className="space-y-6">
            <header>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {cake.alt}
              </h1>
              <p className="text-lg text-gray-600">{cake.description}</p>
            </header>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {cake.price && (
                  <div className="bg-indigo-50 px-4 py-2 rounded-lg">
                    <span className="text-2xl font-bold text-indigo-700">
                      {typeof cake.price === "object"
                        ? `od ${cake.price.base} zł`
                        : `${cake.price} zł`}
                    </span>
                  </div>
                )}
                {cake.weight && (
                  <div className="text-gray-600">
                    <span className="font-medium">Waga:</span> {cake.weight}
                  </div>
                )}
              </div>

              {cake.allergens?.length > 0 && (
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-medium text-red-700 mb-2">
                    Zawiera alergeny:
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {cake.allergens.map((allergen) => (
                      <li
                        key={allergen}
                        className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                        {allergen}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {cake.ingredients && (
              <div>
                <h2 className="text-xl font-semibold mb-3">Składniki</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {cake.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700">
                      <span className="text-indigo-600">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </section>

        <section className="border-t pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            {cake.category && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Kategoria
                </h3>
                <p className="text-gray-900 font-medium">{cake.category}</p>
              </div>
            )}

            {cake.tags?.length > 0 && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Tagi</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {cake.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {cake.popularity && (
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  Popularność
                </h3>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(cake.popularity / 2)
                          ? "text-amber-400"
                          : "text-gray-300"
                      }`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
