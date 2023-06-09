import "./Contact.css"
import { Container, Grid, TextField, Typography, Button } from '@mui/material';

const Contact = () => {
    return (
        <div className="contact-container">
            <Container>
                <Grid container={true} spacing={2} p={10}>
                    <Grid item={true} xs={12}>
                        <Typography variant="h4" component="h1" color={localStorage.getItem("mode") === "dark" ? "white" : "black"} align="center">
                            SEND US MESSAGE
                        </Typography>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField id="outlined-basic" label="Subject" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField id="outlined-basic" label="Message" variant="outlined" fullWidth multiline rows={10} />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Button fullWidth variant="outlined">SEND</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact;