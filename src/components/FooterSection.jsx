import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ScrollReveal from "./ScrollReveal";

export default function FooterSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        px: { xs: 3, sm: 6 },
        textAlign: "center",
        background: "linear-gradient(160deg, #FFF0F5 0%, #F5F0FF 50%, #FFF8F0 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "#F5C6D815",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <ScrollReveal type="scaleIn">
        {/* Big heart */}
        <Box sx={{ mb: 3 }} className="animate-pulse-soft">
          <FavoriteIcon
            sx={{
              fontSize: { xs: "4rem", md: "5rem" },
              color: "#E8A0BF",
              filter: "drop-shadow(0 6px 20px #E8A0BF60)",
            }}
          />
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#3D2B3D",
            mb: 2,
          }}
        >
          Here's to you, Siru 🥂
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 520,
            mx: "auto",
            color: "#7A5C7A",
            fontSize: { xs: "1rem", md: "1.1rem" },
            mb: 4,
          }}
        >
          May your 30s be everything you've ever dreamed of — full of joy, adventure, love,
          and every beautiful thing you deserve. You make the world a warmer place.
        </Typography>

        <Divider
          sx={{
            width: 80,
            mx: "auto",
            borderColor: "#C3AED6",
            borderWidth: 2,
            borderRadius: 4,
            mb: 4,
          }}
        />

        {/* Floating sparkle row */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
          {["🎂", "✨", "🌸", "💖", "🎉", "🌟", "🥂"].map((e, i) => (
            <Typography
              key={i}
              sx={{
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                animation: `float ${2.5 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                display: "inline-block",
              }}
            >
              {e}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
          <AutoAwesomeIcon sx={{ color: "#F4C842", fontSize: 14 }} className="animate-sparkle" />
          <Typography
            sx={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              color: "#C96F96",
              textTransform: "uppercase",
            }}
          >
            Made with love for your 30th birthday
          </Typography>
          <AutoAwesomeIcon sx={{ color: "#F4C842", fontSize: 14 }} className="animate-sparkle" />
        </Box>
      </ScrollReveal>
    </Box>
  );
}
