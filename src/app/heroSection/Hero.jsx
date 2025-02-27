import HeroImage from "./HeroImage";
import Loop from "./Loop";

const Hero = () => {
  return (
    <section className="w-full relative container mx-auto h-screen max-h-[1000px]">
      <div className="top-[20%] left-4 text-black absolute max-w-fit h-fit z-10 p-2">
        <h1
          className="flex bg-white bg-opacity-75 backdrop-blur-[2px] flex-col sm:flex-row w-fit leading-normal py-4 px-8 rounded-md 
          tracking-wider opacity-0 text-5xl animate-fade-in md:text-6xl lg:text-7xl mb-36
          md:justify-center md:items-center md:p-12 md:leading-relaxed text-center relative">
          <span>Słodka&nbsp;</span>
          <span>Pętelka</span>
          <Loop />
        </h1>
        <h2 className="hidden sm:flex mt-12 p-6 bg-white w-fit bg-opacity-75 mb-16 backdrop-blur-[1px] flex-col rounded-md opacity-0 text-2xl animate-fade-in-delay md:text-3xl lg:text-4xl ">
          <span>Domowa cukiernia tego typu.</span>
        </h2>
        <div className="hidden md:block mt-12 max-w-2xl opacity-0 bg-white bg-opacity-75 text-lg p-4 rounded-md animate-fade-in-delay-long">
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quia. Explicabo, nobis reiciendis? Sapiente molestias
            rerum commodi maxime vel consequuntur nesciunt! Nisi, consequuntur
            aliquid vitae quia vero velit atque inventore.
          </span>
        </div>
      </div>
      <HeroImage />
    </section>
  );
};

export default Hero;
