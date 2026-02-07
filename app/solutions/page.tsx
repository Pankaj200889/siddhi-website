'use client';

import { ShieldCheck, Leaf, Factory, Droplets } from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
    const solutions = [
        {
            id: 'training',
            title: 'Safety & Industrial Trainings',
            description: 'Our comprehensive training modules are designed to equip your workforce with the knowledge and skills to operate safely. We cover a wide range of topics, from basic fire safety to advanced hazard identification.',
            features: ['Fire Fighting & First Aid', 'Workplace Safety (Height, Confined Space)', 'Electrical Safety', 'Behavioral Based Safety (BBS)'],
            icon: ShieldCheck,
            color: 'text-primary'
        },
        {
            id: 'waterless',
            title: 'Waterless Urinal Solution',
            description: 'Innovative washroom solutions that reduce water consumption to zero for urinals. Our technology eliminates odours and reduces maintenance costs significantly.',
            features: ['100% Water Saving', 'Odour-Free Technology', 'Low Maintenance', 'Hygienic & Touch-free'],
            icon: Droplets,
            color: 'text-blue-400'
        },
        {
            id: 'stp-etp',
            title: 'Sewage & Effluent Treatment',
            description: 'Custom-designed treatment plants (STP & ETP) that ensure your industrial discharge meets all environmental regulations. We handle everything from design to installation and AMC.',
            features: ['Regulatory Compliance', 'Custom Capacity Design', 'Water Recycling', 'Operational Support'],
            icon: Factory,
            color: 'text-orange-400'
        },
        {
            id: 'compostable',
            title: 'Compostable & Plastic Reduction',
            description: 'Help your business move away from single-use plastics with our range of certified compostable bags and packaging solutions.',
            features: ['Certified Compostable', 'Eco-friendly Materials', 'Custom Sizes', 'Plastic Ban Compliant'],
            icon: Leaf,
            color: 'text-green-400'
        }
    ];

    return (
        <div className="bg-[#0f0f0f] text-white min-h-screen pt-20">
            {/* Header */}
            <div className="relative py-24 overflow-hidden border-b border-white/5">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Our <span className="text-gradient">Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Innovative, sustainable, and compliant solutions tailored for modern industries.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="space-y-32">
                    {solutions.map((sol, idx) => (
                        <div key={sol.id} id={sol.id} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1">
                                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl glass mb-8 ${sol.color} bg-white/5 border-white/10`}>
                                    <sol.icon size={40} />
                                </div>
                                <h2 className="text-4xl font-bold text-white mb-6">{sol.title}</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    {sol.description}
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {sol.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-gray-300">
                                            <span className={`w-2 h-2 rounded-full ${sol.color.replace('text-', 'bg-')}`}></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                                >
                                    Get Quote
                                </Link>
                            </div>
                            <div className="flex-1 relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="aspect-video bg-white/5 rounded-3xl glass border-white/10 flex items-center justify-center relative z-10 overflow-hidden">
                                    <div className="text-white/20 font-bold text-2xl">
                                        {sol.title} Image
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden bg-white/5 mt-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need a customized solution?</h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Contact our experts to discuss your specific requirements and get a tailored proposal.
                    </p>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-black rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
}
