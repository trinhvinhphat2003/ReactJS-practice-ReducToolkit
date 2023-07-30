import { Container, Grid, Typography } from '@mui/material';
import "./Footer.css"

const Footer = () => {
    return (
        <div className={"footer-" + localStorage.getItem("mode")} id='footer'>
            Phattvse170042@fpt.edu.vn
        </div>
    )
}

export default Footer;