import { useEffect } from "react";

export const useTouchMoveOutside = (ref, callback) => {
  const handleTouchMove = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("touchmove", handleTouchMove);

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  });
};
