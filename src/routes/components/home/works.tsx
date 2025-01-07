import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { motion } from "framer-motion";
import { useState } from "react";

import WorkCards from "./projectcards";

const HeaderAnimate = {
    offscreen: {
        y: 20,
        opacity: 0,
        scale: 0.9,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.5,
        },
    },
};

function Works() {
    const [open, setOpen] = useState(true);
    const [buttonText, setButtonText] = useState('Hide');
    const toggle = () => {
        setButtonText(buttonText === 'Hide' ? 'Show' : 'Hide');
        setOpen(!open);
    };
    return (
        <div className="Body" id="projects">
            <body className="App-content">
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 0.9 }}
                    variants={HeaderAnimate}
                >
                    <h2 className="header-name" onClick={toggle}>
                        My Projects:
                    </h2>
                    <button
                            type="button"
                            onClick={toggle}
                            className="hide-button"
                            id="toggle-button"
                        >
                            {buttonText}
                        </button>
                </motion.div>
                {open && (
                    <Container fluid>
                        <Row className="card-container-works">
                            <WorkCards />
                        </Row>
                    </Container>
                )}
            </body>
        </div>
    );
}
export default Works;
