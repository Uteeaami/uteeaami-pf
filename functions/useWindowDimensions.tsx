import { useState, useEffect } from "react";

export interface WindowDimensions {
  width: number;
  height: number;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({ width: 0, height: 0 });

  useEffect(() => {
    function getWindowDimensions() {
      if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height,
        };
      } else {
        return {
          width: 0,
          height: 0,
        };
      }
    }

    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      setWindowDimensions(getWindowDimensions());
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowDimensions;
}
