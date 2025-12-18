import React from 'react';
import { Course, PricingPlan } from './types';
import { 
  Building2, 
  HardHat, 
  Palette, 
  Layout, 
  CheckCircle2, 
  ShieldCheck, 
  Clock,
  BookOpen
} from 'lucide-react';

export const COURSES: Course[] = [
  {
    id: 'archicad-masterclass',
    title: 'ArchiCAD Masterclass',
    category: 'ArchiCAD',
    modules: 4,
    description: 'Master architectural modeling, documentation, and coordination using industry-standard BIM tools.',
    price: 20,
    image: 'https://alcads.com/wp-content/uploads/2024/05/Transform-Your-Design-Dreams-into-Reality-with-3D-Architectural-Design-Software-1.jpg',
    features: ['BIM Fundamentals', 'Parametric Modeling', '2D Documentation', 'IFC Collaboration']
  },
  {
    id: 'tekla-structural',
    title: 'Structural Engineering with Tekla',
    category: 'Tekla',
    modules: 4,
    description: 'Learn deep structural analysis and detailed steel/concrete detailing for complex engineering projects.',
    price: 25,
    image: 'https://th.bing.com/th/id/R.d28741cb11703a1b18eb348ac2f32cc2?rik=Kft5xaVgkpPPJQ&pid=ImgRaw&r=0',
    features: ['Steel Detailing', 'Rebar Modeling', 'Structural Analysis', 'Shop Drawings']
  },
  {
    id: 'twinmotion-viz',
    title: 'Visualization with Twinmotion',
    category: 'Twinmotion',
    modules: 2,
    description: 'Transform your BIM models into high-end cinematic renders and immersive VR experiences.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    features: ['Real-time Rendering', 'Environment Lighting', 'Material Mastery', 'Animation & Walkthroughs']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'single',
    name: 'Single Course',
    price: 20,
    period: 'one-time',
    description: 'Perfect for focusing on one specific software skill.',
    features: ['Full Lifetime Access', 'Practice Files included', 'Course Certificate', 'Standard Support']
  },
  {
    id: 'bundle',
    name: 'Full BIM Bundle',
    price: 50,
    period: 'one-time',
    recommended: true,
    description: 'The ultimate professional path. All 10 modules included.',
    features: ['All 3 Masterclasses', 'ArchiCAD Templates', 'Tekla Custom Components', 'Priority Support', 'BIM Manager Certification']
  },
  {
    id: 'subscription',
    name: 'Monthly Pro',
    price: 10,
    period: 'per month',
    description: 'Stay updated with the latest software versions and techniques.',
    features: ['Access Everything', 'New Monthly Content', 'Live Q&A Sessions', 'Community Access', 'Cancel Anytime']
  }
];

export const WORKFLOW_STEPS = [
  {
    title: 'Phase 01: ArchiCAD',
    subtitle: 'Architectural Intelligence',
    description: 'Building the data-rich architectural shell with precision parametric objects.',
    icon: <Building2 className="w-6 h-6 text-blue-400" />,
    image: 'https://alcads.com/wp-content/uploads/2024/05/Transform-Your-Design-Dreams-into-Reality-with-3D-Architectural-Design-Software-1.jpg'
  },
  {
    title: 'Phase 02: Tekla',
    subtitle: 'Structural Integrity',
    description: 'Engineering the skeleton. Detailed connections, rebar, and structural verification.',
    icon: <HardHat className="w-6 h-6 text-orange-400" />,
    image: 'https://th.bing.com/th/id/R.d28741cb11703a1b18eb348ac2f32cc2?rik=Kft5xaVgkpPPJQ&pid=ImgRaw&r=0'
  },
  {
    title: 'Phase 03: Twinmotion',
    subtitle: 'Visual Perfection',
    description: 'Photorealistic lighting and environment design for client presentations.',
    icon: <Palette className="w-6 h-6 text-emerald-400" />,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  }
];