import "./Contact.css"
import { Container, Grid, TextField, Typography, Button } from '@mui/material';
import * as Yup from "yup";
import { useFormik } from "formik"

const Contact = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email is not valid").required("email is required"),
        subject: Yup.string().required("Subject is required"),
        message: Yup.string().required("Message is required")
    });

    const initialValues = {
        email: '',
        subject: '',
        message: ''
    };

    const handleSubmit = () => {

    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit
    })

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
                        <TextField id="outlined-basic" name="email" label="Email" variant="outlined" fullWidth value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && formik.errors.email} helperText={formik.touched.email && formik.errors.email} />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField id="outlined-basic" name="subject" label="Subject" variant="outlined" fullWidth value={formik.values.subject} onChange={formik.handleChange} error={formik.touched.subject && formik.errors.subject} helperText={formik.touched.subject && formik.errors.subject} />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <TextField id="outlined-basic" name="message" label="Message" variant="outlined" fullWidth multiline rows={10} value={formik.values.message} onChange={formik.handleChange} error={formik.touched.message && formik.errors.message} helperText={formik.touched.message && formik.errors.message} />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Button fullWidth variant="outlined" onClick={formik.handleSubmit}>SEND</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact;