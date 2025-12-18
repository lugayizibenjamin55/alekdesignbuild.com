
import React from 'react';
import { COURSES } from '../constants';
import { BookOpen, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Course Library</h1>
          <p className="text-xl text-slate-400">
            A specialized curriculum covering the entire building lifecycle. From first concept to the final bolt.
          </p>
        </div>
        <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
          {['All', 'ArchiCAD', 'Tekla', 'Twinmotion'].map(cat => (
            <button key={cat} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${cat === 'All' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map((course) => (
          <div key={course.id} className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col transition-all hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-slate-950/80 backdrop-blur rounded-lg border border-slate-800 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  {course.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-4 text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {course.modules} Modules</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> ~{course.modules * 2} Hours</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                {course.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {course.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {course.features.slice(0, 3).map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300 text-xs font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 text-xs font-bold uppercase block">Enroll for</span>
                  <span className="text-2xl font-bold text-white">${course.price}</span>
                </div>
                <Link to="/pricing" className="px-6 py-2 bg-slate-800 hover:bg-blue-600 text-white rounded-xl text-sm font-bold transition-all flex items-center gap-2">
                  Enroll <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Free Resources Section */}
      <section className="mt-32 p-12 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] text-center">
        <h2 className="text-3xl font-display font-bold text-white mb-4">New to BIM?</h2>
        <p className="text-slate-400 mb-8">Get our free "BIM Workflow Guide" and learn how we sync models between ArchiCAD and Tekla.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="w-full max-w-xs px-6 py-4 bg-slate-800 border border-slate-700 rounded-full text-white focus:outline-none focus:border-blue-500"
          />
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all">
            Send me the guide
          </button>
        </div>
      </section>
    </div>
  );
}
