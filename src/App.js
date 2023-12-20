// src/App.js
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
    return (
        <main>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}
