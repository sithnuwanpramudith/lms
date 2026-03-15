import React from 'react';
import { Calendar, Clock, CheckCircle, XCircle, ArrowRight, FileText, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

const EmployeeDashboard = () => {
  const stats = [
    { label: 'Annual Leave', total: 20, used: 5, color: 'text-primary-400' },
    { label: 'Sick Leave', total: 10, used: 2, color: 'text-emerald-400' },
    { label: 'Casual Leave', total: 7, used: 1, color: 'text-amber-400' },
  ];

  const recentRequests = [
    { title: 'Family Vacation', type: 'Annual', days: 5, status: 'approved', date: '2024-03-10' },
    { title: 'Medical Checkup', type: 'Sick', days: 1, status: 'pending', date: '2024-03-15' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-slate-400">Track your leave balance and request status.</p>
        </div>
        <button className="primary-button">Apply New Leave <ArrowRight size={18} /></button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-6 group hover:border-primary-500/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
              <PieChart className={stat.color} size={20} />
            </div>
            <div className="flex items-end gap-2">
              <h2 className="text-4xl font-bold">{stat.total - stat.used}</h2>
              <span className="text-slate-500 font-medium mb-1">/ {stat.total} Days Left</span>
            </div>
            <div className="mt-6 h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${((stat.total - stat.used) / stat.total) * 100}%` }}
                className={`h-full bg-gradient-to-r from-primary-600 to-primary-400`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">Recent Requests</h3>
            <div className="space-y-4">
              {recentRequests.map((req, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      req.status === 'approved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                    }`}>
                      <FileText size={24} />
                    </div>
                    <div>
                      <p className="font-bold">{req.title}</p>
                      <p className="text-xs text-slate-500">{req.type} • {req.days} Days</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      req.status === 'approved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                    }`}>
                      {req.status}
                    </span>
                    <p className="text-[10px] text-slate-600 mt-2">{req.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-primary-400 hover:text-primary-300 text-sm font-bold transition-colors">View All History</button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 bg-gradient-to-br from-primary-600/20 to-transparent">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Clock size={20} className="text-primary-400" /> Quick Status
            </h3>
            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-emerald-400" size={18} />
                <span className="text-sm">Attendance verified for March</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-primary-400" size={18} />
                <span className="text-sm">Next Holiday: March 28th</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
