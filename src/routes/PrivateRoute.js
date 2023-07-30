import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "../admin-components/header/Header";
import FilmManagerment from "../admin-pages/film-managerment/FilmManagerment";
import Add from "../admin-pages/add/Add";
import Edit from "../admin-pages/edit/Edit";

const PrivateRoute = ({ setMode, mode }) => {
    return (
        <>
            <Header setMode={setMode} mode={mode} />
            <Routes>
                <Route path="/" element={<FilmManagerment />} />
                <Route path="/film-managerment" element={<FilmManagerment />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit/film/:id" element={<Edit />} />
            </Routes>
        </>
    )
}

export default PrivateRoute;