'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#050505] text-gray-400 border-t border-white/5 font-light pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Company Info */}
                    <div>
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Siddhi<span className="text-gradient">Industrial</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 max-w-xs">
                            Trusted partner for industrial safety, EHS compliance, and sustainable solutions. Delivering technology-driven inspections and eco-friendly products for a safer tomorrow.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="#" icon={<Linkedin size={18} />} />
                            <SocialLink href="#" icon={<Twitter size={18} />} />
                            <SocialLink href="#" icon={<Facebook size={18} />} />
                            <SocialLink href="#" icon={<Instagram size={18} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/about" label="About Us" />
                            <FooterLink href="/solutions" label="Solutions" />
                            <FooterLink href="/technology" label="Technology" />
                            <FooterLink href="/compliance" label="Compliance" />
                            <FooterLink href="/contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Our Solutions</h3>
                        <ul className="space-y-3 text-sm">
                            <FooterLink href="/solutions#training" label="Safety Trainings" />
                            <FooterLink href="/technology#fire-app" label="Fire Extinguisher App" />
                            <FooterLink href="/technology#machine-app" label="Machine Inspection App" />
                            <FooterLink href="/solutions#waterless" label="Waterless Urinals" />
                            <FooterLink href="/solutions#stp-etp" label="STP & ETP Solutions" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                <span>123 Industrial Area, Phase 1,<br />New Delhi, India - 110020</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary flex-shrink-0" />
                                <a href="mailto:info@siddhiindustrial.com" className="hover:text-white transition-colors">info@siddhiindustrial.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Siddhi Industrial Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300"
        >
            {icon}
        </Link>
    );
}

function FooterLink({ href, label }: { href: string, label: string }) {
    return (
        <li>
            <Link href={href} className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                {label}
            </Link>
        </li>
    );
}
