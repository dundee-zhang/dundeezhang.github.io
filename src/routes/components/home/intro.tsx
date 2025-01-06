import pfp from "/src/img/specimenB.jpeg";
import { motion } from "framer-motion";

const resumeClick = () => {
    window.open("/resume.pdf", "_blank");
};

export default function Intro() {
    return (
        <div id="intro">
            <header className="App-header">
            <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div className="profile-picture">
                        <img src={pfp} className="App-logo" alt="profile" />
                    </div>
                </motion.div>
                <div className="dundee-container">
                    <h1 className="dundee-name"><span>Hello! I'm Dundee.</span></h1>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <p className="website-intro-top">
                        Welcome to my website! I'm a software developer studying{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="csText"
                            href="https://uwaterloo.ca/future-students/programs/computer-science"
                        >
                            <span>CS</span>
                        </a>{" "}
                        @{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="schoolText"
                            href="https://uwaterloo.ca"
                        >
                            <span>University of Waterloo</span>
                        </a>.
                    </p>
                </motion.div>

                <ul className="social-cons">
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.7,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            <a
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/dundeezhang/"
                                target="_blank"
                            >
                                <div className="circle-div">
                                    <i className="fa-brands fa-linkedin-in intro-icons"></i>
                                </div>
                            </a>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: 0.9,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            <a
                                rel="noreferrer"
                                href="https://github.com/dundeezhang"
                                target="_blank"
                            >
                                <div className="circle-div">
                                    <i className="fa-brands fa-github intro-icons"></i>
                                </div>
                            </a>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: 1.1,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            <a
                                rel="noreferrer"
                                href="mailto:contact@dundeezhang.com"
                                target="_blank"
                            >
                                <div className="circle-div">
                                    <i className="fa-regular fa-envelope intro-icons"></i>
                                </div>
                            </a>
                        </motion.div>
                    </li>
                </ul>
                <motion.div
                    initial={{ opacity: 0, scale: 1.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 1.3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div>
                        <button
                            type="button"
                            onClick={resumeClick}
                            className="resume-button"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                            Resume
                        </button>
                    </div>
                </motion.div>
            </header>
        </div>
    );
}
