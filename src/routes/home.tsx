import Intro from "./components/home/intro";
import Works from "./components/home/works";
import BlogComp from "./components/home/blogcomp";
import Contact from "./components/home/contact";
import Footer from "./components/footer";
import TableOfContents from "./components/home/tableofcontent";
import MainBackground from "./components/home/background";

export default function Home() {
    return (
        <div>
            <MainBackground />
            <TableOfContents />
            <Intro />
            <Works />
            <BlogComp />
            <Contact />
            <Footer />
        </div>
    );
}
