'use client';

import { Smartphone, Cloud, FileText, CheckCircle, Flame, Factory, Lock, ExternalLink, QrCode, Check, X, BarChart3, Activity } from 'lucide-react';
import Image from 'next/image';

export default function TechnologyPage() {
    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen pt-20 selection:bg-primary selection:text-black">
            {/* Header */}
            <div className="relative py-24 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Building <span className="text-gradient">Smart Safety</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                        Digital inspection engines, mobile QR lock platforms, and real-time operational analytics for modern industrial plants.
                    </p>
                </div>
            </div>

            {/* Tech Stack Highlights */}
            <div className="py-12 bg-white/5 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500 text-sm font-semibold">
                    <div className="flex items-center gap-3"><Cloud className="text-primary" /> Cloud Native Infrastructure</div>
                    <div className="flex items-center gap-3"><Lock className="text-secondary" /> Enterprise Security & Encryption</div>
                    <div className="flex items-center gap-3"><Smartphone className="text-blue-400" /> Mobile-First Audits</div>
                    <div className="flex items-center gap-3"><FileText className="text-emerald-400" /> Automated Compliance Reports</div>
                </div>
            </div>

            {/* IgnisGuard App Showcase */}
            <section id="fire-app" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* High-Impact Interactive IgnisGuard UI Frame */}
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border border-red-500/20 bg-[#12131a] p-6 shadow-2xl">
                                {/* Header Bar */}
                                <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-red-500/20 text-red-500 flex items-center justify-center">
                                            <Flame size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white tracking-wide">FIRE GUARD PRO</p>
                                            <p className="text-xs text-gray-400">PHYSICAL INSPECTIONS</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                        SYSTEM ACTIVE
                                    </span>
                                </div>

                                {/* Extinguisher Inspection List items */}
                                <div className="space-y-3 mb-6">
                                    <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/30 flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold text-white">ID: EXT-A104</span>
                                                <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded">PASS</span>
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1">Location: Main Hallway Ground Floor</p>
                                        </div>
                                        <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                                            <Check size={16} />
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border border-red-500/40 flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold text-white">ID: EXT-B201</span>
                                                <span className="text-xs text-red-400 font-bold bg-red-500/10 px-2.5 py-0.5 rounded">NEEDS SERVICE</span>
                                            </div>
                                            <p className="text-xs text-red-300 mt-1">Location: Boiler Room (Low Pressure)</p>
                                        </div>
                                        <div className="w-7 h-7 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                                            <X size={16} />
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/30 flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold text-white">ID: EXT-C302</span>
                                                <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded">PASS</span>
                                            </div>
                                            <p className="text-xs text-gray-400 mt-1">Location: Server Room 3rd Floor</p>
                                        </div>
                                        <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                                            <Check size={16} />
                                        </div>
                                    </div>
                                </div>

                                {/* QR Scan Trigger Action Button */}
                                <div className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-xl font-bold text-white text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-red-500/25">
                                    <QrCode size={18} />
                                    <span>Scan Physical QR Tag</span>
                                </div>
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-[140px]" />
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-bold uppercase tracking-wider mb-6 border border-red-500/20">
                                <Flame size={16} /> IgnisGuard
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">IgnisGuard - Fire Extinguisher Inspection App</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                                A revolutionary way to manage fire safety. Our cloud-based mobile platform uses physical QR verification to ensure inspections are performed at the location on time with our unique "48-hour lock" feature.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <FeatureItem title="QR Code Scan" desc="Ensures physical presence at the extinguisher location." />
                                <FeatureItem title="Cloud Storage" desc="Secure, unlimited history of all compliance data." />
                                <FeatureItem title="Auto Reports" desc="Generates PDF reports instantly for audits." />
                                <FeatureItem title="48-Hour Lock" desc="Prevents bulk-filling; forces scheduled periodic checks." />
                            </div>

                            <a 
                                href="https://demo.siddhiss.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-red-500/10 text-red-400 font-semibold text-sm hover:bg-red-500/20 transition-all border border-red-500/20 shadow-lg group"
                            >
                                <span>Explore IgnisGuard Demo (demo.siddhiss.com)</span>
                                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* EquipGuard App Showcase */}
            <section id="machine-app" className="py-24 bg-white/5 relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold uppercase tracking-wider mb-6 border border-blue-500/20">
                                <Factory size={16} /> EquipGuard
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">EquipGuard - Machine Inspection App</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                                Prevent downtime and ensure operator safety with digitized checklists. Track machine health, shift performance matrix, scheduled maintenance, and output logs in one enterprise dashboard.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-4 text-gray-300">
                                    <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20"><CheckCircle size={16} /></span>
                                    Deep Dive Operational Analytics & Shift Distribution
                                </li>
                                <li className="flex items-center gap-4 text-gray-300">
                                    <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20"><CheckCircle size={16} /></span>
                                    Machine Efficiency Heatmap & Quality Yield Rate
                                </li>
                                <li className="flex items-center gap-4 text-gray-300">
                                    <span className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20"><CheckCircle size={16} /></span>
                                    Instant PDF Weekly Report Generator
                                </li>
                            </ul>

                            <a 
                                href="https://machine.siddhiss.com/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-sm hover:bg-blue-500/20 transition-all border border-blue-500/20 shadow-lg group"
                            >
                                <span>Explore EquipGuard Portal (machine.siddhiss.com)</span>
                                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>

                        {/* High-Impact Interactive EquipGuard UI Frame */}
                        <div className="relative">
                            <div className="relative mx-auto rounded-3xl overflow-hidden border border-blue-500/20 bg-[#0c0d14] p-6 shadow-2xl">
                                {/* Console Bar */}
                                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                                            <BarChart3 size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white tracking-wide">EquipGuard Analytics Console</p>
                                            <p className="text-xs text-gray-400">OPERATIONAL SHIFT MATRIX</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-blue-400 font-mono bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20 flex items-center gap-1.5">
                                        <Activity size={14} /> LIVE ANALYTICS
                                    </span>
                                </div>

                                {/* Metrics Cards */}
                                <div className="grid grid-cols-2 gap-4 mb-5">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="text-xs text-gray-400 uppercase tracking-wider">Overall Yield</p>
                                        <div className="flex items-baseline justify-between mt-2">
                                            <span className="text-2xl font-black text-white">97.3%</span>
                                            <span className="text-xs text-emerald-400 font-bold">+2.4% vs Target</span>
                                        </div>
                                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mt-3">
                                            <div className="bg-blue-500 h-full rounded-full w-[97.3%]" />
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <p className="text-xs text-gray-400 uppercase tracking-wider">Quality Rate</p>
                                        <div className="flex items-baseline justify-between mt-2">
                                            <span className="text-2xl font-black text-white">97.5%</span>
                                            <span className="text-xs text-emerald-400 font-bold">Stable Target</span>
                                        </div>
                                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mt-3">
                                            <div className="bg-emerald-400 h-full rounded-full w-[97.5%]" />
                                        </div>
                                    </div>
                                </div>

                                {/* Machine Heatmap */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-5">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Machine Efficiency Heatmap (&gt;85% Efficiency)</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                                        <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                                            M-201 (Welder)
                                        </div>
                                        <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                                            M-102 (Bender)
                                        </div>
                                        <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                                            M-305 (Assembly)
                                        </div>
                                        <div className="p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-xs font-bold text-emerald-300">
                                            M-101 (Laser)
                                        </div>
                                    </div>
                                </div>

                                {/* Trigger Action */}
                                <div className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-white text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
                                    <FileText size={18} />
                                    <span>Generate Weekly PDF Audit Report</span>
                                </div>
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[140px]" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="glass p-5 rounded-xl border-white/5 hover:bg-white/5 transition-colors">
            <h4 className="font-bold text-white mb-2">{title}</h4>
            <p className="text-sm text-gray-400">{desc}</p>
        </div>
    );
}
