import React from 'react';
import { Shield, Users, Calendar, BarChart3, TrendingUp, CheckCircle, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-slate-400">Welcome back! Here's what's happening today across the system.</p>
        </div>
        <div className="flex gap-3">
          <button className="glass-button">Download Report</button>
          <button className="primary-button">New Management Task</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat-card">
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Total Employees</span>
          <h2 className="text-4xl font-bold mt-1">1,284</h2>
          <div className="flex items-center gap-2 mt-4 text-emerald-400 text-xs font-bold">
            <TrendingUp size={14} /> <span>+12% from last month</span>
          </div>
        </div>
        <div className="stat-card">
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Leave Requests</span>
          <h2 className="text-4xl font-bold mt-1">42</h2>
          <div className="flex items-center gap-2 mt-4 text-amber-400 text-xs font-bold">
            <Clock size={14} /> <span>8 pending review</span>
          </div>
        </div>
        <div className="stat-card">
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Approved Today</span>
          <h2 className="text-4xl font-bold mt-1">12</h2>
          <div className="flex items-center gap-2 mt-4 text-emerald-400 text-xs font-bold">
            <CheckCircle size={14} /> <span>+3 since 9 AM</span>
          </div>
        </div>
        <div className="stat-card">
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Active Policies</span>
          <h2 className="text-4xl font-bold mt-1">08</h2>
          <div className="flex items-center gap-2 mt-4 text-primary-400 text-xs font-bold">
            <Shield size={14} /> <span>All systems normal</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <div className="lg:col-span-2 glass-card p-8 min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Leave Trends (Weekly)</h3>
            <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs outline-none focus:border-primary-500 transition-all font-medium">
              <option>This Week</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="flex items-end justify-between gap-4 h-64 px-2">
            {[40, 75, 45, 95, 65, 85, 55].map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-1.5 bg-slate-800 rounded-lg text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                  {Math.round(h * 1.2)} Requests
                </div>
                <div 
                  className="w-full bg-gradient-to-t from-primary-600/20 to-primary-500 rounded-t-xl transition-all duration-500 group-hover:to-primary-400 shadow-lg shadow-primary-500/10" 
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 px-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold mb-6">Quick Actions</h3>
            <div className="space-y-3">
              {[
                { label: 'Add New Employee', desc: 'Create user account', color: 'bg-primary-500/10 text-primary-400', icon: Users },
                { label: 'Bulk Approval', desc: 'Action all pending', color: 'bg-emerald-500/10 text-emerald-400', icon: CheckCircle },
                { label: 'Generate PDF Report', desc: 'Export system stats', color: 'bg-amber-500/10 text-amber-400', icon: BarChart3 },
                { label: 'Policy Update', desc: 'Modify leave rules', color: 'bg-indigo-500/10 text-indigo-400', icon: Shield },
              ].map((action, i) => (
                <button key={i} className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 transition-all text-left group">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-transparent group-hover:border-current transition-all ${action.color}`}>
                    <action.icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-200">{action.label}</p>
                    <p className="text-[10px] text-slate-500">{action.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-6 bg-gradient-to-br from-primary-600/10 to-transparent">
             <h3 className="text-sm font-bold uppercase tracking-widest text-primary-400 mb-2">System Status</h3>
             <div className="flex items-center gap-3 text-emerald-400">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-sm font-medium">All nodes operational</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
