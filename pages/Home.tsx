import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Award, Globe, Users, CheckCircle, BookOpen, Star, Quote } from 'lucide-react';

export default function Home() {
  // A professional, gentle image of Lugayizi Benjamin
  const profileImage = "https://pbs.twimg.com/media/G8e2T3EWMAA_x-m?format=jpg&name=medium";

  const testimonials = [
    {
      name: "Eng. Sarah Namatovu",
      role: "Structural Engineer, Kampala",
      comment: "The integration between ArchiCAD and Tekla is a total game changer for our projects in Kampala. Benjamin explains IFC mapping so clearly that I saved weeks of manual coordination.",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Arch. Kato Isaac",
      role: "BIM Lead, Entebbe",
      comment: "Twinmotion rendering was a struggle until I took this masterclass. The cinematic walkthroughs we produce now are helping us win major government contracts and private bids.",
      avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Okello Ronald",
      role: "Graduate Engineer",
      comment: "As a fresh graduate in Uganda, this is the best investment for my career. The ArchiCAD templates and Tekla components provided are gold for anyone starting out.",
      avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Alek Workflow Split-Screen Background */}
        <div className="absolute inset-0 z-0 flex transition-all duration-700 ease-in-out">
          {/* Phase 1: ArchiCAD */}
          <div className="relative flex-[1] hover:flex-[1.5] transition-all duration-700 border-r border-white/10 group overflow-hidden">
            <img 
              src="https://alcads.com/wp-content/uploads/2024/05/Transform-Your-Design-Dreams-into-Reality-with-3D-Architectural-Design-Software-1.jpg" 
              alt="ArchiCAD Design" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-8 right-6 text-white/40 font-display font-bold text-xs uppercase tracking-[0.3em] rotate-90 origin-right whitespace-nowrap hidden md:block">
              01 ArchiCAD Modeling
            </div>
          </div>
          
          {/* Phase 2: Tekla */}
          <div className="relative flex-[1] hover:flex-[1.5] transition-all duration-700 border-r border-white/10 group overflow-hidden">
            <img 
              src="https://th.bing.com/th/id/R.d28741cb11703a1b18eb348ac2f32cc2?rik=Kft5xaVgkpPPJQ&pid=ImgRaw&r=0" 
              alt="Tekla Structural Model" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-8 right-6 text-white/40 font-display font-bold text-xs uppercase tracking-[0.3em] rotate-90 origin-right whitespace-nowrap hidden md:block">
              02 Tekla Engineering
            </div>
          </div>
          
          {/* Phase 3: Twinmotion */}
          <div className="relative flex-[1] hover:flex-[1.5] transition-all duration-700 group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1920" 
              alt="Twinmotion Render" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-8 right-6 text-white/40 font-display font-bold text-xs uppercase tracking-[0.3em] rotate-90 origin-right whitespace-nowrap hidden md:block">
              03 Twinmotion Viz
            </div>
          </div>

          {/* Main Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10 pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              The Full BIM Mastery Path
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Master the Full Workflow: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">ArchiCAD + Tekla + Twinmotion</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Professional training for Civil Engineers and Architects by <span className="text-white font-semibold">Alek Design Build</span>. Build smarter, design faster, and render better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20">
                Start Learning Now <ChevronRight className="w-5 h-5" />
              </Link>
              <Link to="/workflow" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all border border-slate-700">
                <Play className="w-5 h-5 fill-current" /> Watch Intro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 bg-slate-900/50 backdrop-blur rounded-3xl border border-slate-800">
          {[
            { label: 'Students', value: '1,200+', icon: <Users className="text-blue-500" /> },
            { label: 'Modules', value: '10+', icon: <BookOpen className="text-cyan-500" /> },
            { label: 'Countries', value: '15+', icon: <Globe className="text-indigo-500" /> },
            { label: 'Certificates', value: '850+', icon: <Award className="text-orange-500" /> }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="p-3 bg-slate-800 rounded-xl">{stat.icon}</div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Instructor Section - Refined image size */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-4 relative flex justify-center md:justify-start">
            <div className="absolute -inset-4 bg-blue-600/10 rounded-full blur-3xl z-0" />
            <div className="relative z-10 w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Lugayizi Benjamin - Project Lead" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-4 bg-slate-900 border border-slate-800 px-5 py-3 rounded-xl shadow-xl z-20 text-center whitespace-nowrap">
              <p className="text-white font-bold text-sm font-display">Lugayizi Benjamin</p>
              <p className="text-blue-400 text-[9px] font-bold uppercase tracking-widest">Project Lead</p>
            </div>
          </div>
          <div className="md:col-span-8 space-y-8">
            <div>
              <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Meet Your Mentor</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">Bridging the Gap Between Design and Reality.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                As a graduate engineer and Project Lead, I specialize in <span className="text-white font-semibold">Tekla Structural Designer & Twinmotion workflows</span>. I founded Alek Design Build to teach students the "Full Workflow"—a high-efficiency system that integrates ArchiCAD, Tekla, and Twinmotion into one seamless powerhouse.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Tekla Structural Designer",
                "Twinmotion Visualization",
                "ArchiCAD GDL Expert",
                "BIM Interoperability"
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-slate-200 text-sm font-semibold">{skill}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/courses" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-900/40">
                Join My Masterclass <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ratings & Reactions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Student Reactions</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">See why professionals and students across East Africa trust the Alek Workflow for their BIM career growth.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur border border-slate-800 p-8 rounded-[2.5rem] flex flex-col relative group hover:border-blue-500/50 transition-all hover:-translate-y-2">
              <Quote className="absolute top-6 right-8 w-10 h-10 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, starIdx) => (
                  <Star key={starIdx} className="w-4 h-4 fill-blue-500 text-blue-500" />
                ))}
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-8 flex-grow italic">
                "{t.comment}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800/50">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-800" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-slate-900 rounded-full border border-slate-800">
            <div className="flex -space-x-3">
              {testimonials.map((t, i) => (
                <img key={i} src={t.avatar} className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" alt="Student" />
              ))}
              <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white">
                +42
              </div>
            </div>
            <div className="text-slate-400 text-sm">
              Joined by <span className="text-white font-bold">1,200+</span> graduates this month
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
