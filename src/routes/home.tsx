import Intro from "./components/intro";
import Works from "./components/works";
import Contact from "./components/contact";
import Footer from "./components/footer";
import TableOfContents from "./components/tableofcontent";
import MainBackground from "./components/background";
import About from "./components/about";

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
