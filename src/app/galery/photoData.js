// photoData.js

import deserPistacjowy from "./photos/deser_pistacjowy.jpg";
import deserkiKolor from "./photos/deserki_kolor.jpg";
import dupaPawiana from "./photos/dupa_pawiana.jpg";
import eklerki from "./photos/eklerki.jpg";
import faworki from "./photos/faworki.jpg";
import kostka from "./photos/kostka.jpg";
import makowiec from "./photos/makowiec.jpg";
import chmurka from "./photos/chmurka.jpg";
import miodownik from "./photos/miodownik.jpg";
import nutella from "./photos/nutella.jpg";
import sernik from "./photos/sernik.jpg";
import sernikPistacjowy from "./photos/sernik_pistacjowy.jpg";
import tort1 from "./photos/tort1.jpg";
import tort2 from "./photos/tort2.jpg";
import tort3 from "./photos/tort3.jpg";
import tort4 from "./photos/tort4.jpg";
import tort30 from "./photos/tort30.jpg";
import wuzetka from "./photos/wuzetka.jpg";

const photoData = [
  {
    src: deserPistacjowy,
    alt: "Deser pistacjowy",
    description:
      "Kremowy deser pistacjowy z warstwą chrupiącego pralinu, ozdobiony złotą folią i prażonymi pistacjami",
    category: "Desery",
    allergens: ["orzechy", "mleko", "gluten"],
    price: { base: 45, sizes: { "800g": 75, "1.2kg": 110 } },
    ingredients: [
      "śmietanka 36%",
      "pistacje",
      "biała czekolada",
      "żelatyna",
      "biszkopt",
    ],
    weight: "800g / 1.2kg",
    preparationTime: "24h",
    tags: ["klasyka", "wykwintne"],
    popularity: 9,
  },
  {
    src: deserkiKolor,
    alt: "Deserki kolor",
    description:
      "Mieszanka sezonowych deserków w różnych smakach: malinowy, mango-passion, czekoladowy",
    category: "Desery",
    allergens: ["mleko", "jaja"],
    price: { base: 12, sizes: { "6szt": 65, "12szt": 120 } },
    ingredients: [
      "śmietanka",
      "świeże owoce",
      "żelatyna roślinna",
      "naturalne barwniki",
    ],
    weight: "150g/szt",
    tags: ["sezonowe", "mix"],
    popularity: 8,
  },
  {
    src: dupaPawiana,
    alt: "Dupa pawiana",
    description:
      "Humorystycznie nazwany deser czekoladowy z karmelizowanym wnętrzem i posypką z kolorowej posypki",
    category: "Desery",
    allergens: ["mleko", "gluten"],
    price: { base: 28 },
    ingredients: ["gorzka czekolada", "karmel solony", "masło", "mąka"],
    weight: "300g",
    tags: ["dziecięce", "czekolada"],
    popularity: 7,
  },
  {
    src: eklerki,
    alt: "Eklerki",
    description:
      "Klasyczne eklerki z kremem waniliowym i czekoladowym, polewa czekoladowa z migdałami",
    category: "Wypieki",
    allergens: ["gluten", "mleko", "jaja"],
    price: { base: 9, sizes: { "6szt": 50 } },
    ingredients: ["ciasto parzone", "krem patissiere", "czekolada deserowa"],
    preparationTime: "48h",
    tags: ["klasyka", "francuskie"],
    popularity: 8,
  },
  {
    src: faworki,
    alt: "Faworki",
    description: "Tradycyjne faworki domowe z cukrem pudrem i wanilią",
    category: "Wypieki",
    allergens: ["gluten", "jaja"],
    price: { base: 25 },
    ingredients: ["mąka", "jajka", "śmietana", "cukier puder"],
    weight: "500g",
    tags: ["tradycyjne", "karnawał"],
    popularity: 6,
  },
  {
    src: kostka,
    alt: "Kostka",
    description:
      "Nowoczesna interpretacja tradycyjnej 'kostki' z kruszonką i kremem serowym",
    category: "Wypieki",
    allergens: ["gluten", "mleko"],
    price: { base: 40 },
    ingredients: ["twaróg", "kruszonka", "kardamon", "skórka pomarańczowa"],
    weight: "1kg",
    tags: ["nowoczesne", "serowe"],
    popularity: 7,
  },
  {
    src: makowiec,
    alt: "Makowiec",
    description:
      "Tradycyjny makowiec z bakaliami i pomarańczą, ciasto drożdżowe",
    category: "Wypieki",
    allergens: ["gluten", "orzechy"],
    price: { base: 35 },
    ingredients: ["mak", "miód", "rodzynki", "skórka pomarańczowa"],
    weight: "1.2kg",
    preparationTime: "72h",
    tags: ["świąteczne", "tradycyjne"],
    popularity: 9,
  },
  {
    src: chmurka,
    alt: "Chmurka",
    description: "Lekki deser musowy z owocami leśnymi i dekoracją z bezy",
    category: "Desery",
    allergens: ["jaja"],
    price: { base: 38 },
    ingredients: ["białka", "świeże jagody", "mascarpone"],
    tags: ["lekki", "owocowy"],
    popularity: 8,
  },
  {
    src: miodownik,
    alt: "Miodownik",
    description: "Siedmiokrotny miodownik z kremem śmietankowym i karmelem",
    category: "Ciasta",
    allergens: ["gluten", "mleko"],
    price: { base: 55 },
    ingredients: ["miód", "krem śmietankowy", "karmel"],
    weight: "1.5kg",
    tags: ["miodowy", "tradycyjne"],
    popularity: 7,
  },
  {
    src: nutella,
    alt: "Nutella",
    description:
      "Ekstrawagancki tort z kremem z nutelli i całymi orzechami laskowymi",
    category: "Torty",
    allergens: ["orzechy", "mleko", "gluten"],
    price: { base: 120 },
    ingredients: ["nutella", "orzechy laskowe", "czekolada belgijska"],
    weight: "2kg",
    preparationTime: "48h",
    tags: ["czekoladowy", "okazje"],
    popularity: 9,
  },
  {
    src: sernik,
    alt: "Sernik",
    description: "Sernik wiedeński na kruchym spodzie z kruszonką migdałową",
    category: "Ciasta",
    allergens: ["gluten", "mleko"],
    price: { base: 45 },
    ingredients: ["twaróg", "kruszonka migdałowa", "wanilia"],
    weight: "1.3kg",
    tags: ["klasyka", "serowe"],
    popularity: 10,
  },
  {
    src: sernikPistacjowy,
    alt: "Sernik pistacjowy",
    description:
      "Nowoczesny sernik pieczony z masą pistacjową i karmelem solonym",
    category: "Ciasta",
    allergens: ["orzechy", "mleko"],
    price: { base: 65 },
    ingredients: ["twaróg", "pistacje", "karmel solony"],
    weight: "1kg",
    tags: ["wyszukane", "nowoczesne"],
    popularity: 8,
  },
  {
    src: tort1,
    alt: "Tort 1",
    description: "Tort ślubny z białym marcepanem i złotymi akcentami",
    category: "Torty",
    allergens: ["gluten", "mleko"],
    price: { base: 200 },
    ingredients: ["marcepan", "krem śmietankowy", "owoce liofilizowane"],
    weight: "3kg",
    preparationTime: "1 tydzień",
    tags: ["ślubny", "elegancki"],
    popularity: 8,
  },
  {
    src: tort2,
    alt: "Tort 2",
    description: "Tort urodzinowy z motywem kosmicznym i jadalnymi perłami",
    category: "Torty",
    allergens: ["gluten", "barwniki"],
    price: { base: 150 },
    ingredients: ["masło kakaowe", "barwniki spożywcze", "czekolada"],
    tags: ["urodziny", "kolorowy"],
    popularity: 7,
  },
  {
    src: tort3,
    alt: "Tort 3",
    description:
      "Tort czekoladowy z dekoracją z suszonych kwiatów i złotym listkiem",
    category: "Torty",
    allergens: ["gluten", "mleko"],
    price: { base: 180 },
    ingredients: ["czekolada 70%", "płatki jadalnych kwiatów"],
    tags: ["roślinny", "elegancki"],
    popularity: 9,
  },
  {
    src: tort4,
    alt: "Tort 4",
    description: "Tort okolicznościowy z ręcznymi dekoracjami z masy cukrowej",
    category: "Torty",
    allergens: ["gluten", "jaja"],
    price: { base: 220 },
    preparationTime: "5 dni",
    tags: ["okolicznościowy", "personalizowany"],
    popularity: 7,
  },
  {
    src: tort30,
    alt: "Tort 30",
    description:
      "Tort jubileuszowy 30-lecia z elementami z czekolady modelowej",
    category: "Torty",
    allergens: ["gluten", "orzechy"],
    price: { base: 300 },
    ingredients: ["czekolada modelowa", "kawior czekoladowy", "złoty pył"],
    tags: ["jubileusz", "luksusowy"],
    popularity: 6,
  },
  {
    src: wuzetka,
    alt: "Wuzetka",
    description: "Kultowa warszawska wuzetka w nowoczesnej interpretacji",
    category: "Ciasta",
    allergens: ["gluten", "mleko"],
    price: { base: 28 },
    ingredients: ["kawa", "bita śmietana", "czekolada"],
    weight: "800g",
    tags: ["warszawskie", "retro"],
    popularity: 9,
  },
];

export default photoData;
