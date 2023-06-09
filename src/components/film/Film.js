import { useState } from "react";
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import "./Film.css"
import FilmDetail from "../film-detail/FilmDetail";
import { useNavigate } from "react-router-dom";

const Film = (props) => {

    const navigate = useNavigate();

    const { film } = props;

    const [showDetail, setShowDetail] = useState(false);

    return (
        <Card className='card' variant="outlined">
            <CardMedia
                component="img"
                height="400"
                image={film.image}
                alt="Paella dish"
            />
            <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div" align="center">
                    {film.title}
                </Typography>
                <FilmDetail film={film} />
                <Button fullWidth={true} onClick={() => navigate(`/detail/${film.id}`)} variant="outlined" color='inherit' style={{marginTop: 10}}><Typography variant="h6" align='center'>Detail</Typography></Button>
            </CardContent>
        </Card>
    )
}

export default Film;