import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ScrollReveal from "./ScrollReveal";

// ─── IMAGE CONFIG ──────────────────────────────────────────────────────────────
const photos = [
  {
    id: 1,
    src: "./assets/photo1.jpg",
    alt: "Photo 1",
    caption: "Caption one goes here",
  },
  {
    id: 2,
    src: "./assets/photo2.jpg",
    alt: "Photo 2",
    caption: "Caption two goes here",
  },
  {
    id: 3,
    src: "./assets/photo3.jpg",
    alt: "Photo 3",
    caption: "Caption three goes here",
  },
  {
    id: 4,
    src: "./assets/photo4.jpg",
    alt: "Photo 4",
    caption: "Caption four goes here",
  },
  {
    id: 5,
    src: "./assets/photo5.jpg",
    alt: "Photo 5",
    caption: "Caption five goes here",
  },
  {
    id: 6,
    src: "./assets/photo6.jpg",
    alt: "Photo 6",
    caption: "Caption six goes here",
  },
  {
    id: 7,
    src: "./assets/photo7.jpg",
    alt: "Photo 7",
    caption: "Caption seven goes here",
  },
  {
    id: 8,
    src: "./assets/photo8.jpg",
    alt: "Photo 8",
    caption: "Caption eight goes here",
  },
  {
    id: 9,
    src: "./assets/photo9.jpg",
    alt: "Photo 9",
    caption: "Caption nine goes here",
  },
  {
    id: 10,
    src: "./assets/photo10.jpg",
    alt: "Photo 10",
    caption: "Caption ten goes here",
  },
  {
    id: 11,
    src: "./assets/photo11.jpg",
    alt: "Photo 11",
    caption: "Caption eleven goes here",
  },
  {
    id: 12,
    src: "./assets/photo12.jpg",
    alt: "Photo 12",
    caption: "Caption twelve goes here",
  },
  // Added 8 more image slots below:
  {
    id: 13,
    src: "./assets/photo13.jpg",
    alt: "Photo 13",
    caption: "Caption thirteen goes here",
  },
  {
    id: 14,
    src: "./assets/photo14.jpg",
    alt: "Photo 14",
    caption: "Caption fourteen goes here",
  },
  {
    id: 15,
    src: "./assets/photo15.jpg",
    alt: "Photo 15",
    caption: "Caption fifteen goes here",
  },
  {
    id: 16,
    src: "./assets/photo16.jpg",
    alt: "Photo 16",
    caption: "Caption sixteen goes here",
  },
  {
    id: 17,
    src: "./assets/photo17.jpg",
    alt: "Photo 17",
    caption: "Caption seventeen goes here",
  },
  {
    id: 18,
    src: "./assets/photo18.jpg",
    alt: "Photo 18",
    caption: "Caption eighteen goes here",
  },
  {
    id: 19,
    src: "./assets/photo19.jpg",
    alt: "Photo 19",
    caption: "Caption nineteen goes here",
  },
  {
    id: 20,
    src: "./assets/photo20.jpg",
    alt: "Photo 20",
    caption: "Caption twenty goes here",
  },
];

// Varied grid spans for an organic mosaic feel (Extended for 20 images)
const spanConfig = [
  { colSpan: 2, rowSpan: 2 }, // large
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 2 },
  // Extended configuration for the 8 new photos:
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 2, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 2 }, // Another anchor large item
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
];

function PhotoCard({ photo, span, index, onClick }) {
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      onClick={() => onClick(index)}
      sx={{
        gridColumn: { xs: "span 1", sm: `span ${span.colSpan}` },
        gridRow: { xs: "span 1", sm: `span ${span.rowSpan}` },
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        aspectRatio: span.rowSpan === 2 ? "auto" : "1",
        minHeight: span.rowSpan === 2 ? "300px" : "180px",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "scale(0.92) translateY(20px)",
        transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 80}ms`,
        "&:hover .photo-overlay": { opacity: 1 },
        "&:hover img": { transform: "scale(1.07)" },
        boxShadow: "0 4px 20px rgba(61,43,61,0.08)",
        "&:hover": {
          boxShadow: "0 12px 36px rgba(61,43,61,0.16)",
          zIndex: 1,
        },
      }}
    >
      <Box
        component="img"
        src={photo.src}
        alt={photo.alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s ease",
        }}
        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentElement.style.background = `linear-gradient(135deg, #F5C6D8 0%, #C3AED6 100%)`;
        }}
      />

      {/* Hover overlay with caption */}
      <Box
        className="photo-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(61,43,61,0.75) 0%, transparent 60%)",
          opacity: 0,
          transition: "opacity 0.3s ease",
          display: "flex",
          alignItems: "flex-end",
          p: 2,
        }}
      />
    </Box>
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleClose = () => setLightboxIndex(null);
  const handlePrev = () =>
    setLightboxIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const handleNext = () =>
    setLightboxIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 8 },
        background: "linear-gradient(180deg, #FFF5FA 0%, #FFFAF7 100%)",
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
            Memories
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, color: "#3D2B3D" }}
          >
            Moments we cherish
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#7A5C7A", mt: 1.5, fontSize: "0.95rem" }}
          >
            Click any photo to view it larger ✨
          </Typography>
        </Box>
      </ScrollReveal>

      {/* Mosaic grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" },
          gridAutoRows: { xs: "160px", sm: "180px" },
          gap: { xs: 1.5, sm: 2 },
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        {photos.map((photo, i) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            span={spanConfig[i] || { colSpan: 1, rowSpan: 1 }}
            index={i}
            onClick={setLightboxIndex}
          />
        ))}
      </Box>

      {/* Lightbox */}
      <Modal
        open={lightboxIndex !== null}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: { xs: "95vw", md: "80vw" },
            maxHeight: "90vh",
            outline: "none",
            borderRadius: 4,
            overflow: "hidden",
            background: "#1A1020",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          }}
        >
          {lightboxIndex !== null && (
            <>
              <Box
                component="img"
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                sx={{
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  mx: "auto",
                }}
              />
              <Box
                sx={{
                  p: 2,
                  textAlign: "center",
                  background: "#1A1020",
                }}
              >
                <Typography
                  sx={{
                    color: "#F5C6D8",
                    fontStyle: "italic",
                    fontSize: "0.9rem",
                  }}
                >
                  {photos[lightboxIndex].caption}
                </Typography>
                <Typography
                  sx={{ color: "#7A5C7A", fontSize: "0.8rem", mt: 0.5 }}
                >
                  {lightboxIndex + 1} / {photos.length}
                </Typography>
              </Box>

              {/* Controls */}
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  color: "#FFFFFF",
                  background: "rgba(0,0,0,0.4)",
                  "&:hover": { background: "rgba(0,0,0,0.7)" },
                }}
              >
                <CloseIcon />
              </IconButton>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 12,
                  transform: "translateY(-50%)",
                  color: "#FFFFFF",
                  background: "rgba(0,0,0,0.4)",
                  "&:hover": { background: "rgba(0,0,0,0.7)" },
                }}
              >
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 12,
                  transform: "translateY(-50%)",
                  color: "#FFFFFF",
                  background: "rgba(0,0,0,0.4)",
                  "&:hover": { background: "rgba(0,0,0,0.7)" },
                }}
              >
                <NavigateNextIcon />
              </IconButton>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
