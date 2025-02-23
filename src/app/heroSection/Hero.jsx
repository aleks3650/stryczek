import HeroImage from "./HeroImage";
import Loop from "./Loop";
import Data from "./data.json";

const Hero = () => {
  const heroData = Data.HeroData;

  return (
    <section className="w-full h-screen relative container mx-auto">
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
        <div className="hidden mt-12 sm:flex gap-4 md:gap-8 lg:gap-12">
          {Object.keys(heroData).map((key) => (
            <div
              key={key}
              className="flex flex-col items-center opacity-0 bg-white bg-opacity-75  p-4 rounded-md animate-fade-in-delay-long">
              <h3 className="max-w-32 ">{heroData[key].Name}</h3>
              <img
                alt="cake image"
                className="w-16 h-16"
                src={heroData[key].Image}
              />
            </div>
          ))}
        </div>
      </div>
      <HeroImage />
    </section>
  );
};

export default Hero;
