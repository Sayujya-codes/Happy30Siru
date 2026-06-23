import React, { useState, useRef, useEffect } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";

// Happy Birthday melody: [note_hz, duration_ms]
const NOTES = {
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23,
  G4: 392.0,  A4: 440.0,  B4: 493.88,
  C5: 523.25, D5: 587.33, G3: 196.0,
};

const MELODY = [
  // "Happy Birthday to you" x2, "Happy Birthday dear Siru", "Happy Birthday to you"
  [NOTES.G3, 375], [NOTES.G3, 125], [NOTES.A4, 500], [NOTES.G3, 500],
  [NOTES.C5, 500], [NOTES.B4, 1000],
  [NOTES.G3, 375], [NOTES.G3, 125], [NOTES.A4, 500], [NOTES.G3, 500],
  [NOTES.D5, 500], [NOTES.C5, 1000],
  [NOTES.G3, 375], [NOTES.G3, 125], [NOTES.G4, 500], [NOTES.E4, 500],
  [NOTES.C5, 375], [NOTES.B4, 125], [NOTES.A4, 1000],
  [NOTES.F4, 375], [NOTES.F4, 125], [NOTES.E4, 500], [NOTES.C5, 500],
  [NOTES.D5, 500], [NOTES.C5, 1500],
];

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const ctxRef = useRef(null);
  const schedulerRef = useRef(null);
  const sourceNodesRef = useRef([]);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const stopAll = () => {
    sourceNodesRef.current.forEach((n) => { try { n.stop(); } catch (_) {} });
    sourceNodesRef.current = [];
    if (schedulerRef.current) {
      clearTimeout(schedulerRef.current);
      schedulerRef.current = null;
    }
  };

  const playNote = (ctx, freq, startTime, duration) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, startTime);

    const dur = duration / 1000;
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.18, startTime + 0.02);
    gain.gain.setValueAtTime(0.18, startTime + dur * 0.7);
    gain.gain.linearRampToValueAtTime(0, startTime + dur);

    osc.start(startTime);
    osc.stop(startTime + dur + 0.05);
    sourceNodesRef.current.push(osc);
  };

  const startMelody = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctxRef.current = ctx;

    let t = ctx.currentTime + 0.1;
    MELODY.forEach(([freq, dur]) => {
      playNote(ctx, freq, t, dur);
      t += dur / 1000;
    });

    // Loop: restart after melody finishes
    const totalMs = MELODY.reduce((acc, [, d]) => acc + d, 0);
    schedulerRef.current = setTimeout(() => {
      if (ctxRef.current) {
        stopAll();
        startMelody();
      }
    }, totalMs + 200);
  };

  const toggle = () => {
    if (playing) {
      stopAll();
      if (ctxRef.current) {
        ctxRef.current.close();
        ctxRef.current = null;
      }
      setPlaying(false);
    } else {
      startMelody();
      setPlaying(true);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 100,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.5)",
        transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <Tooltip
        title={playing ? "Mute music" : "Play Happy Birthday 🎵"}
        placement="left"
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0.5 }}>
          <IconButton
            onClick={toggle}
            sx={{
              width: 52,
              height: 52,
              background: playing
                ? "linear-gradient(135deg, #E8A0BF, #C3AED6)"
                : "#FFFFFF",
              border: "2px solid #F5C6D8",
              boxShadow: playing
                ? "0 6px 24px rgba(232,160,191,0.5)"
                : "0 4px 16px rgba(61,43,61,0.12)",
              color: playing ? "#FFFFFF" : "#E8A0BF",
              animation: playing ? "pulse 2s ease-in-out infinite" : "none",
              "&:hover": {
                background: playing
                  ? "linear-gradient(135deg, #C96F96, #9B7FC2)"
                  : "#FFF0F5",
                transform: "scale(1.08)",
              },
              transition: "all 0.3s ease",
            }}
          >
            {playing ? <MusicNoteIcon /> : <MusicOffIcon />}
          </IconButton>
          <Typography
            sx={{
              fontSize: "0.6rem",
              color: "#C96F96",
              letterSpacing: "0.05em",
              fontFamily: "'Lato', sans-serif",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            {playing ? "♪ playing" : "music"}
          </Typography>
        </Box>
      </Tooltip>
    </Box>
  );
}
