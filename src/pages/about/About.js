import "./About.css"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Paper, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="about-container">
            <Container>
                <Paper style={{ padding: 30 }}>
                    <Typography align="center" variant="h3">
                        ABOUT US
                    </Typography>
                </Paper>

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} align="center">
                            Welcome
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography align="center">
                            Welcome to our movie streaming website! We take pride in being a source of online film content for audiences everywhere. Established with the goal of providing an excellent and convenient entertainment experience, we offer a diverse and extensive film library.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} align="center">
                            our contact information
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography align="center">
                            Email: Phattvse170042@fpt.edu.vn
                        </Typography>
                        <Typography align="center">
                            Name: Trinh Vinh Phat
                        </Typography>
                        <Typography align="center">
                            We are always open to hearing your opinions and suggestions. If you have any questions, feedback, or proposals, please contact us via email or through the contact page. We will make every effort to respond to you as soon as possible.

                            Thank you for using our movie streaming website, and we hope you have an enjoyable and satisfying experience!

                            This is just a simple version, and you can adjust and customize it to fit your specific movie streaming website.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} align="center">What can you do in our app</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography align="center">
                            We always prioritize the customer experience. Our website is designed to be simple and user-friendly, allowing you to easily search for and watch your favorite movies. We also provide additional features such as multi-device viewing and content sharing with friends and family.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} align="center">
                            Our Mission
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Our mission is to provide you with exceptional moments of entertainment through high-quality film content. We are committed to meeting the entertainment needs of everyone by offering a collection of films ranging from the latest releases to timeless classics, encompassing various genres such as action, romance, horror, comedy, and more.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }} align="center">
                            Policy
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Privacy Policy for Movie Website

                            At our movie website, we value and respect the privacy of our users. This privacy policy outlines the information we collect, how we use it, and how we protect your personal data. By using our website, you agree to the terms of this policy.
                        </Typography>
                        <Typography>
                        1. Information Collection:
                        We may collect personal information such as your name, email address, and demographic data when you sign up for an account or interact with our website. We may also gather non-personal information through cookies and similar technologies to enhance your browsing experience.
                        </Typography>
                        <Typography>
                        2. Information Usage:
                        We use the collected information to provide and improve our services. This includes personalizing content, analyzing user preferences, sending relevant notifications, and processing transactions. We may also use aggregated and anonymized data for statistical purposes.
                        </Typography>
                        <Typography>
                        3. Information Sharing:
                        We do not sell, trade, or rent your personal information to third parties without your consent. However, we may share your data with trusted service providers who assist us in delivering our services, subject to strict confidentiality obligations.
                        </Typography>
                        <Typography>
                        4. Data Security:
                        We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                        </Typography>
                        <Typography>
                        5. Third-Party Links:
                        Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                        </Typography>
                        <Typography>
                        6. Children's Privacy:
                        Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected data from a child, we will promptly delete it.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                

                <Button style={{ marginTop: 150 }} variant="contained" onClick={() => navigate("/")} fullWidth>GET STARTED IN OUR APP</Button>

            </Container>
        </div>
    )
}

export default About;