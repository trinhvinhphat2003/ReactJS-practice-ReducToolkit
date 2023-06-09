import { useParams } from "react-router-dom";
import { listOfFilm } from "../listOfFilm/ListOfFilm"
import { Container, Paper, Button, Box, Typography } from '@mui/material';
import { Link, useRouteError } from "react-router-dom"
const FilmDetailContent = () => {

    const { id } = useParams();

    const film = getFilmById(id);

    return (
        <div>
            {
                film ?
                    (
                        <Container>
                            <div className="detail-content" style={{ minHeight: 600 }}>
                                <Paper style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <div style={{ display: "flex", gap: 20 }}>
                                        <div>
                                            <img src={film.image} style={{ width: 400, height: 500, borderRadius: 5 }} />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
                                            <Typography variant="h3">{film.title}</Typography>
                                            <Typography variant="h5">Year: {film.year}</Typography>
                                            <Typography variant="h5">Nation: {film.nation}</Typography>
                                            <Typography variant="h5">Description: {film.description}</Typography>
                                        </div>
                                    </div>
                                    <div>
                                        <Typography variant="h5">Trailer:</Typography>
                                    </div>
                                    <div>
                                        <iframe src={film.video} style={{ width: "100%", height: 700 }} />
                                    </div>
                                </Paper>
                            </div>
                        </Container>
                    )
                    :
                    (
                        <div style={{ height: "80vh", alignItems: "center", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                            <Container>
                                <Box style={{ height: "100%" }}>
                                    <Paper style={{ marginTop: 100 }}>
                                        <Typography style={{ paddingBottom: 30, paddingTop: 30 }} variant="h3">ID: {id} NOT FOUND</Typography>
                                        <Button variant="contained" style={{ marginBottom: 30, marginTop: 30 }}><Link to="/" style={{ color: "white", textDecoration: "none" }}>Back to home page</Link></Button>
                                    </Paper>
                                </Box>
                            </Container>

                        </div>
                    )
            }
        </div>
    )
}

export default FilmDetailContent;

export const getFilmById = (id) => {
    let result = listOfFilm.find((item) => item.id === +id);
    return result;
}