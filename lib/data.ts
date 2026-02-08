import { ShieldCheck, Factory, Leaf, Droplets, Flame, Smartphone, GraduationCap, Recycle, FlaskConical, Database } from 'lucide-react';

export const services = [
    {
        id: 'ems',
        title: 'Environmental Management Systems (EMS)',
        description: 'Comprehensive emissions tracking, sustainability reporting, and resource optimization strategies for a greener future.',
        icon: Leaf,
        link: '/solutions#ems'
    },
    {
        id: 'sms',
        title: 'Safety Management Systems (SMS)',
        description: 'Hazard identification, risk assessment, and behavioral safety programs to foster a zero-accident culture.',
        icon: ShieldCheck,
        link: '/solutions#sms'
    },
    {
        id: 'training',
        title: 'EHS Training & Competence Management',
        description: 'Role-based training programs, contractor certification, and automated refresher scheduling to ensure workforce competence.',
        icon: GraduationCap, // Will need to import this
        link: '/solutions#training'
    },
    {
        id: 'waste-management',
        title: 'Waste Management Solutions',
        description: 'End-to-end waste tracking, inclusive of Sewage Treatment (STP) and Effluent Treatment (ETP) for total environmental compliance.',
        icon: Recycle, // Will need to import this
        link: '/solutions#waste-management'
    },
    {
        id: 'ehs-data',
        title: 'EHS Data & Document Management Systems',
        description: 'Centralized digital platform for managing all EHS data, documents, and compliance records securely.',
        icon: Database, // Will need to import this
        link: '/solutions#ehs-data'
    },
    {
        id: 'waterless',
        title: 'Waterless Urinal Solution',
        description: 'Eco-friendly, odour-free, and low-maintenance waterless urinal systems ideal for industrial and commercial facilities.',
        icon: Droplets,
        link: '/solutions#waterless'
    }
];

export const stats = [
    { label: 'Combined Industry Experience', value: '10+ Years' },
    { label: 'Safety Audits Led by Team', value: '500+' },
    { label: 'Consulting Projects', value: '50+' },
    { label: 'Products Delivered', value: '1000+' },
];
