import { motion } from "framer-motion";
import {
    User,
    Award,
    Coffee,
    Heart,
} from "lucide-react";

const About =
    () => {
        const stats =
            [
                {
                    icon: Coffee,
                    label: "Projects Completed",
                    value: "10+",
                },
                {
                    icon: Award,
                    label: "Years Experience",
                    value: "1.5",
                },
                {
                    icon: User,
                    label: "Happy Clients",
                    value: "10+",
                },
                {
                    icon: Heart,
                    label: "Cups of Coffee",
                    value: "1000+",
                },
            ];

        return (
            <section
                id="about"
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
                                About
                                Me
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                I'm
                                a
                                dedicated
                                developer
                                with
                                a
                                passion
                                for
                                creating
                                innovative
                                solutions
                                and
                                beautiful
                                user
                                experiences.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                }}
                                viewport={{
                                    once: true,
                                }}
                            >
                                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <User
                                                size={
                                                    64
                                                }
                                                className="text-white"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            Ethan
                                            Peters
                                        </h3>
                                        <p className="text-primary-700">
                                            Full
                                            Stack
                                            Developer
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl font-bold text-gray-900">
                                    Passionate
                                    Developer
                                    &
                                    Problem
                                    Solver
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    With
                                    1.5
                                    years
                                    of
                                    experience
                                    in
                                    web
                                    development,
                                    I
                                    specialize
                                    in
                                    creating
                                    modern,
                                    responsive
                                    applications
                                    using
                                    the
                                    latest
                                    technologies.
                                    I'm
                                    passionate
                                    about
                                    clean
                                    code,
                                    user
                                    experience,
                                    and
                                    bringing
                                    ideas
                                    to
                                    life
                                    through
                                    technology.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    When
                                    I'm
                                    not
                                    coding,
                                    you
                                    can
                                    find
                                    me
                                    exploring
                                    new
                                    technologies,
                                    contributing
                                    to
                                    open
                                    source
                                    projects,
                                    or
                                    enjoying
                                    a
                                    good
                                    cup
                                    of
                                    coffee
                                    while
                                    planning
                                    my
                                    next
                                    creative
                                    project.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "JavaScript",
                                        "React",
                                        "Node.js",
                                        "Python",
                                        "TypeScript",
                                    ].map(
                                        (
                                            tech
                                        ) => (
                                            <span
                                                key={
                                                    tech
                                                }
                                                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                                            >
                                                {
                                                    tech
                                                }
                                            </span>
                                        )
                                    )}
                                </div>
                            </motion.div>
                        </div>

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
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
                        >
                            {stats.map(
                                (
                                    stat,
                                    index
                                ) => (
                                    <div
                                        key={
                                            index
                                        }
                                        className="text-center"
                                    >
                                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <stat.icon
                                                size={
                                                    32
                                                }
                                                className="text-primary-600"
                                            />
                                        </div>
                                        <div className="text-3xl font-bold text-gray-900 mb-2">
                                            {
                                                stat.value
                                            }
                                        </div>
                                        <div className="text-gray-600">
                                            {
                                                stat.label
                                            }
                                        </div>
                                    </div>
                                )
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    };

export default About;
