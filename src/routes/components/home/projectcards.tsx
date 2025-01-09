import { motion, Variants } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";

import "/src/routes/components/css/works.css";

const viewProject = (repo: string): undefined => {
    window.open(`https://github.com/dundeezhang/${repo}`, "_blank");
};

const openLink = (link: string): undefined => {
    window.open(link, "_blank");
};

const CardDiv: Variants = {
    offscreen: {
        y: 10,
        opacity: 0.1,
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

interface Datas {
    title: string;
    langs: string;
    desc: string;
    pic: string;
    repository: string;
    buttontext: string;
    hideclass: string;
    externallink: string;
}

const worksData: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
][] = [
    [
        "dundeezhang.com",
        "TypeScript, React, CSS",
        "An introduction website to show my projects and experience.",
        "website.png",
        "dundeezhang.github.io",
        "Github Repository",
        "",
        "https://dundeezhang.com",
    ],
    [
        "dundeezhang.com/blog",
        "TypeScript, React, Markdown",
        "My personal blog. Contains notes and articles I've written.",
        "blog.png",
        "dundeezhang.github.io",
        "Github Repository",
        "",
        "https://dundeezhang.com/blog",
    ],
    [
        "NHSCSC Website",
        "TypeScript, React, CSS",
        "Website for NHS CS Club. Shows events and announcements.",
        "nhscsc.png",
        "website-nhscc",
        "Github Repository",
        "",
        "https://nhscc.vercel.app/",
    ],
    [
        "Contest Solutions",
        "C++, Java, Python",
        "Repository to store most of my solutions for CS problems.",
        "compcode.png",
        "Contests",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "ReadMe",
        "JavaScript, Markdown, React",
        "View markdown files in a more readable format online.",
        "readmd.png",
        "readmd",
        "Github Repository",
        "",
        "https://readmd.dhz.app/",
    ],
    [
        "datingdo.singles",
        "Bootstrap, HTML, CSS",
        "Grade 10 business final project written under time constraints.",
        "datingdo.png",
        "datingdo.single",
        "Github Repository",
        "",
        "https://dundeezhang.github.io/datingdo.single/",
    ],
    [
        "dzPass",
        "C++, Makefile, OOP",
        "An CLI password and user manager tool written in C++ only.",
        "dzpass.png",
        "dzPass",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "Better-Calculator",
        "C++, C, Cmake, Makefile",
        "A CLI calculator tool I made to help me do homework.",
        "bettercalc.png",
        "Better-Calculator",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "dundeezhangv1",
        "HTML, CSS",
        "My first version of this website. Made only with html/css.",
        "dundeezhangv1.png",
        "dundeezhangv1",
        "Github Repository",
        "",
        "https://dundeezhang.github.io/dundeezhangv1/",
    ],
    [
        "Submarine Intercept Sim",
        "Java, Java-Swing, OOP",
        "World War II Battleship (Haida) versus submarine simulator",
        "haida.jpg",
        "Submarine-Intercept-Simulator",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "More Projects",
        "More Languages",
        "More projects are on my GitHub profile where I keep more of my works. Check it out!",
        "future.jpg",
        "",
        "Github Profile",
        "hide-button-class",
        "",
    ],
];

function WorksCard({
    title,
    langs,
    desc,
    pic,
    repository,
    buttontext,
    hideclass,
    externallink,
}: Datas) {
    return (
        <Col>
            <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.5 }}
                variants={CardDiv}
            >
                <Card className="project-cards">
                    <Card.Img
                        variant="top"
                        src={`/works/${pic}`}
                        className="project-images"
                    />
                    <Card.Body className="ibm-plex-mono-light">
                        <Card.Title className="project-title">
                            {title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 tools-used">
                            {langs}
                        </Card.Subtitle>
                        <Card.Text className="about-project-desc">
                            {desc}
                        </Card.Text>
                        <button
                            type="button"
                            onClick={() => viewProject(repository)}
                            className="github-button"
                        >
                            <i className="fa-brands fa-github github-button-icon"></i>
                            {buttontext}
                        </button>
                        <button
                            type="button"
                            onClick={() => openLink(externallink)}
                            className={hideclass}
                            id="external-link-button"
                        >
                            <i className="fa fa-external-link"></i>
                        </button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
    );
}

export default function WorkCards() {
    return worksData.map(
        ([
            title,
            langs,
            desc,
            pic,
            repository,
            buttontext,
            hideclass,
            externallink,
        ]) => (
            <WorksCard
                title={title}
                langs={langs}
                desc={desc}
                pic={pic}
                repository={repository}
                buttontext={buttontext}
                hideclass={hideclass}
                externallink={externallink}
                key={null}
            />
        )
    );
}
