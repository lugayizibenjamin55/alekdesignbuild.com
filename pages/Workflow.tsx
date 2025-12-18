import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../constants';
import { ChevronRight, ChevronLeft, Layers, Box, Maximize } from 'lucide-react';

export default function WorkflowPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-display font-bold text-white mb-6">The Alek Workflow</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          We don't just teach software; we teach the integration. Experience the seamless flow of data from architectural concept to structural reality.
        </p>
      </div>

      {/* Main Interactive Slider */}
      <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Visual Side */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent z-10" />
            <img 
              src={WORKFLOW_STEPS[activeStep].image} 
              alt={WORKFLOW_STEPS[activeStep].title}
              className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
            />
            
            {/* View controls */}
            <div className="absolute bottom-8 left-8 flex gap-4 z-20">
              <button className="p-3 bg-white/10 backdrop-blur rounded-full text-white hover:bg-white/20 transition-all border border-white/20">
                <Maximize className="w-5 h-5" />
              </button>
              <button className="p-3 bg-white/10 backdrop-blur rounded-full text-white hover:bg-white/20 transition-all border border-white/20">
                <Box className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <div className="mb-10 flex items-center gap-4">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center">
                {WORKFLOW_STEPS[activeStep].icon}
              </div>
              <div>
                <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">{WORKFLOW_STEPS[activeStep].title}</span>
                <h2 className="text-4xl font-display font-bold text-white">{WORKFLOW_STEPS[activeStep].subtitle}</h2>
              </div>
            </div>

            <p className="text-xl text-slate-400 leading-relaxed mb-12">
              {WORKFLOW_STEPS[activeStep].description}
            </p>

            <div className="space-y-6 mb-16">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-slate-300 font-medium">Professional grade output for industry standard Phase {i}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : WORKFLOW_STEPS.length - 1))}
                className="w-14 h-14 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-all border border-slate-700"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setActiveStep(prev => (prev < WORKFLOW_STEPS.length - 1 ? prev + 1 : 0))}
                className="w-14 h-14 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-all border border-slate-700"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Navigation */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {WORKFLOW_STEPS.map((step, i) => (
          <button 
            key={i}
            onClick={() => setActiveStep(i)}
            className={`p-6 rounded-3xl border transition-all text-left ${activeStep === i ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-900/40 translate-y-[-4px]' : 'bg-slate-900 border-slate-800 text-slate-500 hover:border-slate-700'}`}
          >
            <span className={`block font-bold uppercase tracking-[0.2em] text-[10px] mb-2 ${activeStep === i ? 'text-white/70' : 'text-slate-600'}`}>0{i+1} — {step.title.split(': ')[1]}</span>
            <span className={`block text-lg font-bold ${activeStep === i ? 'text-white' : 'text-slate-300'}`}>{step.subtitle}</span>
          </button>
        ))}
      </div>

      {/* Comparison Section */}
      <section className="mt-40 text-center">
        <h2 className="text-4xl font-display font-bold text-white mb-6">Software Interoperability</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          How we move data from ArchiCAD to Tekla without losing a single bolt. Our custom IFC mapping templates included in the Full Bundle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-900">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Layers className="text-blue-500" />
              ArchiCAD Architectural Models
            </h3>
            <p className="text-slate-500 mb-6">Precision architectural modeling with ready-to-export IFC data for structural teams.</p>
            <div className="h-64 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
              <img src="https://tse2.mm.bing.net/th/id/OIP.vwjj0udtbqtXRYasqweCSwHaEK?cb=ucfimg2&ucfimg=1&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3" className="w-full h-full object-cover" alt="ArchiCAD Structural View" />
            </div>
          </div>
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-900">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Layers className="text-orange-500" />
              Tekla Structural Detailing
            </h3>
            <p className="text-slate-500 mb-6">Detailed concrete framing and reinforcement modeling with automated quantity take-offs.</p>
            <div className="h-64 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
              <img src="https://th.bing.com/th/id/R.d28741cb11703a1b18eb348ac2f32cc2?rik=Kft5xaVgkpPPJQ&pid=ImgRaw&r=0" className="w-full h-full object-cover" alt="Tekla Concrete Framework" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}