import { motion } from "framer-motion";

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
            bounce: 0.2,
            duration: 1,
        },
    },
};

export default function About() {
    return (
        <div id="about">
            <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.9 }}
                variants={HeaderAnimate}
            >
                <h2 className="header-name">About Me</h2>
            </motion.div>
            <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.9}}
                variants={HeaderAnimate}
            >
                <p className="about-me-ptext">
                    I am a first year (1B){" "}
                    <span className="about-me-paragraph">CS + CO-OP</span>{" "}
                    student at the University of Waterloo. I have practical
                    experience developing using JavaScript, TypeScript, C, C++,
                    Java, and Python with frameworks and tools such as React,
                    Node, Next, and MongoDB.
                </p>
                <p className="about-me-ptext">
                    Currently, I am seeking internships for{" "}
                    <span className="about-me-paragraph">Summer 2025</span>.
                </p>
            </motion.div>
        </div>
    );
}
