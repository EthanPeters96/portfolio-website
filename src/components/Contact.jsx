import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    Twitter,
} from "lucide-react";

const Contact =
    () => {
        const [
            formData,
            setFormData,
        ] =
            useState(
                {
                    name: "",
                    email: "",
                    subject:
                        "",
                    message:
                        "",
                }
            );

        const [
            isSubmitting,
            setIsSubmitting,
        ] =
            useState(
                false
            );
        const [
            submitStatus,
            setSubmitStatus,
        ] =
            useState(
                null
            );

        const handleChange =
            (
                e
            ) => {
                setFormData(
                    {
                        ...formData,
                        [e
                            .target
                            .name]:
                            e
                                .target
                                .value,
                    }
                );
            };

        const handleSubmit =
            async (
                e
            ) => {
                e.preventDefault();
                setIsSubmitting(
                    true
                );

                // Simulate form submission
                setTimeout(
                    () => {
                        setIsSubmitting(
                            false
                        );
                        setSubmitStatus(
                            "success"
                        );
                        setFormData(
                            {
                                name: "",
                                email: "",
                                subject:
                                    "",
                                message:
                                    "",
                            }
                        );

                        // Reset status after 3 seconds
                        setTimeout(
                            () =>
                                setSubmitStatus(
                                    null
                                ),
                            3000
                        );
                    },
                    1500
                );
            };

        const contactInfo =
            [
                {
                    icon: Mail,
                    label: "Email",
                    value: "ethanjackpeters@hotmail.com",
                    href: "mailto:ethanjackpeters@hotmail.com",
                },
                {
                    icon: Phone,
                    label: "Phone",
                    value: "+44 7760 433 250",
                    href: "tel:+447760433250",
                },
                {
                    icon: MapPin,
                    label: "Location",
                    value: "Brighton, UK",
                    href: null,
                },
            ];

        const socialLinks =
            [
                {
                    icon: Github,
                    label: "GitHub",
                    href: "https://github.com/EthanPeters96",
                    color: "hover:text-gray-900",
                },
                {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/ethan-peters-a227332b8/",
                    color: "hover:text-blue-600",
                },
            ];

        return (
            <section
                id="contact"
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
                                Let's
                                Work
                                Together
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                I'm
                                always
                                interested
                                in
                                new
                                opportunities
                                and
                                exciting
                                projects.
                                Let's
                                discuss
                                how
                                we
                                can
                                bring
                                your
                                ideas
                                to
                                life.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Information */}
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
                                className="space-y-8"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        Get
                                        in
                                        Touch
                                    </h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        Feel
                                        free
                                        to
                                        reach
                                        out
                                        for
                                        collaborations,
                                        job
                                        opportunities,
                                        or
                                        just
                                        to
                                        say
                                        hello.
                                        I'll
                                        do
                                        my
                                        best
                                        to
                                        get
                                        back
                                        to
                                        you
                                        within
                                        24
                                        hours.
                                    </p>

                                    <div className="space-y-6">
                                        {contactInfo.map(
                                            (
                                                info,
                                                index
                                            ) => (
                                                <div
                                                    key={
                                                        index
                                                    }
                                                    className="flex items-center space-x-4"
                                                >
                                                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                                        <info.icon
                                                            size={
                                                                24
                                                            }
                                                            className="text-primary-600"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm text-gray-500 uppercase tracking-wide">
                                                            {
                                                                info.label
                                                            }
                                                        </div>
                                                        {info.href ? (
                                                            <a
                                                                href={
                                                                    info.href
                                                                }
                                                                className="text-gray-900 font-medium hover:text-primary-600 transition-colors duration-200"
                                                            >
                                                                {
                                                                    info.value
                                                                }
                                                            </a>
                                                        ) : (
                                                            <div className="text-gray-900 font-medium">
                                                                {
                                                                    info.value
                                                                }
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    <div className="pt-8">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                            Follow
                                            Me
                                        </h4>
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
                                                        className={`w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 transition-all duration-200 hover:shadow-lg hover:scale-105 ${social.color}`}
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
                                </div>
                            </motion.div>

                            {/* Contact Form */}
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
                            >
                                <div className="bg-white rounded-2xl shadow-lg p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        Send
                                        a
                                        Message
                                    </h3>

                                    {submitStatus ===
                                        "success" && (
                                        <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg">
                                            <p className="text-green-800">
                                                Thank
                                                you
                                                for
                                                your
                                                message!
                                                I'll
                                                get
                                                back
                                                to
                                                you
                                                soon.
                                            </p>
                                        </div>
                                    )}

                                    <form
                                        onSubmit={
                                            handleSubmit
                                        }
                                        className="space-y-6"
                                    >
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    Name
                                                    *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={
                                                        formData.name
                                                    }
                                                    onChange={
                                                        handleChange
                                                    }
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                                                    placeholder="Your name"
                                                />
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    Email
                                                    *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={
                                                        formData.email
                                                    }
                                                    onChange={
                                                        handleChange
                                                    }
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                                                    placeholder="your.email@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Subject
                                                *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={
                                                    formData.subject
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                                                placeholder="What's this about?"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Message
                                                *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={
                                                    formData.message
                                                }
                                                onChange={
                                                    handleChange
                                                }
                                                required
                                                rows={
                                                    5
                                                }
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                                                placeholder="Tell me about your project or just say hello!"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={
                                                isSubmitting
                                            }
                                            className={`w-full btn-primary justify-center ${
                                                isSubmitting
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : ""
                                            }`}
                                        >
                                            {isSubmitting ? (
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            ) : (
                                                <Send
                                                    size={
                                                        20
                                                    }
                                                />
                                            )}
                                            {isSubmitting
                                                ? "Sending..."
                                                : "Send Message"}
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

export default Contact;
