import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteFilm } from "../../redux/reducers/FilmSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DataTableAction = ({ id }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleEditFilm = (id) => {
        navigate("/edit/film/" + id);
    }

    const axiosDeleteFilm = async (id) => {
        axios.delete("https://6475906fe607ba4797dc0b16.mockapi.io/api/products/" + id)
    }

    const handleDeleteFilm = (id) => {
        dispatch(
            deleteFilm(id)
        )
        axiosDeleteFilm(id)
    }

    return (
        <div>
            <Button onClick={() => handleEditFilm(id)}>EDIT</Button>
            <Button onClick={() => handleDeleteFilm(id)}>REMOVE</Button>
        </div>
    )
}

export default DataTableAction;