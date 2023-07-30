import { useDispatch, useSelector } from "react-redux";
import { json, useParams } from "react-router-dom";
import { getAllFilms } from "../../redux/selectors/selectors";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { v4 } from "uuid"
import { useNavigate } from "react-router-dom";
import { editFilm } from "../../redux/reducers/FilmSlice";
import * as Yup from "yup";
import { useFormik } from "formik"
import "./Edit.scss"

const Edit = () => {

    const { id } = useParams();

    const initialValues = {
        id: "",
        image: "",
        title: "",
        year: "",
        nation: "",
        video: "",
        description: ""
    };

    const validationSchema = Yup.object().shape({
        image: Yup.string().required("image is required"),
        title: Yup.string().required("title is required"),
        year: Yup.string().required("year is required"),
        nation: Yup.string().required("nation is required"),
        video: Yup.string().required("video is required"),
        description: Yup.string().required("description is required")
    });

    const handleEditFilm = (id) => {
        dispatch(editFilm(formik.values));
    }

    const handlePutFilm = async (id) => {
        await axios.put("https://6475906fe607ba4797dc0b16.mockapi.io/api/products/" + id, formik.values).then((id) => {
            handleEditFilm(id);
        });
    }

    const handleSubmit = async () => {
        await handlePutFilm(formik.values.id);
        navigate("/film-managerment");
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit
    })

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://6475906fe607ba4797dc0b16.mockapi.io/api/products/" + id)
            .then((res) => {
                // console.log(res)
                formik.setFieldValue("id", res.data.id);
                formik.setFieldValue("image", res.data.image);
                formik.setFieldValue("title", res.data.title);
                formik.setFieldValue("year", res.data.year);
                formik.setFieldValue("nation", res.data.nation);
                formik.setFieldValue("video", res.data.video);
                formik.setFieldValue("description", res.data.description);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const navigate = useNavigate();



    return (
        <div className="add-container">
            <Container>
                <Typography variant="h4" textAlign={"center"} style={{ marginBottom: 20, marginTop: 20 }} className={localStorage.getItem("mode") === "dark" ? "dark" : "light"} >EDIT FILM</Typography>
                <Box
                    display={"grid"}
                    gap={"30px"}
                >
                    <TextField fullWidth variant="outlined" name="image" label={"Image"} type="text" value={formik.values.image} onChange={formik.handleChange} error={formik.touched.image && formik.errors.image} helperText={formik.touched.image && formik.errors.image} />
                    <TextField fullWidth variant="outlined" name="title" label={"Title"} type="text" value={formik.values.title} onChange={formik.handleChange} error={formik.touched.title && formik.errors.title} helperText={formik.touched.title && formik.errors.title} />
                    <TextField fullWidth variant="outlined" name="year" label={"Year"} type="text" value={formik.values.year} onChange={formik.handleChange} error={formik.touched.year && formik.errors.year} helperText={formik.touched.year && formik.errors.year} />
                    <TextField fullWidth variant="outlined" name="nation" label={"Nation"} type="text" value={formik.values.nation} onChange={formik.handleChange} error={formik.touched.nation && formik.errors.nation} helperText={formik.touched.nation && formik.errors.nation} />
                    <TextField fullWidth variant="outlined" name="video" label={"Video"} type="text" value={formik.values.video} onChange={formik.handleChange} error={formik.touched.video && formik.errors.video} helperText={formik.touched.video && formik.errors.video} />
                    <TextField fullWidth variant="outlined" name="description" label={"Description"} type="text" value={formik.values.description} onChange={formik.handleChange} error={formik.touched.description && formik.errors.description} helperText={formik.touched.description && formik.errors.description} />
                    <Button variant="contained" onClick={formik.handleSubmit}>Edit</Button>
                </Box>
            </Container>
        </div >
    )
}

export default Edit;