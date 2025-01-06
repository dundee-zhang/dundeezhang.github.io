import { motion } from "framer-motion";

export default function TableOfContents() {
    const resumeClick = () => {
        window.open("/resume.pdf", "_blank");
    };

    return (
        <div className="table-of-content-wrapper">
            <div className="mobile-nav">
                <div className="center-list">
                    <a href="#intro">Top</a>
                    <a onClick={resumeClick}>Resume</a>
                    <a href="#projects">Projects</a>
                    <a href="#contactform">Contact</a>
                </div>
            </div>
            <li className="navlist">
                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <ul className="table-of-content">Go To:</ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.6,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <ul className="table-of-content">
                        <a
                            rel="noreferrer"
                            className="table-of-content-text"
                            href="#intro"
                        >
                            Top
                        </a>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <ul className="table-of-content">
                        <a
                            onClick={resumeClick}
                            className="table-of-content-text"
                        >
                            Resume
                        </a>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.8,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <ul className="table-of-content">
                        <a
                            rel="noreferrer"
                            className="table-of-content-text"
                            href="#about"
                        >
                            About Me
                        </a>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <ul className="table-of-content">
                        <a
                            rel="noreferrer"
                            className="table-of-content-text"
                            href="#projects"
                        >
                            Projects
                        </a>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: 1.0,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <ul className="table-of-content">
                        <a
                            rel="noreferrer"
                            className="table-of-content-text"
                            href="/blog"
                        >
                            Blog
                        </a>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: 1.1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <ul className="table-of-content">
                        <a
                            rel="noreferrer"
                            className="table-of-content-text"
                            href="#contactform"
                        >
                            Contact
                        </a>
                    </ul>
                </motion.div>
            </li>
        </div>
    );
}
