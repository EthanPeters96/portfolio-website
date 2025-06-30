import {
    useState,
    useEffect,
} from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const [
        isLoading,
        setIsLoading,
    ] =
        useState(
            true
        );

    useEffect(() => {
        // Simulate loading time
        const timer =
            setTimeout(
                () => {
                    setIsLoading(
                        false
                    );
                },
                1000
            );

        return () =>
            clearTimeout(
                timer
            );
    }, []);

    if (
        isLoading
    ) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">
                        Loading...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
