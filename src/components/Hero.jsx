import { motion } from "framer-motion";
import {
    ArrowDown,
    Github,
    Linkedin,
    Mail,
} from "lucide-react";

const Hero =
    () => {
        const scrollToAbout =
            () => {
                const aboutSection =
                    document.querySelector(
                        "#about"
                    );
                if (
                    aboutSection
                ) {
                    aboutSection.scrollIntoView(
                        {
                            behavior:
                                "smooth",
                        }
                    );
                }
            };

        return (
            <section
                id="home"
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20"
            >
                <div className="section-padding w-full">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                                Hi,
                                I'm{" "}
                                <span className="text-primary-600">
                                    Ethan
                                </span>
                            </h1>

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2,
                                }}
                                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
                            >
                                A
                                passionate
                                developer
                                creating
                                beautiful,
                                functional,
                                and
                                user-centered
                                digital
                                experiences.
                            </motion.p>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.4,
                                }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                            >
                                <a
                                    href="mailto:ethanjackpeters@hotmail.com"
                                    className="btn-primary"
                                >
                                    <Mail
                                        size={
                                            20
                                        }
                                    />
                                    Get
                                    In
                                    Touch
                                </a>
                                <a
                                    href="https://github.com/EthanPeters96"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                >
                                    <Github
                                        size={
                                            20
                                        }
                                    />
                                    View
                                    My
                                    Work
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.6,
                                }}
                                className="flex items-center justify-center space-x-6 mb-16"
                            >
                                <a
                                    href="https://github.com/EthanPeters96"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                                >
                                    <Github
                                        size={
                                            24
                                        }
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ethan-peters-a227332b8/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                                >
                                    <Linkedin
                                        size={
                                            24
                                        }
                                    />
                                </a>
                                <a
                                    href="mailto:ethanjackpeters@hotmail.com"
                                    className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                                >
                                    <Mail
                                        size={
                                            24
                                        }
                                    />
                                </a>
                            </motion.div>

                            <motion.button
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.8,
                                }}
                                onClick={
                                    scrollToAbout
                                }
                                className="text-gray-500 hover:text-primary-600 transition-colors duration-200 animate-bounce"
                            >
                                <ArrowDown
                                    size={
                                        32
                                    }
                                />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    };

export default Hero;
