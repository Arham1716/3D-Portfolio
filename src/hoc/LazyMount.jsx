import React, { useEffect, useRef, useState } from "react";

// Mounts children (e.g. a <Canvas>) only while the wrapper is near the
// viewport, and unmounts them once it scrolls back out. Each <Canvas> opens
// its own WebGL context, and browsers cap how many can be alive at once
// (Chrome silently evicts the oldest past ~16, which renders as a blank
// canvas with no recovery) — with 15+ skill balls plus the hero computer,
// Earth and starfield canvases, leaving them all mounted forever is enough
// to blow past that cap on a single scroll through the page. Keeping only
// the ones actually in view bounds the count regardless of page length.
const LazyMount = ({ children, rootMargin = "200px", className, style }) => {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShouldRender(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} style={style}>
      {shouldRender ? children : null}
    </div>
  );
};

export default LazyMount;
