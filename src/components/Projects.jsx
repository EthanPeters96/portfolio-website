import { motion } from "framer-motion";
import {
    ExternalLink,
    Github,
    Eye,
} from "lucide-react";

const Projects =
    () => {
        const projects =
            [
                {
                    id: 1,
                    title: "Titan Clothing",
                    description:
                        "A modern e-commerce platform for clothing and apparel. Features responsive design, product catalog, shopping cart functionality, and secure checkout process.",
                    image: "/titan-logo.svg",
                    technologies:
                        [
                            "React",
                            "Node.js",
                            "MongoDB",
                            "Express.js",
                            "Tailwind CSS",
                        ],
                    githubUrl:
                        "https://github.com/EthanPeters96/Titan-Clothing",
                    liveUrl:
                        "https://titan-clothing-app-9a3af2f08286.herokuapp.com/",
                    featured: true,
                },
                {
                    id: 2,
                    title: "FlavorWave",
                    description:
                        "A dynamic recipe discovery and cooking application that helps users find and create amazing dishes. Features recipe search, meal planning, and cooking tutorials.",
                    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    technologies:
                        [
                            "React",
                            "TypeScript",
                            "Firebase",
                            "Material-UI",
                            "Recipe API",
                        ],
                    githubUrl:
                        "https://github.com/EthanPeters96/flavorwave",
                    liveUrl:
                        "https://ethanpeters96.github.io/FlavorWave/",
                    featured: true,
                },
                {
                    id: 3,
                    title: "FlavorVault",
                    description:
                        "A comprehensive recipe management system where users can store, organize, and share their favorite recipes. Built with data persistence and user authentication.",
                    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    technologies:
                        [
                            "React",
                            "Node.js",
                            "PostgreSQL",
                            "Express.js",
                            "JWT Auth",
                        ],
                    githubUrl:
                        "https://github.com/EthanPeters96",
                    liveUrl:
                        "https://github.com/EthanPeters96",
                    featured: false,
                },
                {
                    id: 4,
                    title: "E-Commerce Testing Suite",
                    description:
                        "A comprehensive testing framework designed specifically for e-commerce applications, featuring automated testing scenarios and performance monitoring.",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    technologies:
                        [
                            "Jest",
                            "Cypress",
                            "JavaScript",
                            "Selenium",
                            "Node.js",
                        ],
                    githubUrl:
                        "https://github.com/EthanPeters96/e-commerce-testing",
                    liveUrl:
                        "https://github.com/EthanPeters96/e-commerce-testing",
                    featured: false,
                },
                {
                    id: 5,
                    title: "Catch The Ball",
                    description:
                        "An interactive browser-based game built with JavaScript. Players catch falling balls to score points, featuring smooth animations and responsive controls.",
                    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    technologies:
                        [
                            "JavaScript",
                            "HTML5 Canvas",
                            "CSS3",
                            "Game Development",
                        ],
                    githubUrl:
                        "https://github.com/EthanPeters96/catchtheball",
                    liveUrl:
                        "https://github.com/EthanPeters96/catchtheball",
                    featured: false,
                },
                {
                    id: 6,
                    title: "Portfolio Website",
                    description:
                        "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
                    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    technologies:
                        [
                            "React",
                            "Tailwind CSS",
                            "Framer Motion",
                            "Vite",
                        ],
                    githubUrl:
                        "https://github.com/EthanPeters96/Portfolio",
                    liveUrl:
                        "https://github.com/EthanPeters96/Portfolio",
                    featured: false,
                },
            ];

        const containerVariants =
            {
                hidden: {
                    opacity: 0,
                },
                visible:
                    {
                        opacity: 1,
                        transition:
                            {
                                staggerChildren: 0.1,
                            },
                    },
            };

        const itemVariants =
            {
                hidden: {
                    opacity: 0,
                    y: 30,
                },
                visible:
                    {
                        opacity: 1,
                        y: 0,
                        transition:
                            {
                                duration: 0.6,
                            },
                    },
            };

        return (
            <section
                id="projects"
                className="py-20 bg-white"
            >
                <div className="section-padding">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Featured
                                Projects
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Here
                                are
                                some
                                of
                                the
                                projects
                                I've
                                worked
                                on
                                that
                                showcase
                                my
                                skills
                                and
                                creativity.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={
                                containerVariants
                            }
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                            }}
                            className="grid lg:grid-cols-2 gap-8 mb-16"
                        >
                            {projects
                                .filter(
                                    (
                                        project
                                    ) =>
                                        project.featured
                                )
                                .map(
                                    (
                                        project
                                    ) => (
                                        <motion.div
                                            key={
                                                project.id
                                            }
                                            variants={
                                                itemVariants
                                            }
                                            className="card group overflow-hidden"
                                        >
                                            <div className="relative overflow-hidden rounded-lg mb-6">
                                                <img
                                                    src={
                                                        project.image
                                                    }
                                                    alt={
                                                        project.title
                                                    }
                                                    className={`w-full h-64 group-hover:scale-110 transition-transform duration-500 ${
                                                        project.title ===
                                                        "Titan Clothing"
                                                            ? "object-contain bg-gray-50 p-4"
                                                            : "object-cover"
                                                    }`}
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                                    <a
                                                        href={
                                                            project.liveUrl
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-100 transition-colors duration-200"
                                                    >
                                                        <ExternalLink
                                                            size={
                                                                20
                                                            }
                                                        />
                                                    </a>
                                                    <a
                                                        href={
                                                            project.githubUrl
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-100 transition-colors duration-200"
                                                    >
                                                        <Github
                                                            size={
                                                                20
                                                            }
                                                        />
                                                    </a>
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                                {
                                                    project.title
                                                }
                                            </h3>

                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {
                                                    project.description
                                                }
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.map(
                                                    (
                                                        tech,
                                                        index
                                                    ) => (
                                                        <span
                                                            key={
                                                                index
                                                            }
                                                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                                                        >
                                                            {
                                                                tech
                                                            }
                                                        </span>
                                                    )
                                                )}
                                            </div>

                                            <div className="flex space-x-4">
                                                <a
                                                    href={
                                                        project.liveUrl
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-primary text-sm"
                                                >
                                                    <Eye
                                                        size={
                                                            16
                                                        }
                                                    />
                                                    Live
                                                    Demo
                                                </a>
                                                <a
                                                    href={
                                                        project.githubUrl
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-secondary text-sm"
                                                >
                                                    <Github
                                                        size={
                                                            16
                                                        }
                                                    />
                                                    View
                                                    Code
                                                </a>
                                            </div>
                                        </motion.div>
                                    )
                                )}
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                Other
                                Projects
                            </h3>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects
                                    .filter(
                                        (
                                            project
                                        ) =>
                                            !project.featured
                                    )
                                    .map(
                                        (
                                            project
                                        ) => (
                                            <motion.div
                                                key={
                                                    project.id
                                                }
                                                whileHover={{
                                                    y: -5,
                                                }}
                                                className="card group"
                                            >
                                                <div className="relative overflow-hidden rounded-lg mb-4">
                                                    <img
                                                        src={
                                                            project.image
                                                        }
                                                        alt={
                                                            project.title
                                                        }
                                                        className={`w-full h-48 group-hover:scale-110 transition-transform duration-500 ${
                                                            project.title ===
                                                            "Titan Clothing"
                                                                ? "object-contain bg-gray-50 p-3"
                                                                : "object-cover"
                                                        }`}
                                                    />
                                                </div>

                                                <h4 className="text-xl font-bold text-gray-900 mb-2">
                                                    {
                                                        project.title
                                                    }
                                                </h4>

                                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                    {project
                                                        .description
                                                        .length >
                                                    100
                                                        ? `${project.description.substring(
                                                              0,
                                                              100
                                                          )}...`
                                                        : project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-1 mb-4">
                                                    {project.technologies
                                                        .slice(
                                                            0,
                                                            3
                                                        )
                                                        .map(
                                                            (
                                                                tech,
                                                                index
                                                            ) => (
                                                                <span
                                                                    key={
                                                                        index
                                                                    }
                                                                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                                                                >
                                                                    {
                                                                        tech
                                                                    }
                                                                </span>
                                                            )
                                                        )}
                                                    {project
                                                        .technologies
                                                        .length >
                                                        3 && (
                                                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                                                            +
                                                            {project
                                                                .technologies
                                                                .length -
                                                                3}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex space-x-3">
                                                    <a
                                                        href={
                                                            project.liveUrl
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                                                    >
                                                        <ExternalLink
                                                            size={
                                                                18
                                                            }
                                                        />
                                                    </a>
                                                    <a
                                                        href={
                                                            project.githubUrl
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-600 hover:text-gray-700 transition-colors duration-200"
                                                    >
                                                        <Github
                                                            size={
                                                                18
                                                            }
                                                        />
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )
                                    )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    };

export default Projects;
