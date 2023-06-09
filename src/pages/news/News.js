import "./News.css"
import { Container, Paper, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
const News = () => {

    const navigation = useNavigate();

    return (
        <div className="new-container">
            <Container>
                <Paper style={{marginTop: 250}}>
                    <Typography variant="h3" align="center" style={{marginBottom: 30}}>
                        IN MAINTAINENCE
                    </Typography>
                    <Button variant="contained" fullWidth onClick={() => navigation("/")}>
                        <Typography variant="h3" align="center">
                            BACK TO HOME PAGE
                        </Typography>
                    </Button>
                </Paper>
            </Container>
        </div>
    )
}

export default News;