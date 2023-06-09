import { AppBar, Button, Switch, Toolbar, useMediaQuery, IconButton, Drawer, Box, Grid } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography"
import "./Navigation.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useTheme } from "@emotion/react";

const Navigation = ({ setMode, mode }) => {

    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.down("md"));

    const [open, isOpen] = useState(false)

    const [checked, isChecked] = useState(localStorage.getItem("mode") === "light" ? false : true);

    const navigagte = useNavigate()

    const handleToggle = () => {
        isChecked(!checked);
        setMode(localStorage.getItem("mode") === "light" ? () => { localStorage.setItem("mode", "dark"); return localStorage.getItem("mode") } : () => { localStorage.setItem("mode", "light"); return localStorage.getItem("mode") })
    }

    return (
        <AppBar position="static" color="primary" className="nav-bar">
            <Toolbar>
                <Typography variant="h5" style={{cursor: "pointer"}} sx={{ flexGrow: 1 }} onClick={() => navigagte("/")}>
                    FILM
                </Typography>
                {
                    isMd ?
                        (
                            <>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={() => { isOpen(true) }}
                                >
                                    <MenuIcon />
                                </IconButton>

                                <Drawer open={open} onClose={() => { isOpen(false) }} anchor="left">
                                    <Box width={"250px"}>
                                        <Grid container spacing={2} p={2}>
                                            <Grid item xs={12}>
                                                <Button variant="contained" fullWidth onClick={() => {isOpen(false)}}><NavLink to={"/"} exact="true" className={"link"}>home</NavLink></Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" fullWidth onClick={() => {isOpen(false)}}><NavLink to={"/contact"} exact="true" className={"link"}>contact</NavLink></Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" fullWidth onClick={() => {isOpen(false)}}><NavLink to={"/about"} exact="true" className={"link"}>about</NavLink></Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" fullWidth onClick={() => {isOpen(false)}}><NavLink to={"/news"} exact="true" className={"link"}>news</NavLink></Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Switch
                                                    checked={checked}
                                                    onClick={handleToggle}
                                                />
                                            </Grid>
                                        </Grid>

                                    </Box>
                                </Drawer>
                            </>
                        )
                        :
                        (
                            <>
                                <Button color="inherit"><NavLink to={"/"} exact="true" className={"link"}>home</NavLink></Button>
                                <Button color="inherit"><NavLink to={"/contact"} exact="true" className={"link"}>contact</NavLink></Button>
                                <Button color="inherit"><NavLink to={"/about"} exact="true" className={"link"}>about</NavLink></Button>
                                <Button color="inherit"><NavLink to={"/news"} exact="true" className={"link"}>news</NavLink></Button>
                                <Switch
                                    checked={checked}
                                    onClick={handleToggle}
                                />
                            </>
                        )
                }




            </Toolbar>
        </AppBar>
    )
}

export default Navigation;