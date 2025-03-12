"use client";
import { useRef } from "react";
import { usePopupStore } from "../state/store";
import useOutsideClick from "../lib/useOutsideClick";

const PopupSection = () => {
  const modalRef = useRef(null);
  const { component, setComponent } = usePopupStore();

  useOutsideClick(modalRef, () => {
    setComponent(null);
  });

  return (
    <>
      {component && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div ref={modalRef} className="relative">
            <button
              className="absolute -top-4 -right-4 text-4xl text-white"
              onClick={() => setComponent(null)}
              aria-label="Zamknij"
            >
              ✕
            </button>
            {component}
          </div>
        </div>
      )}
    </>
  );
};

export default PopupSection;