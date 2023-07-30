import { AppBar, Button, Switch, Toolbar, useMediaQuery, IconButton, Drawer, Box, Grid, Avatar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography"
import "./Navigation.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/isLogginnedSlice";

const Navigation = ({ setMode, mode }) => {

    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.down("sm"));

    const [open, isOpen] = useState(false)

    const [checked, isChecked] = useState(localStorage.getItem("mode") === "light" ? false : true);

    const navigagte = useNavigate()

    const handleToggle = () => {
        isChecked(!checked);
        setMode(localStorage.getItem("mode") === "light" ? () => { localStorage.setItem("mode", "dark"); return localStorage.getItem("mode") } : () => { localStorage.setItem("mode", "light"); return localStorage.getItem("mode") })
    }

    const navigation = useNavigate()

    const dispatch = useDispatch()

    return (
        <AppBar position="static" color="primary" className="nav-bar">
            <Toolbar>
                <Typography variant="h5" style={{ cursor: "pointer" }} sx={{ flexGrow: 1 }} onClick={() => navigagte("/")}>
                    DASHBOARD
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
                                                <Button variant="contained" fullWidth><NavLink to={"/film-managerment"} exact="true" className={"link"}>films managerment</NavLink></Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Switch
                                                    checked={checked}
                                                    onClick={handleToggle}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" fullWidth onClick={() => { localStorage.removeItem("user"); dispatch(logout()); }}><NavLink to={"/"} exact="true" className={"link"}>Log out</NavLink></Button>
                                            </Grid>
                                        </Grid>

                                    </Box>
                                </Drawer>
                            </>
                        )
                        :
                        (
                            <>
                                <Button color="inherit"><NavLink to={"/film-managerment"} exact="true" className={"link"}>films managerment</NavLink></Button>
                                <Switch
                                    checked={checked}
                                    onClick={handleToggle}
                                />
                                {localStorage.getItem('user') !== null ? <Avatar alt="Cindy Baker" src={JSON.parse(localStorage.getItem('user')).picture} /> : <Button color="inherit"><NavLink to={"/login"} exact="true" className={"link"}>login</NavLink></Button>}
                                <Button color="inherit" onClick={() => { localStorage.removeItem("user"); dispatch(logout()); navigagte("/") }}>log out</Button>
                            </>
                        )
                }




            </Toolbar>
        </AppBar>
    )
}

export default Navigation;