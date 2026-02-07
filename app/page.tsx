'use client';

import Link from 'next/link';
import { services } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

        {/* Abstract Background Design */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-[pulse_10s_infinite]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-[pulse_15s_infinite]" />
          <div className="absolute top-[30%] left-[30%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px] animate-[pulse_12s_infinite]" />
        </div>

        {/* Diagonal Mesh Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 hover:bg-white/5 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">ISO Certified 45001:2018</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
              <span className="block text-white">Industrial Safety</span>
              <span className="block text-gradient">Reimagined.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Empowering the next generation of factories with digital compliance, AI-driven inspections, and sustainable solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,140,97,0.5)] flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-4 glass rounded-full font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 flex items-center justify-center"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Abstract Elements (Optional Decoration) */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] w-24 h-24 glass rounded-2xl hidden lg:flex items-center justify-center -rotate-12 border-white/10"
        >
          <div className="text-4xl">🛡️</div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-[10%] w-20 h-20 glass rounded-full hidden lg:flex items-center justify-center rotate-12 border-white/10"
        >
          <div className="text-3xl">🌱</div>
        </motion.div>

      </section>

      {/* Services Grid Section */}
      <section className="py-32 relative bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Comprehensive <br /> <span className="text-gray-500">Industrial Solutions</span>
              </h3>
            </div>
            <p className="text-gray-400 text-lg max-w-md">
              From equipping your workforce with safety knowledge to digitizing inspections and managing waste – we cover it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to transform your <br /> industrial compliance?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Partner with industry experts at Siddhi Industrial Solutions for your safety, auditing, and sustainability needs.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  return (
    <Link href={service.link} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group glass-card p-10 rounded-3xl h-full flex flex-col justify-between hover:bg-white/5 transition-all duration-500"
      >
        <div>
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-secondary group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
            <service.icon size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            {service.description}
          </p>
        </div>

        <div className="pt-8 flex items-center text-sm font-bold text-white/50 group-hover:text-white transition-colors">
          <span className="mr-2">Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </Link>
  );
}
