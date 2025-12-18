
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  BookOpen, 
  Workflow, 
  CreditCard, 
  Home as HomeIcon,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

import HomePage from './pages/Home';
import CoursesPage from './pages/Courses';
import WorkflowPage from './pages/Workflow';
import PricingPage from './pages/Pricing';
import DashboardPage from './pages/Dashboard';
import BIMAssistant from './components/BIMAssistant';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                A
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                ALEK <span className="text-blue-500">DESIGN BUILD</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link to="/courses" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Courses</Link>
              <Link to="/workflow" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Workflow</Link>
              <Link to="/pricing" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</Link>
              <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20">Student Login</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-slate-800">Home</Link>
            <Link to="/courses" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-slate-800">Courses</Link>
            <Link to="/workflow" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-slate-800">Workflow</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-4 text-base font-medium border-b border-slate-800">Pricing</Link>
            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-blue-400 block px-3 py-4 text-base font-bold">Student Dashboard</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">A</div>
            <span className="text-xl font-bold font-display tracking-tight text-white">ALEK DESIGN BUILD</span>
          </div>
          <p className="text-slate-400 mb-6 max-w-sm">
            Professional BIM training for the next generation of Civil Engineers and Architects. 
            Automated learning that works while you sleep.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all">
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 bg-slate-400 rounded-sm"></div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Platform</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/courses" className="hover:text-blue-400 transition-colors">All Courses</Link></li>
            <li><Link to="/workflow" className="hover:text-blue-400 transition-colors">BIM Workflow</Link></li>
            <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing Plans</Link></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Certifications</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Support</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Student Portal</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Resources</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-900 pt-8 text-center text-slate-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Alek Design Build. All rights reserved. Professional BIM Education Platform.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [showAssistant, setShowAssistant] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/workflow" element={<WorkflowPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating AI Assistant Toggle */}
        <button 
          onClick={() => setShowAssistant(!showAssistant)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-90 z-50 group"
        >
          {showAssistant ? <X /> : <MessageSquare className="group-hover:animate-pulse" />}
        </button>

        {showAssistant && (
          <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] z-50 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5">
             <BIMAssistant onClose={() => setShowAssistant(false)} />
          </div>
        )}
      </div>
    </Router>
  );
}
