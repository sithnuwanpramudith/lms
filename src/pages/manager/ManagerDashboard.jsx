import React from 'react';
import { Users, Clock, AlertCircle, TrendingUp, CheckCircle, ArrowUpRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const ManagerDashboard = () => {
  const teamStats = [
    { label: 'Team Size', value: 12, icon: Users, color: 'text-primary-400' },
    { label: 'Pending Approvals', value: 4, icon: Clock, color: 'text-amber-400' },
    { label: 'On Leave (Today)', value: 2, icon: Calendar, color: 'text-emerald-400' },
    { label: 'Leave Rate', value: '8%', icon: TrendingUp, color: 'text-indigo-400' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Team Dashboard</h1>
          <p className="text-slate-400">Monitor your team's leave requests and availability.</p>
        </div>
        <button className="primary-button">View Team Calendar <ArrowUpRight size={18} /></button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamStats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Team Insight</span>
            </div>
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <p className="text-sm text-slate-400 font-medium mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold font-['Outfit']">Team Availability</h3>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Present
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div> On Leave
                </span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'John Doe', status: 'present', role: 'DevOps Engineer' },
                { name: 'Sarah Wilson', status: 'leave', type: 'Annual', role: 'UI/UX Designer' },
                { name: 'Michael Chen', status: 'present', role: 'Fullstack Dev' },
                { name: 'Emma Brown', status: 'present', role: 'Product Manager' },
                { name: 'Chris Evans', status: 'leave', type: 'Sick', role: 'Backend Lead' },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl group hover:bg-white/10 transition-all border border-transparent hover:border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400">
                      {member.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{member.name}</p>
                      <p className="text-xs text-slate-500">{member.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {member.status === 'present' ? (
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                        <CheckCircle size={12} /> Working
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                        <AlertCircle size={12} /> {member.type} Leave
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-primary-400 hover:text-primary-300 text-sm font-bold transition-colors">View All Team Members</button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 border-primary-500/20 bg-primary-500/5">
            <h3 className="text-lg font-bold mb-4">Manager Spotlight</h3>
            <p className="text-sm text-slate-400 mb-6">You have 4 pending requests that require your immediate attention before EOD.</p>
            <button className="primary-button w-full justify-center">Go to Approvals</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
