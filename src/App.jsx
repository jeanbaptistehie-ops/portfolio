
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage.jsx";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
import Cv from "./components/Cv.jsx";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <HomePage />
            <About />
            <Projects />
            <Cv />
            <Contact />
            <Footer />
        </div>
    );
}
