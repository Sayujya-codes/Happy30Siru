import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ScrollReveal from "./ScrollReveal";

const messages = [
  {
    id: 1,
    icon: <FavoriteIcon sx={{ fontSize: 28 }} />,
    iconColor: "#E8A0BF",
    accent: "#FFF0F5",
    border: "#F5C6D8",
    label: "With love",
    emoji: "💖",
    text: `[Your heartfelt message goes here. You can write about how much Siru means to you, 
    your favorite memories together, and why she makes every room brighter just by being in it. 
    Edit this text to make it personal and warm.]`,
  },
  {
    id: 2,
    icon: <AutoAwesomeIcon sx={{ fontSize: 28 }} />,
    iconColor: "#C3AED6",
    accent: "#F5F0FF",
    border: "#D9C9E8",
    label: "30 looks good on you",
    emoji: "✨",
    text: `[Write about this milestone — turning 30 is something worth celebrating big. 
    Tell Siru what you admire about her, how she has grown, and what you hope this beautiful 
    decade brings her. Replace this with your own words.]`,
  },
  {
    id: 3,
    icon: <EmojiEmotionsIcon sx={{ fontSize: 28 }} />,
    iconColor: "#F7C59F",
    accent: "#FFF8F0",
    border: "#F7D9B8",
    label: "A funny one 😄",
    emoji: "🎉",
    text: `[Maybe this is the place for an inside joke, a funny memory, or a lighthearted 
    note that will make Siru laugh out loud. Keep it playful and full of your shared humor. 
    Make it something only the two of you would understand.]`,
  },
  {
    id: 4,
    icon: <FormatQuoteIcon sx={{ fontSize: 28 }} />,
    iconColor: "#A8D5BA",
    accent: "#F0FFF5",
    border: "#B8E8C8",
    label: "A wish for you",
    emoji: "🌸",
    text: `[Close with a beautiful wish — for the year ahead, for the decade to come, 
    or for life in general. This could be a quote you love, a blessing, or simply your 
    deepest hope for Siru's happiness. Make it something she'll want to read again and again.]`,
  },
];

export default function MessagesSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
        background: "linear-gradient(180deg, #FFFAF7 0%, #FFF5FA 100%)",
        position: "relative",
      }}
    >
      {/* Section header */}
      <ScrollReveal type="fadeDown">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            sx={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.25em",
              fontSize: "0.7rem",
              color: "#C96F96",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            From the heart
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              color: "#3D2B3D",
            }}
          >
            Words for Siru
          </Typography>
        </Box>
      </ScrollReveal>

      {/* Cards grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 3,
          maxWidth: 900,
          mx: "auto",
        }}
      >
        {messages.map((msg, i) => (
          <ScrollReveal
            key={msg.id}
            type={i % 2 === 0 ? "fadeUp" : "scaleIn"}
            delay={i * 120}
          >
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: `1.5px solid ${msg.border}`,
                background: msg.accent,
                height: "100%",
                position: "relative",
                overflow: "visible",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: `0 16px 40px ${msg.border}80`,
                },
              }}
            >
              {/* Emoji badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: -16,
                  left: 24,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#FFFFFF",
                  border: `2px solid ${msg.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                }}
              >
                {msg.emoji}
              </Box>

              <CardContent sx={{ pt: 4, pb: 3, px: 3 }}>
                {/* Label */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                  <Box sx={{ color: msg.iconColor }}>{msg.icon}</Box>
                  <Typography
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "#3D2B3D",
                      fontStyle: "italic",
                    }}
                  >
                    {msg.label}
                  </Typography>
                </Box>

                {/* Message */}
                <Typography
                  variant="body1"
                  sx={{
                    color: "#7A5C7A",
                    fontSize: "0.95rem",
                    lineHeight: 1.85,
                  }}
                >
                  {msg.text}
                </Typography>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </Box>
    </Box>
  );
}
