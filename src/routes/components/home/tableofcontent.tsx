import { motion } from "framer-motion";

export default function TableOfContents() {
    const resumeClick = () => {
        window.open("/resume.pdf", "_blank");
    };

    return (
        <div className="table-of-content-wrapper">
            <li>
                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: 1.0,
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
                        delay: 1.2,
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
                        delay: 1.4,
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
                        delay: 1.6,
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
                        delay: 1.8,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <ul className="table-of-content">
                        <a
                            rel="noreferrer"
                            className="table-of-content-text"
                            href="#blog"
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
                        delay: 2.0,
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
