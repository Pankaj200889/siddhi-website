'use client';

import { Target, Eye, Award, Users, ShieldCheck, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { stats } from '@/lib/data';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen pt-20 selection:bg-primary selection:text-black">
            {/* Header */}
            <div className="relative py-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20 pointer-events-none" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />
                <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6 bg-white/5">
                            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                                10+ Years of EHS Excellence & Technical Leadership
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                            About <span className="text-gradient">Siddhi Industrial</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                            We are dedicated to transforming industrial operations across India through advanced safety protocols,
                            digital inspection platforms, and sustainable environmental engineering.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Impact Stats */}
            <section className="py-16 bg-white/5 border-b border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <p className="text-4xl md:text-5xl font-black text-gradient mb-1 tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="text-sm font-bold text-white mb-1">{stat.label}</p>
                                <p className="text-xs text-gray-400 font-light">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-start gap-5 mb-12">
                                <div className="glass p-4 rounded-2xl text-primary mt-1 border-white/10 bg-white/5 shadow-inner flex-shrink-0">
                                    <Target size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
                                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                                        To empower manufacturing facilities and commercial ecosystems with reliable safety frameworks, 
                                        mobile inspection platforms, and sustainable technologies that foster a zero-accident culture and guaranteed regulatory compliance.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="glass p-4 rounded-2xl text-secondary mt-1 border-white/10 bg-white/5 shadow-inner flex-shrink-0">
                                    <Eye size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
                                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                                        To be India’s premier partner for industrial safety innovation, setting benchmark standards in digital EHS auditing, effluent management, and eco-friendly infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Feature Showcase Card (Replacing Raw Image Placeholder) */}
                        <div className="relative">
                            <div className="glass-card p-8 rounded-3xl border border-white/10 bg-black/40 relative overflow-hidden shadow-2xl">
                                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-3">
                                        <Building2 className="text-primary w-6 h-6" />
                                        <span className="font-bold text-white text-lg">Siddhi Industrial Solutions</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                                        ISO 45001:2018
                                    </span>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
                                        <ShieldCheck className="text-secondary w-8 h-8 flex-shrink-0" />
                                        <div>
                                            <p className="font-bold text-white text-sm">Certified Safety Auditors</p>
                                            <p className="text-xs text-gray-400">Deep domain expertise across automotive, chemical, and heavy engineering sectors.</p>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
                                        <Award className="text-emerald-400 w-8 h-8 flex-shrink-0" />
                                        <div>
                                            <p className="font-bold text-white text-sm">Turnkey Environmental Engineering</p>
                                            <p className="text-xs text-gray-400">Custom STP, ETP, and zero-discharge water recycling solutions.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-gray-400">
                                    <span>Noida, Uttar Pradesh, India</span>
                                    <span className="text-primary font-semibold">National Footprint</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-2">Our Guiding Pillars</h2>
                        <h3 className="text-4xl font-extrabold text-white">Core Organizational Values</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Safety First', desc: 'We prioritize human life and well-being above all else, embedding rigorous zero-harm protocols in every solution.', icon: ShieldCheck, color: 'text-primary' },
                            { title: 'Statutory Integrity', desc: 'We maintain absolute transparency and rigor in our safety audits, compliance reviews, and technical reports.', icon: Award, color: 'text-secondary' },
                            { title: 'Customer-Centric Innovation', desc: 'We design custom digital inspection engines and environmental systems tailored to each client’s operational scale.', icon: Users, color: 'text-emerald-400' },
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8 rounded-3xl border-white/10 text-center hover:bg-white/10 transition-all duration-300 group shadow-xl"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-white/5 ${value.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all border border-white/10`}>
                                    <value.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link
                            href="/contact"
                            className="px-9 py-4 bg-gradient-to-r from-primary to-secondary text-black rounded-full font-bold hover:scale-105 transition-transform inline-block shadow-lg"
                        >
                            Partner With Us Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
