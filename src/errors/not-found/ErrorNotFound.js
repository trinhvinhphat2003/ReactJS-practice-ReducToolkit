import { Link, useRouteError } from "react-router-dom"
import { Container, Paper, Button, Box, Typography } from '@mui/material';

const ErrorNotFound = () => {


    return (
        <div style={{ height: "80vh", alignItems: "center", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
            <Container>
                <Box style={{ height: "100%" }}>
                    <Paper style={{ marginTop: 100 }}>
                        <Typography style={{paddingBottom: 30, paddingTop: 30}} variant="h3">NOT FOUND</Typography>
                        <Button variant="contained" style={{marginBottom: 30, marginTop: 30}}><Link to="/" style={{color: "white", textDecoration: "none"}}>Back to home page</Link></Button>
                    </Paper>
                </Box>
            </Container>

        </div>
    )
}

export default ErrorNotFound;