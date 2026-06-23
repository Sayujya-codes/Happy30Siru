import React from "react";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ScrollReveal from "./ScrollReveal";

const messages = [
  {
    id: 5,
    icon: <CelebrationIcon sx={{ fontSize: 28 }} />,
    iconColor: "#85C1E9",
    accent: "#F0F8FF",
    border: "#AED6F1",
    label: "Cheers to you!",
    avatar: "./assets/humans/friend5.png",
    text: `Happy 30th Birthday dearest xori!

It seems like only yesterday you were holding the paper and pencil and making holes and fanning the paper and laughing your heart out loud, with the paper dancing in the wind. Today, we find ourselves admiring you more for your love and care and resolve. We truly appreciate your fiery dedication to learn and excel and prove your essence, mostly with ease and always on a positive note.

As we celebrate this special day, our wish is simple: May you continue to grow into the life that always finds joy in the journey as much as the destination, and always trusting your strength has no match!`,
  },
  {
    id: 1,
    icon: <FavoriteIcon sx={{ fontSize: 28 }} />,
    iconColor: "#E8A0BF",
    accent: "#FFF0F5",
    border: "#F5C6D8",
    label: "With love from Didi",
    avatar: "./assets/humans/didi.png",
    text: `My dearest Siru,

You know it already because I've told you many times — you are a light of my life. Being able to love you makes me feel so blessed.

I wish life gives you the best of everything. I wish the universe fuels your spark to shine brighter and brighter.

Always there for you,
Didi`,
  },
  {
    id: 2,
    icon: <AutoAwesomeIcon sx={{ fontSize: 28 }} />,
    iconColor: "#C3AED6",
    accent: "#F5F0FF",
    border: "#D9C9E8",
    label: "30 Special",
    avatar: "./assets/humans/rocky.png",
    text: `Happy 30th Birthday Bae!

Thank you for being such an amazing person inside out. Every moment we shared, every day we spent together this year has been truly amazing and holds a special place in my life.

I love you to the Moon and back, Bae.

Wishing you a happy birthday and an amazing year ahead. Let's create more memories in your 30s together.`,
  },
  {
    id: 3,
    icon: <EmojiEmotionsIcon sx={{ fontSize: 28 }} />,
    iconColor: "#F7C59F",
    accent: "#FFF8F0",
    border: "#F7D9B8",
    label: "Wishing you a joyous years ahead!",
    avatar: "./assets/humans/sujan.png",
    text: `Happy Birthday, dear Shiru!

You are one of the most cheerful souls I know — truly everyone's dear and darling, the one who brightens up every room she walks into. You love and take care of everyone around you: your siblings, your parents, your friends, your colleagues. It's something really special, and I admire you for this.

It makes me so proud to see you living and thriving in Australia and doing so well in life. On your special day, I wish you even more success, more happiness, and all the beautiful things you truly deserve.

Have a wonderful birthday, Shiru!`,
  },
  {
    id: 4,
    icon: <FormatQuoteIcon sx={{ fontSize: 28 }} />,
    iconColor: "#A8D5BA",
    accent: "#F0FFF5",
    border: "#B8E8C8",
    label: "To the One Who Makes Everything Feel Okay",
    avatar: "./assets/humans/sayuj.png",
    text: `Happiest Birthday, Siru! ❤️

You are my "kei hudaina" to my "dar lagyo". No matter the situation, you always make me feel like there is someone who has my back. Somehow, you make every difficult situation seem simpler and easier to get through.

It's hard to believe that the girl who used to come home from college and go straight to bed at my age is already 30! Time has truly flown by.

Thank you for being such an amazing sister, for your endless support, and for always being there when I need you. I am so grateful to have you in my life.

Wishing you the happiest birthday, Siru. May this new chapter bring you good health, happiness, success, and countless beautiful memories. Always stay as joyful, caring, and cheerful as you are.

Love you always.
- Your Brother`,
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
          columnGap: 3,
          rowGap: 6,
          maxWidth: 900,
          mx: "auto",
          pt: { xs: 4, sm: 2 },
        }}
      >
        {messages.map((msg, i) => {
          const isFirst = i === 0;

          return (
            <Box key={msg.id} sx={isFirst ? { gridColumn: "1 / -1" } : {}}>
              <ScrollReveal
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
                  {/* Avatar badge — hidden for first card */}
                  {!isFirst && (
                    <Avatar
                      src={msg.avatar}
                      alt={msg.label}
                      sx={{
                        position: "absolute",
                        top: -28,
                        left: 24,
                        width: 64,
                        height: 64,
                        border: `3px solid #FFFFFF`,
                        outline: `2px solid ${msg.border}`,
                        boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                      }}
                    />
                  )}

                  <CardContent
                    sx={{
                      pt: isFirst ? 0 : 5.5,
                      pb: isFirst ? "0 !important" : 3,
                      px: isFirst ? 0 : 3,
                      ...(isFirst && {
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: 0,
                        alignItems: "stretch",
                      }),
                    }}
                  >
                    {/* Square image — first card only */}
                    {isFirst && (
                      <Box
                        sx={{
                          flexShrink: 0,
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          component="img"
                          src="./assets/humans/dadmom.png"
                          alt="From Mom & Dad"
                          sx={{
                            width: { xs: "100%", sm: 200 },
                            height: { xs: 200, sm: 200 },
                            objectFit: "cover",
                            borderRadius: 3,
                            display: "block",
                            border: `2px solid ${msg.border}`,
                          }}
                        />
                      </Box>
                    )}

                    {/* Vertical divider — first card desktop only */}
                    {isFirst && (
                      <Box
                        sx={{
                          display: { xs: "none", sm: "block" },
                          width: "1.5px",
                          alignSelf: "stretch",
                          my: 2,
                          background: msg.border,
                          flexShrink: 0,
                        }}
                      />
                    )}

                    {/* Label block — normal cards only */}
                    {!isFirst && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 2,
                        }}
                      >
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
                    )}

                    {/* Message text */}
                    <Box
                      sx={
                        isFirst
                          ? {
                              p: 3,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }
                          : {}
                      }
                    >
                      {isFirst && (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 1.5,
                          }}
                        >
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
                      )}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#7A5C7A",
                          fontSize: "0.95rem",
                          lineHeight: 1.85,
                          whiteSpace: "pre-line", // ← key fix for line breaks
                        }}
                      >
                        {msg.text}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
