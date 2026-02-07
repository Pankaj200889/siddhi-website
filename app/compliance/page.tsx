'use client';

import Link from 'next/link';
import { ShieldAlert, BookOpen, CheckCircle, FileText, Scale } from 'lucide-react';

export default function CompliancePage() {
    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen pt-20">
            {/* Header */}
            <div className="relative py-24 overflow-hidden border-b border-white/5 text-center px-4">
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                    Regulatory <span className="text-gradient">Compliance</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Navigating the complex landscape of industrial regulations so you don't have to.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Why Compliance Matters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="glass p-8 rounded-2xl border-white/10 hover:bg-white/5 transition-colors">
                        <Scale size={40} className="text-primary mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Legal Liability</h3>
                        <p className="text-gray-400">
                            Failure to comply can lead to severe legal consequences, heavy fines, and even closure of operations.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-2xl border-white/10 hover:bg-white/5 transition-colors">
                        <ShieldAlert size={40} className="text-secondary mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Risk Mitigation</h3>
                        <p className="text-gray-400">
                            Proactive compliance reduces the risk of accidents, ensuring the safety of your workforce and assets.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-2xl border-white/10 hover:bg-white/5 transition-colors">
                        <FileText size={40} className="text-green-400 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Audit Readiness</h3>
                        <p className="text-gray-400">
                            Digital records and standardized processes mean you are always ready for surprise government audits.
                        </p>
                    </div>
                </div>

                {/* Key Regulations */}
                <div className="mb-24">
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">Standards We Cover</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: 'The Factories Act, 1948', desc: 'Comprehensive safety and welfare provisions for factory workers.' },
                            { title: 'National Building Code (NBC) 2016', desc: 'Fire and life safety regulations for industrial buildings.' },
                            { title: 'IS 2190: 2010', desc: 'Selection, installation, and maintenance of fire extinguishers.' },
                            { title: 'ISO 45001:2018', desc: 'Occupational health and safety management systems.' },
                            { title: 'Environment Protection Act', desc: 'Regulations concerning waste management and pollution control.' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5">
                                <BookOpen className="text-gray-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="glass rounded-3xl p-12 text-center border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                    <h2 className="text-3xl font-bold text-white mb-6">Unsure about your compliance status?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Schedule a preliminary consultation with our experts to identify gaps and get a roadmap to 100% compliance.
                    </p>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform inline-block"
                    >
                        Get Free Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
}
