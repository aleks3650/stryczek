import Link from "next/link";
import SVG from "./SVG";

const NotFound = () => {
  return (
    <div className="container mt-10 mx-auto flex flex-col h-screen items-center justify-center text-center">
      <SVG />

      <h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="text-2xl mx-2">
        takiego cuda to jeszcze nie napisałem panie Ferdku
      </h1>

      <Link
        href="/"
        className="mt-8 bg-slate-200 rounded-xl shadow-md text-4xl p-5 px-8">
        Strona główna
      </Link>
    </div>
  );
};

export default NotFound;
