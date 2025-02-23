"use client";
import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollDirection;
};

export default useScrollDirection;
