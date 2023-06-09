import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import ListOfFilm from './components/listOfFilm/ListOfFilm';
import Header from './components/header/Header';
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import News from "./pages/news/News";
import FilmDetailContent, { getFilmById } from "./components/film-detail-content/FilmDetailContent";
import Home from "./pages/home/Home";
import ErrorNotFound from "./errors/not-found/ErrorNotFound";

function App() {
  useEffect(
    () => {
      console.log();
    }, []
  )

  const [mode, setMode] = useState(localStorage.getItem("mode") === null ? () => {
    localStorage.setItem("mode", "light"); localStorage.getItem("mode")
  } : localStorage.getItem("mode"));

  const customTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  return (
    <div className={mode === "dark" ? "dark" : "light"}>
      <Router>
        <CssBaseline />
        <ThemeProvider theme={customTheme}>
          <Header setMode={setMode} mode={mode} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/*" element={<ErrorNotFound />} />
            <Route path="/detail/:id" element={<FilmDetailContent />} loader={getFilmById} errorElement={<ErrorNotFound />} />
          </Routes>

          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
