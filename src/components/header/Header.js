import "./Header.css"
import { Switch, AppBar, Toolbar, Typography } from "@mui/material"
import { useState } from "react";
import { NavLink } from "react-router-dom"
import Navigation from "../navigation/Navigation";
const Header = ({setMode, mode}) => {


    return (
        <div className="header">
            <Navigation setMode={setMode} mode={mode}/>
        </div>
    )
}

export default Header;