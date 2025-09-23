import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/projects/ProjectDetails";
import Navbar from "./components/Navbar";
import Squares from "./components/Squares";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle(
      "dark",
      initial === "dark"
    );
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Squares BG */}
      <div className="fixed inset-0 -z-10">
        <Squares
          speed={0.27}
          squareSize={40}
          direction="diagonal"
          borderColor={theme === "dark" ? "#212121" : "#DEDEDE"}
          hoverFillColor={theme === "dark" ? "#222222" : "#DEDEDE"}
          theme={theme}
        />
      </div>

      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/*  Main content that grows */}
        <main className="flex-grow pt-8 pb-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        {/* Footer pinned at the bottom */}
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
