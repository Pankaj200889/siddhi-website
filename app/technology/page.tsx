'use client';

import { Smartphone, Cloud, FileText, CheckCircle, Flame, Factory, Lock, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function TechnologyPage() {
    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen pt-20">
            {/* Header */}
            <div className="relative py-24 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Building <span className="text-gradient">Smart Safety</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Digital tools to streamline inspections, ensure compliance, and provide real-time analytics.
                    </p>
                </div>
            </div>

            {/* Tech Stack Highlights */}
            <div className="py-12 bg-white/5 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center gap-3"><Cloud className="text-primary" /> Cloud Native</div>
                    <div className="flex items-center gap-3"><Lock className="text-secondary" /> Enterprise Security</div>
                    <div className="flex items-center gap-3"><Smartphone className="text-blue-400" /> Mobile First</div>
                    <div className="flex items-center gap-3"><FileText className="text-green-400" /> Auto Reporting</div>
                </div>
            </div>

            {/* Fire Extinguisher App */}
            <section id="fire-app" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative flex justify-center">
                            <div className="relative mx-auto border-gray-800 bg-gray-900 border-[12px] rounded-[2.8rem] h-[580px] w-[290px] shadow-2xl flex flex-col overflow-hidden">
                                <div className="h-[28px] bg-gray-900 rounded-t-[2.5rem] w-full absolute top-0 left-0 z-20"></div>
                                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
                                    <Image
                                        src="/fire_app_mockup.png"
                                        alt="IgnisGuard Officer Portal UI"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-bold uppercase tracking-wider mb-6 border border-red-500/20">
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
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-500/10 text-red-400 font-semibold text-sm hover:bg-red-500/20 transition-all border border-red-500/20 shadow-lg group"
                            >
                                <span>Explore IgnisGuard Demo (demo.siddhiss.com)</span>
                                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Machine Inspection App */}
            <section id="machine-app" className="py-24 bg-white/5 relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold uppercase tracking-wider mb-6 border border-blue-500/20">
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
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-sm hover:bg-blue-500/20 transition-all border border-blue-500/20 shadow-lg group"
                            >
                                <span>Explore EquipGuard Portal (machine.siddhiss.com)</span>
                                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                        <div className="relative">
                            <div className="glass rounded-3xl border border-white/10 p-3 bg-[#0c0d12] shadow-2xl relative overflow-hidden">
                                <div className="flex items-center justify-between pb-3 px-3 border-b border-white/10 mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <span className="text-xs text-gray-400 font-mono">EquipGuard Analytics Console</span>
                                </div>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                    <Image
                                        src="/machine_app_dashboard.png"
                                        alt="EquipGuard Machine Inspection Analytics Console"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
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
