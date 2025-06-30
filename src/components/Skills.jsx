import { motion } from "framer-motion";
import {
    Code,
    Database,
    Palette,
    Globe,
    Smartphone,
    Zap,
} from "lucide-react";

const Skills =
    () => {
        const skillCategories =
            [
                {
                    icon: Code,
                    title: "Frontend Development",
                    skills: [
                        "JavaScript",
                        "TypeScript",
                        "HTML5",
                        "CSS3",
                        "Tailwind CSS",
                    ],
                    color: "from-blue-500 to-blue-600",
                },
                {
                    icon: Database,
                    title: "Backend Development",
                    skills: [
                        "Node.js",
                        "Python",
                    ],
                    color: "from-green-500 to-green-600",
                },
                {
                    icon: Globe,
                    title: "Web Technologies",
                    skills: [
                        "React Router",
                        "Vite",
                        "PWA",
                    ],
                    color: "from-purple-500 to-purple-600",
                },
                {
                    icon: Database,
                    title: "Databases",
                    skills: [
                        "MongoDB",
                        "PostgreSQL",
                        "MySQL",
                    ],
                    color: "from-orange-500 to-orange-600",
                },
                {
                    icon: Palette,
                    title: "Design & UI/UX",
                    skills: [
                        "Figma",
                        "Responsive Design",
                        "Material-UI",
                    ],
                    color: "from-pink-500 to-pink-600",
                },
                {
                    icon: Zap,
                    title: "Tools & Others",
                    skills: [
                        "Git",
                        "Docker",
                        "AWS",
                        "VS Code",
                        "Cursor",
                        "Jest",
                    ],
                    color: "from-indigo-500 to-indigo-600",
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
                    y: 20,
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
                id="skills"
                className="py-20 bg-gray-50"
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
                                Skills
                                &
                                Expertise
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                I
                                work
                                with
                                a
                                diverse
                                set
                                of
                                technologies
                                to
                                build
                                amazing
                                digital
                                experiences.
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
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {skillCategories.map(
                                (
                                    category,
                                    index
                                ) => (
                                    <motion.div
                                        key={
                                            index
                                        }
                                        variants={
                                            itemVariants
                                        }
                                        className="card group hover:scale-105 transition-transform duration-300"
                                    >
                                        <div
                                            className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <category.icon
                                                size={
                                                    32
                                                }
                                                className="text-white"
                                            />
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                                            {
                                                category.title
                                            }
                                        </h3>

                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map(
                                                (
                                                    skill,
                                                    skillIndex
                                                ) => (
                                                    <span
                                                        key={
                                                            skillIndex
                                                        }
                                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                                                    >
                                                        {
                                                            skill
                                                        }
                                                    </span>
                                                )
                                            )}
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
                                delay: 0.3,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className="mt-16 text-center"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Always
                                    Learning
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    I'm
                                    constantly
                                    exploring
                                    new
                                    technologies
                                    and
                                    improving
                                    my
                                    skills
                                    to
                                    stay
                                    current
                                    with
                                    industry
                                    trends.
                                </p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {[
                                        "AI/ML",
                                        "Blockchain",
                                        "WebAssembly",
                                        "Rust",
                                        "Go",
                                        "Kubernetes",
                                    ].map(
                                        (
                                            tech
                                        ) => (
                                            <span
                                                key={
                                                    tech
                                                }
                                                className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-sm font-medium"
                                            >
                                                {
                                                    tech
                                                }
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    };

export default Skills;
