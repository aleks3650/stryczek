import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full h-[100px] relative bg-slate-300 
      sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div
        className="fixed bottom-0 h-[100px] w-full left-0
      sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]">
        <div className="flex flex-col-reverse justify-between items-center h-full py-8 px-2 container mx-auto">
          <p className="text-5xl justify-between w-full leading-[0.8] mt-10 flex">
            <span>Sticky</span>
            <span className="text-gray-700">Footer</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
