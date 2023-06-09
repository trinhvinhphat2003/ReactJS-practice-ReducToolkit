import { useState } from "react"
import Film from "../film/Film";
import { Container, Grid } from '@mui/material';

export const listOfFilm = [
    {
        id: 1,
        image: "http://folkr.fr/wp-content/uploads/2018/01/top-20-affiches-de-films-2017-folkr-Dunkerque.jpg",
        title: "folkr Dunkerque(2017)",
        year: "2017",
        nation: "USA",
        video: "https://www.youtube.com/embed/vZ734NWnAHA",
        description: "Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II."
    },
    {
        id: 2,
        image: "http://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg",
        title: "the Joker",
        year: "2019",
        nation: "USA",
        video: "https://www.youtube.com/embed/t433PEQGErc",
        description: "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos."
    },
    {
        id: 3,
        image: "https://fr.web.img6.acsta.net/pictures/19/03/05/14/47/4778578.jpg",
        title: "The Unthinkable",
        year: "1977",
        nation: "USA",
        video: "https://www.youtube.com/embed/eSwOzbO9WIo",
        description: "Sweden is under attack by an unknown force, and in the midst of the chaos, Alex tries to reunite with his girlfriend."
    },
    {
        id: 4,
        image: "https://i.pinimg.com/736x/bb/dd/b8/bbddb82c301ec2c45b1638106b50a484.jpg",
        title: "KAFIR",
        year: "1977",
        nation: "USA",
        video: "https://www.youtube.com/embed/bj8ZW70OlyY",
        description: "After the bizarre death of their father, two siblings must uncover the root cause of their mother's sudden paranormal terror to save her."
    },
    {
        id: 5,
        image: "https://media.movieassets.com/static/images/items/movies/posters/6fa587f3cc02721c1c75786868eb7d37.jpg",
        title: "Titanic",
        year: "1977",
        nation: "USA",
        video: "https://www.youtube.com/embed/bYOn3-PhA9c",
        description:"Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him."
    },
    {
        id: 6,
        image: "https://www.cinetrafic.fr/images/affiches/original/aff_9766020191204142558.jpg",
        title: "THE POISON ROSE",
        year: "1977",
        nation: "USA",
        video: "https://www.youtube.com/embed/P6So71lcVdI",
        description: "Carson Phillips, an alcoholic private investigator, takes on the case of a missing person but gets involved in an intricate web of complex cases and suspects."
    },
    {
        id: 7,
        image: "http://image.tmdb.org/t/p/original/xfB0tTfprcoWpR1Fxy82NrMKxBJ.jpg",
        title: "Photo",
        year: "1977",
        nation: "USA",
        video: "https://www.youtube.com/embed/bmiYDKPr_n8",
        description: "Casual shoppers stocking up at the local SavMart may not pay much attention to the man at the photo counter. In fact, they may not even see him. Sy Parrish (Robin Williams), a lonely technician, is a store fixture who develops an unsettling obsession with the Yorkin family, long-time customers."
    },
    {
        id: 8,
        image: "https://i.pinimg.com/originals/79/98/db/7998db3a2e16eef2ebf254ab7416a288.jpg",
        title: "Titanic 2 - Jack's Back Reboot",
        year: "1977",
        nation: "USA",
        video: "https://www.youtube.com/embed/iphqRPaaeP8",
        description: "Jack is the epitome of youth. He can be naïve in his world-view, but is well traveled and hard-lived enough to know a few things about survival and the ways of the world. Although Jack could be bitter about some of the challenges he's faced in his life, he feels truly blessed."
    },
    {
        id: 9,
        image: "https://www.cinetrafic.fr/images/affiches/original/aff_3993020191118151123.jpg",
        title: "Paulette",
        year: "1977",
        nation: "USA",
        video: "https://www.youtube.com/embed/tSkLHvlOzvM",
        description: "An old lady dares to sell cannabis as her monthly expenses are higher than her income. When the rivals are envious, she starts selling pastries with cannabis topping. Will her business rise up?"
    }
]

const ListOfFilm = () => {

    const [films, setFilms] = useState(listOfFilm)
    return (
        <Container>
            <Grid container={true} spacing={2} p={0} justify="center">

                {
                    films.map((film) => {
                        return (
                            <Grid item lg={4} md={6} sm={6} xs={6} key={film.id}>
                                <Film
                                    film={film}
                                    key={film.id}
                                />
                            </Grid>
                        )
                    }
                    )
                }
            </Grid>

        </Container>
    );
}

export default ListOfFilm;