import About from "../pages/about/About";
import News from "../pages/news/News";
import FilmDetailContent, { getFilmById } from "../components/film-detail-content/FilmDetailContent";
import Home from "../pages/home/Home";
import ErrorNotFound from "../errors/not-found/ErrorNotFound";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/Contact";
import Header from '../components/header/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const PublicRoute = ({ setMode, mode }) => {
    return (
        <>
            <Header setMode={setMode} mode={mode} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/detail/:id" element={<FilmDetailContent />} loader={getFilmById} errorElement={<ErrorNotFound />} />
                <Route path="/*" element={<ErrorNotFound />} />
            </Routes>
        </>
    )
}

export default PublicRoute;