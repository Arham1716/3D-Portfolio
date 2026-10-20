import React, { useEffect, useRef, useState } from "react";

// Defers mounting children (e.g. a <Canvas>) until the wrapper scrolls near
// the viewport, so off-screen 3D scenes don't fetch assets or open WebGL
// contexts at initial page load.
const LazyMount = ({ children, rootMargin = "200px", className, style }) => {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldRender, rootMargin]);

  return (
    <div ref={ref} className={className} style={style}>
      {shouldRender ? children : null}
    </div>
  );
};

export default LazyMount;
