import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#E8A0BF",      // soft rose
      light: "#F5C6D8",
      dark: "#C96F96",
    },
    secondary: {
      main: "#F7C59F",      // warm peach
      light: "#FAE0C8",
      dark: "#E0A06A",
    },
    background: {
      default: "#FFFAF7",   // warm off-white
      paper: "#FFFFFF",
    },
    accent: {
      gold: "#F4C842",
      lavender: "#C3AED6",
      mint: "#A8D5BA",
    },
    text: {
      primary: "#3D2B3D",   // deep plum
      secondary: "#7A5C7A",
    },
  },
  typography: {
    fontFamily: "'Lato', 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "'Lato', sans-serif",
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: "'Lato', sans-serif",
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&display=swap');
        
        html { scroll-behavior: smooth; }
        
        body {
          background: #FFFAF7;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #F5C6D8;
        }
        ::-webkit-scrollbar-thumb {
          background: #E8A0BF;
          border-radius: 10px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.6; transform: scale(1.3) rotate(180deg); }
        }

        @keyframes confettiFall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-10deg) scale(0.9); }
          to { opacity: 1; transform: rotate(0deg) scale(1); }
        }

        @keyframes imageReveal {
          from { opacity: 0; transform: scale(1.05) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse 3s ease-in-out infinite; }
      `,
    },
  },
});

export default theme;
