import { useState, useEffect, useCallback } from "react";

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const useCursorAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const debouncedSetMousePosition = useCallback(
    debounce((x, y) => {
      setMousePosition({ x, y });
    }, 0),
    []
  );

  const handleMouseMove = (e) => {
    debouncedSetMousePosition(e.clientX, e.clientY);
  };

  //   const textEnter = () => setCursorVariant("text");
  const textEnter = () => {
    console.log("Entering text");
    setCursorVariant("text");
  };
  const textLeave = () => setCursorVariant("default");

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    // when cursor moves on text
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  return { variants, textEnter, textLeave, cursorVariant };
};

export default useCursorAnimation;
