import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Giscus from "@giscus/react";
import MainBackground from "./home/background";
import Footer from "./footer";

const homeClick = () => {
    window.open("/", "_self");
};

const blogClick = () => {
    window.open("/blog", "_self");
};

const projectsClick = () => {
    window.open("/#projects", "_self");
};

const contactClick = () => {
    window.open("/#contactform", "_self");
};

const MarkdownTest = () => {
    const { filename } = useParams();
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        fetch(`/articles/${filename}.md`)
            .then((response) => response.text())
            .then((text) => setMarkdownContent(text));
    }, [filename]);

    return (
        <div>
            <MainBackground />
            <div>
                <div className="blog-header">
                    <div className="title-div">
                        <h1 className="blog-title">/blog</h1>
                        <h2 className="blog-subtitle">Life Updates</h2>
                    </div>
                </div>
                <div className="navbar-wrapper">
                    <div className="navbar">
                        <button
                            type="button"
                            onClick={homeClick}
                            className="open-article-button"
                        >
                            Portfolio
                        </button>
                        <button
                            type="button"
                            onClick={blogClick}
                            className="open-article-button"
                        >
                            Articles
                        </button>
                        <button
                            type="button"
                            onClick={projectsClick}
                            className="open-article-button"
                        >
                            Projects
                        </button>
                        <button
                            type="button"
                            onClick={contactClick}
                            className="open-article-button"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
            <div className="article-content">
                <button
                    type="button"
                    onClick={blogClick}
                    className="back-button"
                >
                    Back
                </button>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
                <p className="end-of-article-marker">End of Article</p>
                <button
                    type="button"
                    onClick={blogClick}
                    className="back-button"
                >
                    Back
                </button>
            </div>
            <div className="comment-section">
                <Giscus
                    id="comments"
                    repo="dundeezhang/giscus"
                    repoId="R_kgDONnvt2g"
                    category="General"
                    categoryId="DIC_kwDONnvt2s4Cl3B9"
                    mapping="pathname"
                    term="Welcome to @giscus/react component!"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="bottom"
                    theme="preferred_color_scheme"
                    lang="en"
                    loading="lazy"
                />
            </div>

            <Footer />
        </div>
    );
};

export default MarkdownTest;
