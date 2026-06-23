import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme";
import BirthdayPage from "./pages/BirthdayPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BirthdayPage />
    </ThemeProvider>
  );
}
