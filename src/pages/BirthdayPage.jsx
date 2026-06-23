import React from "react";
import { Box } from "@mui/material";
import Confetti from "../components/Confetti";
import HeroSection from "../components/HeroSection";
import MessagesSection from "../components/MessagesSection";
import GallerySection from "../components/GallerySection";
import FooterSection from "../components/FooterSection";
import MusicPlayer from "../components/MusicPlayer";

export default function BirthdayPage() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Ambient confetti layer */}
      <Confetti count={45} />

      {/* Page sections */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <MessagesSection />
        <GallerySection />
        <FooterSection />
      </Box>

      {/* Floating music button */}
      <MusicPlayer />
    </Box>
  );
}
