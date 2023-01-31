import { RefObject, useState, useMemo, useEffect } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof window !== "undefined")
      return new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );
  }, [ref]);

  useEffect(() => {
    if (observer) {
      observer.observe(ref.current!);
      return () => observer.disconnect();
    }
  }, []);

  return isIntersecting;
}
