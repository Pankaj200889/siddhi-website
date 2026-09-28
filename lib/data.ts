import { ShieldCheck, Leaf, Droplets, GraduationCap, Recycle, Database, Flame, Factory, Award, CheckCircle, Clock, Shield } from 'lucide-react';

export const services = [
    {
        id: 'ems',
        title: 'Environmental Management Systems (EMS)',
        subtitle: 'Emissions, Sustainability & Resource Optimization',
        description: 'End-to-end environmental management frameworks enabling industrial facilities to track carbon footprints, monitor real-time emissions, and meet strict ISO 14001 ESG standards.',
        features: [
            'Real-Time Carbon & Emissions Tracking',
            'ISO 14001 Compliance & Sustainability Audits',
            'Resource & Energy Optimization Workflows',
            'Automated Pollution Control Board (PCB) Reporting'
        ],
        badge: 'ISO 14001 Aligned',
        icon: Leaf,
        color: 'text-emerald-400',
        badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
        link: '/solutions#ems'
    },
    {
        id: 'sms',
        title: 'Safety Management Systems (SMS)',
        subtitle: 'Hazard Identification & Zero-Accident Culture',
        description: 'Proactive safety management frameworks incorporating Job Safety Analysis (JSA), hazard identification, incident reporting, and Behavioral Safety (BBS) to build a zero-harm workplace.',
        features: [
            'Hazard Identification & Risk Assessment (HIRA)',
            'Behavioral Safety (BBS) & Incident Tracking',
            'Near-Miss Digital Reporting & Root Cause Analysis',
            'Permit to Work (PTW) Digital Approval Engine'
        ],
        badge: 'ISO 45001 Certified',
        icon: ShieldCheck,
        color: 'text-orange-400',
        badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
        gradient: 'from-orange-500/20 via-amber-500/10 to-transparent',
        link: '/solutions#sms'
    },
    {
        id: 'training',
        title: 'EHS Training & Competence Management',
        subtitle: 'Workforce Certification & Refresher Automation',
        description: 'Role-based EHS training matrix for shopfloor operators, supervisors, and third-party contractors with automated certification tracking and scheduled refresher notifications.',
        features: [
            'Role-Based Safety Modules (Height, Confined Space, Fire)',
            'Contractor Safety Certification & Gate Pass Access',
            'Automated Refresher Scheduling & Lockouts',
            'Interactive Practical & VR Simulation Modules'
        ],
        badge: 'Workforce Ready',
        icon: GraduationCap,
        color: 'text-cyan-400',
        badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
        link: '/solutions#training'
    },
    {
        id: 'waste-management',
        title: 'Waste Management Solutions (STP & ETP)',
        subtitle: 'Cradle-to-Grave Hazardous & Effluent Treatment',
        description: 'Integrated waste stream management covering hazardous chemical waste tracking, state-of-the-art Sewage Treatment Plants (STP), and Effluent Treatment Plants (ETP) for total legal compliance.',
        features: [
            'STP & ETP Turnkey Design, Installation & AMC',
            'Cradle-to-Grave Hazardous Waste Manifest Tracking',
            'Zero Liquid Discharge (ZLD) Water Recycling',
            'Central Pollution Control Board (CPCB) Compliance'
        ],
        badge: 'Zero Discharge',
        icon: Recycle,
        color: 'text-green-400',
        badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
        gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
        link: '/solutions#waste-management'
    },
    {
        id: 'ehs-data',
        title: 'EHS Data & Document Management Systems',
        subtitle: 'Centralized Compliance & Audit Readiness',
        description: 'Secure enterprise cloud repository for digitizing safety manuals, statutory licenses, inspection logs, and legal documentation with instant audit retrieval and encryption.',
        features: [
            'Centralized Statutory License & Document Vault',
            'Audit-Ready Automated PDF Report Generator',
            'Role-Based Encryption & Granular Access Controls',
            'Automated Expiry & Renewal Warning System'
        ],
        badge: '100% Audit Ready',
        icon: Database,
        color: 'text-purple-400',
        badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
        link: '/solutions#ehs-data'
    },
    {
        id: 'waterless',
        title: 'Waterless Urinal Solution',
        subtitle: '100% Water Savings & Eco-Friendly Sanitation',
        description: 'Patented eco-friendly urinal systems that operate completely without water or chemicals, eliminating foul odours, reducing maintenance costs, and saving millions of liters annually.',
        features: [
            '100% Zero Water Consumption Technology',
            'Microbiological Odour-Eliminating Cartridges',
            'Significant Reduction in Plumbing & Utility Bills',
            'Hygienic Touch-Free Operation for High-Traffic Plants'
        ],
        badge: 'Eco Innovation',
        icon: Droplets,
        color: 'text-sky-400',
        badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
        gradient: 'from-sky-500/20 via-blue-500/10 to-transparent',
        link: '/solutions#waterless'
    }
];

export const stats = [
    { label: 'Combined Industry Experience', value: '10+ Years', desc: 'Over a decade of EHS leadership' },
    { label: 'Safety Audits Led by Team', value: '500+', desc: 'Across manufacturing & heavy plants' },
    { label: 'Enterprise Consulting Projects', value: '50+', desc: 'Custom safety transformations' },
    { label: 'Safety & Eco Products Delivered', value: '1000+', desc: 'Deployed in active industrial sites' }
];

export const industrySectors = [
    { name: 'Automotive & Assembly', icon: Factory },
    { name: 'Pharmaceuticals & Bio', icon: Award },
    { name: 'Chemicals & Processing', icon: Recycle },
    { name: 'Heavy Engineering', icon: Shield },
    { name: 'Textiles & Consumer Goods', icon: CheckCircle },
    { name: 'Logistics & Warehousing', icon: Clock }
];
