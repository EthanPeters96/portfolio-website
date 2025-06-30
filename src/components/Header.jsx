import {
    useState,
    useEffect,
} from "react";
import {
    Menu,
    X,
} from "lucide-react";

const Header =
    () => {
        const [
            isMenuOpen,
            setIsMenuOpen,
        ] =
            useState(
                false
            );
        const [
            isScrolled,
            setIsScrolled,
        ] =
            useState(
                false
            );

        useEffect(() => {
            const handleScroll =
                () => {
                    setIsScrolled(
                        window.scrollY >
                            50
                    );
                };

            window.addEventListener(
                "scroll",
                handleScroll
            );
            return () =>
                window.removeEventListener(
                    "scroll",
                    handleScroll
                );
        }, []);

        const navItems =
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
                setIsMenuOpen(
                    false
                );
            };

        return (
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/95 backdrop-blur-sm shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <nav className="section-padding py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="text-2xl font-bold text-gray-900">
                            <span className="text-primary-600">
                                E
                            </span>
                            than
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map(
                                (
                                    item
                                ) => (
                                    <button
                                        key={
                                            item.name
                                        }
                                        onClick={() =>
                                            scrollToSection(
                                                item.href
                                            )
                                        }
                                        className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                                    >
                                        {
                                            item.name
                                        }
                                    </button>
                                )
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() =>
                                setIsMenuOpen(
                                    !isMenuOpen
                                )
                            }
                            className="md:hidden text-gray-700 hover:text-primary-600"
                        >
                            {isMenuOpen ? (
                                <X
                                    size={
                                        24
                                    }
                                />
                            ) : (
                                <Menu
                                    size={
                                        24
                                    }
                                />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                            <div className="flex flex-col space-y-4 pt-4">
                                {navItems.map(
                                    (
                                        item
                                    ) => (
                                        <button
                                            key={
                                                item.name
                                            }
                                            onClick={() =>
                                                scrollToSection(
                                                    item.href
                                                )
                                            }
                                            className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 text-left"
                                        >
                                            {
                                                item.name
                                            }
                                        </button>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        );
    };

export default Header;
