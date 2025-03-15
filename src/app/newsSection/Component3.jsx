import React from "react";
import CartTop from "./CartTop";

const Component1 = () => {
  return (
    <div className="mx-auto p-4">
      <CartTop date="18 maja o 17:43" />
      <div className="flex flex-col md:flex-row">
        <header className="mb-6">
          <p className="mt-4 text-lg text-gray-900 leading-relaxed lg:text-3xl">
            Zapoznaj się z naszą najnowszą kolekcją produktów – to tylko
            przedsmak tego, co dla Ciebie przygotowaliśmy.
          </p>
        </header>
        <section className="relative w-full aspect-auto rounded-lg px-4 max-h-[37rem] overflow-hidden sm:px-6 ">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
            aria-label="Film promocyjny"
          >
            <source src="/CakeCrop.mp4" type="video/mp4" />
            Twoja przeglądarka nie obsługuje tagu wideo.
          </video>
        </section>
      </div>
    </div>
  );
};

export default Component1;
