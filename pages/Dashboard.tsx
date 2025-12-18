import React from 'react';
import { COURSES } from '../constants';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { 
  Award, 
  PlayCircle, 
  FileText, 
  Download, 
  Clock, 
  Settings,
  Bell,
  Search,
  BookOpen
} from 'lucide-react';

const PROGRESS_DATA = [
  { name: 'Mon', hours: 2.5 },
  { name: 'Tue', hours: 4.1 },
  { name: 'Wed', hours: 1.2 },
  { name: 'Thu', hours: 3.5 },
  { name: 'Fri', hours: 5.0 },
  { name: 'Sat', hours: 2.0 },
  { name: 'Sun', hours: 0.5 },
];

export default function DashboardPage() {
  const profileImage = "https://pbs.twimg.com/media/G8e2T3EWMAA_x-m?format=jpg&name=medium";

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar - Desktop */}
      <aside className="w-20 lg:w-64 border-r border-slate-900 p-6 flex flex-col hidden sm:flex shrink-0">
        <div className="mb-12 flex justify-center lg:justify-start">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white">A</div>
        </div>
        
        <nav className="space-y-2 flex-grow">
          {[
            { icon: <BarChart className="w-5 h-5" />, label: 'Dashboard', active: true },
            { icon: <BookOpen className="w-5 h-5" />, label: 'My Courses' },
            { icon: <Award className="w-5 h-5" />, label: 'Certificates' },
            { icon: <Download className="w-5 h-5" />, label: 'Resources' },
            { icon: <Bell className="w-5 h-5" />, label: 'Notifications' },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl transition-all ${item.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-500 hover:text-white hover:bg-slate-900'}`}>
              {item.icon}
              <span className="hidden lg:block font-bold text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl text-slate-500 hover:text-white transition-all mt-auto">
          <Settings className="w-5 h-5" />
          <span className="hidden lg:block font-bold text-sm">Settings</span>
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-4 md:p-10 lg:p-16 max-w-[1600px] mx-auto overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">Welcome back, Benjamin</h1>
            <p className="text-slate-500 text-sm">You've completed <span className="text-white font-bold">65%</span> of your Full BIM Bundle.</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="w-full md:w-64 bg-slate-900 border border-slate-800 rounded-full pl-12 pr-6 py-3 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 overflow-hidden ring-2 ring-blue-600 ring-offset-2 ring-offset-slate-950">
              <img src={profileImage} alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Side - Progress */}
          <div className="lg:col-span-2 space-y-10">
            {/* Active Lesson Card */}
            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-900/30">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur rounded-lg border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-6">Currently Learning</span>
                <h2 className="text-4xl font-display font-bold mb-6 max-w-md leading-tight">ArchiCAD Masterclass: Module 03 Coordination</h2>
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Clock className="w-4 h-4 opacity-70" /> 45m left
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <BookOpen className="w-4 h-4 opacity-70" /> Lesson 12/18
                  </div>
                </div>
                <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold text-sm hover:bg-blue-50 transition-all flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" /> Resume Lesson
                </button>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full -ml-10 -mb-10 blur-2xl" />
            </div>

            {/* Weekly Activity Chart */}
            <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-bold text-white">Learning Activity</h3>
                <select className="bg-slate-800 text-slate-300 text-xs font-bold border-none rounded-lg px-4 py-2">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PROGRESS_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#64748b', fontSize: 12}} 
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#64748b', fontSize: 12}}
                    />
                    <Tooltip 
                      cursor={{fill: '#1e293b'}}
                      contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px'}}
                      itemStyle={{color: '#fff', fontSize: '12px'}}
                    />
                    <Bar dataKey="hours" radius={[8, 8, 0, 0]}>
                      {PROGRESS_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 4 ? '#3b82f6' : '#1e293b'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Side - Sidebar items */}
          <div className="space-y-10">
            {/* My Certificates */}
            <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8">
              <h3 className="text-xl font-bold text-white mb-8">My Certificates</h3>
              <div className="space-y-6">
                {[
                  { title: 'Twinmotion Visualizer', date: 'Jan 15, 2024' },
                  { title: 'BIM Fundamentals', date: 'Dec 10, 2023' },
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white font-bold text-sm">{cert.title}</h4>
                      <p className="text-slate-500 text-[10px] font-medium uppercase tracking-widest">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
