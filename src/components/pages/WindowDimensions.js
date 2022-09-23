import { useState, useEffect, useRef } from "react";

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";
  const tempSize = useRef();

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const WindowSize = () => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  };
  tempSize.current = WindowSize;

  useEffect(() => {
    tempSize.current();
  }, [hasWindow]);

  return windowDimensions;
}
