import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Footer from "./components/footer/Footer";
import PublicRoute from "./routes/PublicRoute"
import PrivateRoute from "./routes/PrivateRoute";
import { useSelector } from "react-redux";
import { isLoginnedSelector } from "./redux/selectors/selectors";



function App() {
  useEffect(
    () => {
      console.log("user => " + isLoginned);
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

  const isLoginned = useSelector(isLoginnedSelector);

  return (

    <div className={mode === "dark" ? "dark" : "light"}>
      <Router>
        <CssBaseline />
        <ThemeProvider theme={customTheme}>
          {
            !isLoginned
              ? <PublicRoute setMode={setMode} mode={mode} />
              : <PrivateRoute setMode={setMode} mode={mode} />
          }
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
