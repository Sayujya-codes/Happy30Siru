import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

/**
 * Wraps children in a div that animates in once it enters the viewport.
 * type: "fadeUp" | "fadeDown" | "scaleIn" | "rotateIn"
 */
export default function ScrollReveal({
  children,
  type = "fadeUp",
  delay = 0,
  threshold = 0.15,
  sx = {},
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const hiddenStyles = {
    fadeUp: { opacity: 0, transform: "translateY(40px)" },
    fadeDown: { opacity: 0, transform: "translateY(-30px)" },
    scaleIn: { opacity: 0, transform: "scale(0.85)" },
    rotateIn: { opacity: 0, transform: "rotate(-8deg) scale(0.9)" },
  };

  const visibleStyles = {
    opacity: 1,
    transform: "none",
  };

  return (
    <Box
      ref={ref}
      sx={{
        ...(inView ? visibleStyles : hiddenStyles[type]),
        transition: `all 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
