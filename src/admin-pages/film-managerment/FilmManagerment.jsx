import { Container } from "@mui/material";
import "./FilmManagerment.scss"
import DataTable from "../../admin-components/data-table/DataTable";

const FilmManagerment = () => {
    return (
        <div className="film-managerment-container">
            <Container>
                <DataTable />
            </Container>
        </div>
    )
}

export default FilmManagerment;