'use client';

import { Target, Eye, Award, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen pt-20">
            {/* Header */}
            <div className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />
                <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                            About <span className="text-gradient">Siddhi Industrial</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We are dedicated to transforming industrial operations through advanced safety protocols,
                            compliance technologies, and sustainable environmental solutions.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-start gap-4 mb-12">
                                <div className="glass p-4 rounded-xl text-primary mt-1 border-white/10 bg-white/5">
                                    <Target size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        To empower industries with reliable safety solutions and digital tools that ensure
                                        zero-harm workplaces while fostering environmental sustainability and regulatory compliance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="glass p-4 rounded-xl text-secondary mt-1 border-white/10 bg-white/5">
                                    <Eye size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        To be the most trusted partner for industrial safety and compliance in India,
                                        recognized for innovation, integrity, and operational excellence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-white/5 relative overflow-hidden glass border-white/10">
                                {/* Placeholder for About Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-2xl">
                                    Team / Office Image
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl border-white/10 bg-[#0f0f0f]/80 max-w-xs hidden md:block">
                                <p className="text-gradient font-bold text-xl mb-1">Expert Consultants</p>
                                <p className="text-gray-500 text-sm">Decades of combined experience in industrial safety.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">Why Choose Us</h2>
                        <h3 className="text-4xl font-bold text-white">Our Core Values</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Safety First', desc: 'We prioritize the safety of human life above all else in every solution we provide.', icon: ShieldCheck },
                            { title: 'Integrity', desc: 'We maintain the highest standards of honesty and transparency in our audits and services.', icon: Award },
                            { title: 'Customer Focus', desc: 'We customize our solutions to meet the specific challenges of each industrial client.', icon: Users },
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8 rounded-2xl border-white/10 text-center hover:bg-white/5 transition-all duration-300 group"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 text-primary rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all border border-white/10">
                                    <value.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                                <p className="text-gray-400">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
