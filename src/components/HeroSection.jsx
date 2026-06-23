import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CelebrationIcon from "@mui/icons-material/Celebration";

const emojis = ["🎂", "🎉", "✨", "🌸", "🎈", "💖", "🥂", "🌟"];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [numberVisible, setNumberVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 200);
    const t2 = setTimeout(() => setNumberVisible(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        py: 8,
        position: "relative",
        background: "linear-gradient(160deg, #FFF0F5 0%, #FFFAF7 40%, #FFF8F0 100%)",
        overflow: "hidden",
      }}
    >
      {/* Floating decorative circles */}
      {[
        { size: 320, top: "-80px", left: "-80px", color: "#F5C6D820" },
        { size: 200, bottom: "-60px", right: "-60px", color: "#C3AED620" },
        { size: 120, top: "30%", right: "5%", color: "#F7C59F30" },
        { size: 80, top: "10%", left: "8%", color: "#F4C84240" },
      ].map((c, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: c.size,
            height: c.size,
            borderRadius: "50%",
            background: c.color,
            top: c.top,
            bottom: c.bottom,
            left: c.left,
            right: c.right,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Floating emojis */}
      {emojis.map((emoji, i) => (
        <Typography
          key={i}
          sx={{
            position: "absolute",
            fontSize: { xs: "1.2rem", md: "1.6rem" },
            top: `${10 + (i * 11) % 80}%`,
            left: i % 2 === 0 ? `${3 + i * 2}%` : undefined,
            right: i % 2 !== 0 ? `${3 + i * 2}%` : undefined,
            animation: `float ${3 + (i * 0.4)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.7,
            userSelect: "none",
          }}
        >
          {emoji}
        </Typography>
      ))}

      {/* Eyebrow */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-20px)",
          transition: "all 0.7s ease",
          mb: 2,
        }}
      >
        <AutoAwesomeIcon sx={{ color: "#F4C842", fontSize: 18 }} className="animate-sparkle" />
        <Typography
          sx={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.25em",
            fontSize: "0.75rem",
            color: "#C96F96",
            textTransform: "uppercase",
          }}
        >
          Today is a special day
        </Typography>
        <AutoAwesomeIcon sx={{ color: "#F4C842", fontSize: 18 }} className="animate-sparkle" />
      </Box>

      {/* Big 30 */}
      <Box
        sx={{
          position: "relative",
          opacity: numberVisible ? 1 : 0,
          transform: numberVisible ? "scale(1)" : "scale(0.7)",
          transition: "all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
          mb: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "8rem", sm: "12rem", md: "16rem" },
            fontWeight: 700,
            lineHeight: 0.9,
            background: "linear-gradient(135deg, #E8A0BF 0%, #C3AED6 40%, #F7C59F 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% auto",
            animation: "shimmer 4s linear infinite",
            userSelect: "none",
          }}
        >
          30
        </Typography>

        {/* Sparkles around 30 */}
        {[
          { top: "5%", right: "-5%", size: 24, delay: "0s" },
          { top: "70%", left: "-5%", size: 16, delay: "0.5s" },
          { bottom: "10%", right: "0%", size: 20, delay: "1s" },
        ].map((s, i) => (
          <AutoAwesomeIcon
            key={i}
            sx={{
              position: "absolute",
              top: s.top,
              right: s.right,
              left: s.left,
              bottom: s.bottom,
              fontSize: s.size,
              color: "#F4C842",
              animation: `sparkle 2s ${s.delay} ease-in-out infinite`,
            }}
          />
        ))}
      </Box>

      {/* Name */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
          color: "#3D2B3D",
          fontStyle: "italic",
          letterSpacing: "0.05em",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease 0.4s",
          mb: 1,
        }}
      >
        Happy Birthday, Siru
      </Typography>

      <Divider
        sx={{
          width: { xs: "60px", md: "100px" },
          borderColor: "#E8A0BF",
          borderWidth: 2,
          borderRadius: 4,
          my: 2,
          mx: "auto",
          opacity: visible ? 1 : 0,
          transition: "all 0.8s ease 0.6s",
        }}
      />

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 480,
          color: "#7A5C7A",
          fontSize: { xs: "1rem", md: "1.15rem" },
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease 0.8s",
          mb: 3,
        }}
      >
        Three decades of laughter, love, and everything beautiful — here's to you and all the
        magic you bring into this world. 🌸
      </Typography>

      {/* Scroll hint */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          opacity: visible ? 0.5 : 0,
          transition: "all 1s ease 1.5s",
          animation: "float 2.5s ease-in-out infinite",
        }}
      >
        <CelebrationIcon sx={{ color: "#E8A0BF", fontSize: 20 }} />
        <Typography sx={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#C96F96", textTransform: "uppercase" }}>
          Scroll to celebrate
        </Typography>
      </Box>
    </Box>
  );
}
