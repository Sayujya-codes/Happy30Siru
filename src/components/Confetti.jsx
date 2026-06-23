import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const COLORS = ["#E8A0BF", "#F7C59F", "#F4C842", "#C3AED6", "#A8D5BA", "#F5C6D8"];
const SHAPES = ["circle", "square", "triangle"];

const randomBetween = (a, b) => Math.random() * (b - a) + a;

function createPiece() {
  return {
    id: Math.random(),
    x: randomBetween(0, 100),
    delay: randomBetween(0, 6),
    duration: randomBetween(4, 9),
    size: randomBetween(6, 14),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    drift: randomBetween(-30, 30),
  };
}

export default function Confetti({ count = 40 }) {
  const pieces = useRef(Array.from({ length: count }, createPiece));

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {pieces.current.map((p) => (
        <Box
          key={p.id}
          sx={{
            position: "absolute",
            top: "-20px",
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.shape !== "triangle" ? p.color : "transparent",
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "square" ? "2px" : "0",
            borderLeft: p.shape === "triangle" ? `${p.size / 2}px solid transparent` : "none",
            borderRight: p.shape === "triangle" ? `${p.size / 2}px solid transparent` : "none",
            borderBottom: p.shape === "triangle" ? `${p.size}px solid ${p.color}` : "none",
            opacity: 0.75,
            animation: `confettiFall ${p.duration}s ${p.delay}s linear infinite`,
            transform: `translateX(${p.drift}px)`,
          }}
        />
      ))}
    </Box>
  );
}
