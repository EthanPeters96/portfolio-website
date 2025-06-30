import {
    Heart,
    Github,
    Linkedin,
    Mail,
    ArrowUp,
} from "lucide-react";

const Footer =
    () => {
        const currentYear =
            new Date().getFullYear();

        const scrollToTop =
            () => {
                window.scrollTo(
                    {
                        top: 0,
                        behavior:
                            "smooth",
                    }
                );
            };

        const quickLinks =
            [
                {
                    name: "Home",
                    href: "#home",
                },
                {
                    name: "About",
                    href: "#about",
                },
                {
                    name: "Skills",
                    href: "#skills",
                },
                {
                    name: "Projects",
                    href: "#projects",
                },
                {
                    name: "Contact",
                    href: "#contact",
                },
            ];

        const socialLinks =
            [
                {
                    icon: Github,
                    href: "https://github.com/EthanPeters96",
                    label: "GitHub",
                },
                {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/ethan-peters-a227332b8/",
                    label: "LinkedIn",
                },
                {
                    icon: Mail,
                    href: "mailto:ethanjackpeters@hotmail.com",
                    label: "Email",
                },
            ];

        const scrollToSection =
            (
                href
            ) => {
                const element =
                    document.querySelector(
                        href
                    );
                if (
                    element
                ) {
                    element.scrollIntoView(
                        {
                            behavior:
                                "smooth",
                        }
                    );
                }
            };

        return (
            <footer className="bg-gray-900 text-white">
                <div className="section-padding py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {/* Brand & Description */}
                            <div className="space-y-4">
                                <div className="text-2xl font-bold">
                                    <span className="text-primary-400">
                                        E
                                    </span>
                                    than
                                    Peters
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    Full
                                    Stack
                                    Developer
                                    passionate
                                    about
                                    creating
                                    innovative
                                    solutions
                                    and
                                    beautiful
                                    user
                                    experiences.
                                </p>
                                <div className="flex space-x-4">
                                    {socialLinks.map(
                                        (
                                            social,
                                            index
                                        ) => (
                                            <a
                                                key={
                                                    index
                                                }
                                                href={
                                                    social.href
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                                                aria-label={
                                                    social.label
                                                }
                                            >
                                                <social.icon
                                                    size={
                                                        20
                                                    }
                                                />
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold mb-4">
                                    Quick
                                    Links
                                </h3>
                                <div className="space-y-2">
                                    {quickLinks.map(
                                        (
                                            link,
                                            index
                                        ) => (
                                            <button
                                                key={
                                                    index
                                                }
                                                onClick={() =>
                                                    scrollToSection(
                                                        link.href
                                                    )
                                                }
                                                className="block text-gray-400 hover:text-white transition-colors duration-200"
                                            >
                                                {
                                                    link.name
                                                }
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold mb-4">
                                    Get
                                    In
                                    Touch
                                </h3>
                                <div className="space-y-3">
                                    <a
                                        href="mailto:ethanjackpeters@hotmail.com"
                                        className="block text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        ethanjackpeters@hotmail.com
                                    </a>
                                    <div className="text-gray-400">
                                        Brighton,
                                        UK
                                    </div>
                                    <div className="text-gray-400">
                                        Available
                                        for
                                        freelance
                                        work
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                            <div className="text-gray-400 text-sm mb-4 md:mb-0">
                                ©{" "}
                                {
                                    currentYear
                                }{" "}
                                Ethan
                                Peters.
                                Made
                                with{" "}
                                <Heart
                                    size={
                                        16
                                    }
                                    className="inline text-red-500 mx-1"
                                />{" "}
                                using
                                React
                                &
                                Tailwind
                                CSS
                            </div>

                            <button
                                onClick={
                                    scrollToTop
                                }
                                className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <span className="text-sm">
                                    Back
                                    to
                                    top
                                </span>
                                <div className="w-8 h-8 bg-gray-800 group-hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-200">
                                    <ArrowUp
                                        size={
                                            16
                                        }
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };

export default Footer;
