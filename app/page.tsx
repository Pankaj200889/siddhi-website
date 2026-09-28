'use client';

import Link from 'next/link';
import Image from 'next/image';
import { services, stats, industrySectors } from '@/lib/data';
import { ArrowRight, ShieldCheck, CheckCircle2, Flame, Factory, Lock, Award, Sparkles, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-black bg-[#0f0f0f] text-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">

        {/* Abstract Glow Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[55%] h-[55%] bg-primary/20 rounded-full blur-[130px] animate-[pulse_10s_infinite]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-secondary/20 rounded-full blur-[130px] animate-[pulse_15s_infinite]" />
          <div className="absolute top-[35%] left-[30%] w-[35%] h-[35%] bg-emerald-500/10 rounded-full blur-[110px] animate-[pulse_12s_infinite]" />
        </div>

        {/* Diagonal Mesh Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 hover:bg-white/5 transition-colors cursor-default">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-gray-300 tracking-wider uppercase">
                ISO Certified 45001:2018 | EHS & Compliance Experts
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.08]">
              <span className="block text-white">Industrial Safety</span>
              <span className="block text-gradient">Reimagined.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl leading-relaxed font-light">
              Empowering factories & plant facilities across India with mobile inspection technology, 
              statutory EHS compliance, and sustainable environmental solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group relative px-9 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,140,97,0.6)] flex items-center justify-center gap-2 overflow-hidden shadow-xl"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-4 glass rounded-full font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 flex items-center justify-center border border-white/10"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Glass Floating Badges */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[8%] glass p-4 rounded-2xl hidden xl:flex items-center gap-3 border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <ShieldCheck size={24} />
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-400">Compliance Target</p>
            <p className="text-sm font-bold text-white">Zero Accident Culture</p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-[8%] glass p-4 rounded-2xl hidden xl:flex items-center gap-3 border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
            <Smartphone size={24} />
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-400">Mobile Inspections</p>
            <p className="text-sm font-bold text-white">48-Hour QR Lock Tech</p>
          </div>
        </motion.div>
      </section>

      {/* Impact Statistics Bar */}
      <section className="py-12 bg-white/5 border-y border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <p className="text-4xl md:text-5xl font-black text-gradient mb-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-white mb-1">{stat.label}</p>
                <p className="text-xs text-gray-400 font-light hidden sm:block">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 relative bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-white/5 pb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles size={14} /> Core Capabilities
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                Comprehensive <br /> <span className="text-gradient">Industrial Solutions</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-md font-light leading-relaxed">
              From workforce safety training and statutory compliance audits to digital mobile inspection platforms and eco-waste management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Technology Showcase Banner */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-black/60 via-white/5 to-black/60 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Smartphone size={16} /> Digital Inspection Suite
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              Flagship Safety Applications
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Eliminate paper logs with QR-verified mobile audits, instant PDF report generation, and real-time machine health monitoring dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Fire App Showcase Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 bg-black/40">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/20 flex items-center gap-1.5">
                  <Flame size={14} /> IgnisGuard
                </span>
                <span className="text-xs text-gray-400 font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5">48-HOUR LOCK TECH</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">IgnisGuard - Fire Extinguisher Inspection App</h3>
              <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
                Prevents remote bulk-filling by forcing physical QR scans at extinguisher locations. Automatically locks out periodic checks to ensure audit compliance.
              </p>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-black/80 to-black/40 flex items-center justify-center p-2 shadow-2xl">
                <div className="relative w-full max-w-[220px] rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="/fire_app_mockup.png" 
                    alt="IgnisGuard Officer Portal UI"
                    width={220}
                    height={400}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t border-white/10">
                <span className="text-xs text-gray-400">Officer Portal & Physical QR Scan</span>
                <Link href="/technology" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                  Learn Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Machine App Showcase Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-secondary/40 transition-all duration-500 bg-black/40">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                  <Factory size={14} /> EquipGuard
                </span>
                <span className="text-xs text-gray-400 font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5">REAL-TIME DASHBOARD</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">EquipGuard - Machine Inspection App</h3>
              <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">
                Track plant equipment status, preventive maintenance schedules, operator checklists, and photo-proof defect logs from a centralized dashboard.
              </p>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0c0d12] flex flex-col p-2 shadow-2xl">
                <div className="flex items-center justify-between pb-2 px-2 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">Deep Dive Analytics Dashboard</span>
                </div>
                <div className="relative rounded-lg overflow-hidden mt-2">
                  <Image 
                    src="/machine_app_dashboard.png" 
                    alt="EquipGuard Machine Inspection Analytics Dashboard"
                    width={600}
                    height={380}
                    className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t border-white/10">
                <span className="text-xs text-gray-400">Deep Dive Operational Analytics</span>
                <Link href="/technology" className="text-xs font-bold text-secondary hover:underline flex items-center gap-1">
                  Learn Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Sectors Banner */}
      <section className="py-24 bg-black/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-secondary uppercase mb-3">Sectors We Empower</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Trusted Across Industries</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industrySectors.map((sector, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border-white/5 text-center hover:bg-white/10 transition-colors flex flex-col items-center justify-center gap-3 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <sector.icon size={24} />
                </div>
                <p className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors">{sector.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-secondary/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tight">
            Ready to Elevate Your <br /> Industrial Safety & Compliance?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Partner with industry experts at Siddhi Industrial Solutions for zero-harm workplace standards, digital mobile audits, and eco-friendly infrastructure.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-gradient-to-r from-primary via-secondary to-orange-400 text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_50px_-10px_rgba(255,140,97,0.5)]"
            >
              Request a Customized Proposal
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
        className="group glass-card p-8 rounded-3xl h-full flex flex-col justify-between hover:bg-white/5 transition-all duration-500 border border-white/10 hover:border-white/20 shadow-xl"
      >
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${service.color} group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300`}>
              <service.icon size={28} />
            </div>
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${service.badgeColor}`}>
              {service.badge}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-secondary text-xs font-semibold mb-4 tracking-wide">
            {service.subtitle}
          </p>
          <p className="text-gray-400 leading-relaxed text-sm font-light mb-6">
            {service.description}
          </p>
        </div>

        <div>
          <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
            {service.features.slice(0, 2).map((feat: string, fIdx: number) => (
              <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 size={14} className={service.color} />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center text-xs font-bold text-white/50 group-hover:text-white transition-colors pt-2">
            <span className="mr-2">Explore Solution</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
