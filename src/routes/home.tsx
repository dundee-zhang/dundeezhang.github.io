import Intro from "./components/home/intro";
import Works from "./components/home/works";
import Contact from "./components/home/contact";
import Footer from "./components/footer";
import TableOfContents from "./components/home/tableofcontent";
import MainBackground from "./components/background";
import About from "./components/home/about";

export default function Home() {
    return (
        <div>
            <MainBackground />
            <TableOfContents />
            <Intro />
            <About />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
}
