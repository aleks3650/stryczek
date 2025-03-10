import Image from "next/image";

const CartTop = ({ date }) => {
  return (
    <header className="flex items-center justify-between m-2">
      <div className="flex items-center ">
        <Image
          src="/cinamonRoll.png"
          height={64}
          width={64}
          className="pointer-events-none"
          alt="Słodka Pętelka logo"
        />
        <h2 className="text-2xl font-semibold hidden ml-2  sm:block">
          <span className="block ">Słodka</span>
          <span className="block ">Pętelka</span>
        </h2>
      </div>

      <div className=" text-gray-500 flex flex-row text-lg items-center justify-start">
        <span className="text-end">{date}</span>
      </div>
    </header>
  );
};

export default CartTop;
