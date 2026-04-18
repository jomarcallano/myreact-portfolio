import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Layout/Navbar.jsx";
import Contact from "../components/Contact.jsx";
import Experience from "../components/Experience";



export default function MyApp() {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </>
    )
}