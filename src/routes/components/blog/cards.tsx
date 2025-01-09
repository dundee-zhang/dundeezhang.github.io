import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const viewPost = (article: string): undefined => {
    window.open(`/articles/${article}`, "_self");
};

interface Datas {
    title: string;
    date: string;
    desc: string;
    postName: string;
}

const blogData: [string, string, string, string][] = [
    [
        "Website Updates",
        "January 9, 2025",
        "Looking back at the changes I made to my website in the past years.",
        "website-updates",
    ],
    [
        "CS 146 Tutorial 1 Notes",
        "January 8, 2025",
        "Includes a brief overview of the language Haskell (the language used for the tutorials).",
        "cs146-t1",
    ],
    [
        "CS 146 Lecture 1 Notes",
        "January 7, 2025",
        "Includes a brief overview of the main concept in CS 146.",
        "cs146-l1",
    ],
    [
        "Making a Personal Website",
        "July 4, 2024",
        "For the first time in 3 years, I made a personal website to display my projects and ideas.",
        "making-website-1",
    ],
    [
        "A Year of Online School",
        "October 15, 2021",
        "After a year of doing virtual high school, here are my thoughts...",
        "online-highschool",
    ],
];

function BlogCard({ title, date, desc, postName }: Datas) {
    return (
        <div className="blog-card">
            <Row>
                <Col>
                    <div className="blog-preview">
                        <h1
                            onClick={() => viewPost(postName)}
                            className="blog-preview-title"
                        >
                            {title}
                        </h1>
                        <h2 className="date-published-header">
                            Published on {date}
                        </h2>
                        <p className="blog-preview-desc">{desc}</p>
                        <hr className="card-divider" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

function BlogCardsMap() {
    return blogData.map(([title, date, desc, postName]) => (
        <BlogCard
            title={title}
            date={date}
            desc={desc}
            postName={postName}
            key={null}
        />
    ));
}

export default function BlogCards() {
    return (
        <div>
            <BlogCardsMap />
            <p className="end-of-articles">End of Articles :)</p>
        </div>
    );
}
