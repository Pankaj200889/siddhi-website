import { ShieldCheck, Factory, Leaf, Droplets, Flame, Smartphone } from 'lucide-react';

export const services = [
    {
        id: 'training',
        title: 'Safety & Industrial Trainings',
        description: 'Comprehensive safety trainings aligned with Indian industrial standards. We offer EHS programs for workforce and supervisors, covering fire safety, workplace safety, and compliance.',
        icon: ShieldCheck,
        link: '/solutions#training'
    },
    {
        id: 'fire-app',
        title: 'Fire Extinguisher Inspection App',
        description: 'Cloud-based mobile application for QR-code enabled real-time fire extinguisher inspection. Generates audit-ready compliance reports.',
        icon: Flame,
        link: '/technology#fire-app'
    },
    {
        id: 'machine-app',
        title: 'Machine Inspection App',
        description: 'Digital machine inspection and monitoring solution. Track inspection status, output, and preventative maintenance via a central dashboard.',
        icon: Factory,
        link: '/technology#machine-app'
    },
    {
        id: 'waterless',
        title: 'Waterless Urinal Solution',
        description: 'Eco-friendly, odour-free, and low-maintenance waterless urinal systems ideal for industrial and commercial facilities.',
        icon: Droplets, // Using Droplets as a proxy for water-related
        link: '/solutions#waterless'
    },
    {
        id: 'stp-etp',
        title: 'Sewage & Effluent Treatment',
        description: 'End-to-end STP & ETP solutions designed for regulatory environmental compliance. From design to implementation and support.',
        icon: Factory,
        link: '/solutions#stp-etp'
    },
    {
        id: 'compostable',
        title: 'Compostable & Plastic Reduction',
        description: 'Sustainable compostable bag solutions to support plastic reduction initiatives and environmental regulations.',
        icon: Leaf,
        link: '/solutions#compostable'
    }
];

export const stats = [
    { label: 'Combined Industry Experience', value: '10+ Years' },
    { label: 'Safety Audits Led by Team', value: '500+' },
    { label: 'Consulting Projects', value: '50+' },
    { label: 'Products Delivered', value: '1000+' },
];
