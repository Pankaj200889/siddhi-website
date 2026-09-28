'use client';

import { services } from '@/lib/data';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SolutionsPage() {
    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen pt-20 selection:bg-primary selection:text-black">
            {/* Header */}
            <div className="relative py-28 overflow-hidden border-b border-white/5">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-primary/15 via-secondary/15 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6 bg-white/5">
                            <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                                End-to-End EHS & Sustainability Portfolio
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                            Industrial <span className="text-gradient">Solutions</span> & Compliance
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                            Empowering industrial enterprises across India with tailored safety management systems, 
                            zero-waste environmental solutions, and digital EHS governance.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Solutions Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="space-y-32">
                    {services.map((sol, idx) => (
                        <motion.div 
                            key={sol.id} 
                            id={sol.id} 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Content Side */}
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-6 flex-wrap">
                                    <div className={`w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center ${sol.color} bg-white/5 shadow-inner`}>
                                        <sol.icon size={32} />
                                    </div>
                                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${sol.badgeColor}`}>
                                        {sol.badge}
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                                    {sol.title}
                                </h2>
                                <p className="text-secondary text-sm font-semibold mb-6 tracking-wide">
                                    {sol.subtitle}
                                </p>

                                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                                    {sol.description}
                                </p>

                                {/* Features List */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    {sol.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3 glass p-4 rounded-xl border-white/5 hover:bg-white/5 transition-colors">
                                            <CheckCircle2 className={`w-5 h-5 ${sol.color} flex-shrink-0 mt-0.5`} />
                                            <span className="text-sm font-medium text-gray-300 leading-snug">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-black rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_30px_-10px_rgba(255,140,97,0.4)] flex items-center gap-2 group"
                                    >
                                        <span>Request Proposal</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/compliance"
                                        className="px-6 py-4 glass rounded-full text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
                                    >
                                        View Standards Covered
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Card Side */}
                            <div className="flex-1 relative w-full group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${sol.gradient} rounded-3xl blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700`} />
                                
                                <div className="glass-card p-8 rounded-3xl border border-white/10 relative z-10 overflow-hidden bg-black/40 shadow-2xl">
                                    {/* Visual Card Header */}
                                    <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                        </div>
                                        <span className="text-xs text-gray-500 font-mono">SOLUTION ENGINE v2.4</span>
                                    </div>

                                    {/* Dynamic Card Content Visual */}
                                    <div className="space-y-4">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <ShieldCheck className={`w-6 h-6 ${sol.color}`} />
                                                <div>
                                                    <p className="text-xs text-gray-400">Compliance Status</p>
                                                    <p className="text-sm font-bold text-white">100% Verified & Audit Ready</p>
                                                </div>
                                            </div>
                                            <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400 font-semibold border border-green-500/30">
                                                ACTIVE
                                            </span>
                                        </div>

                                        <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="flex justify-between text-xs text-gray-400 mb-2">
                                                <span>Operational Efficiency</span>
                                                <span className="text-white font-bold">98.4%</span>
                                            </div>
                                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                                <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full w-[98.4%]" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 pt-2">
                                            <div className="p-3 rounded-lg bg-white/5 text-center border border-white/5">
                                                <p className="text-xs text-gray-500 mb-1">Standard</p>
                                                <p className="text-xs font-bold text-gray-200">National & ISO</p>
                                            </div>
                                            <div className="p-3 rounded-lg bg-white/5 text-center border border-white/5">
                                                <p className="text-xs text-gray-500 mb-1">Deployment</p>
                                                <p className="text-xs font-bold text-gray-200">Turnkey Support</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                                        <span>Siddhi Industrial Solutions</span>
                                        <span className="text-secondary font-semibold">Enterprise Grade</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-white/5 to-transparent border-t border-white/5 mt-16">
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">
                        Need a Customized Industrial Proposal?
                    </h2>
                    <p className="text-gray-400 mb-10 text-xl max-w-2xl mx-auto font-light">
                        Our expert consultants perform site evaluations and tailor complete EHS roadmap packages for your plant.
                    </p>
                    <Link
                        href="/contact"
                        className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-black rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block shadow-[0_0_40px_-10px_rgba(255,140,97,0.5)]"
                    >
                        Schedule Free EHS Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
