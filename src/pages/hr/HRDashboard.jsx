import React, { useState } from 'react';
import { Users, FileText, ShieldCheck, CheckSquare, Search, Filter, Mail, Building, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

const HRDashboard = () => {
  const hrStats = [
    { label: 'Total Headcount', value: 1250, icon: Users, color: 'text-primary-400' },
    { label: 'Active Requests', value: 84, icon: FileText, color: 'text-amber-400' },
    { label: 'Policy Adherence', value: '98%', icon: ShieldCheck, color: 'text-emerald-400' },
    { label: 'Pending Final Sign-off', value: 12, icon: CheckSquare, color: 'text-indigo-400' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">HR Management Portal</h1>
        <p className="text-slate-400">Manage organization-wide employee data and leave policies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hrStats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className={`p-2 w-fit rounded-lg bg-white/5 ${stat.color} mb-4`}>
              <stat.icon size={24} />
            </div>
            <h2 className="text-4xl font-bold">{stat.value}</h2>
            <p className="text-sm text-slate-400 font-medium mt-1 uppercase tracking-widest text-[10px]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Recent Employee Additions</h3>
            <button className="primary-button text-xs py-1.5 px-3">View All Employees</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'David Miller', dept: 'Engineering', date: '2024-03-12', role: 'Staff Engineer' },
              { name: 'Jessica Alba', dept: 'Marketing', date: '2024-03-10', role: 'Content Lead' },
              { name: 'Robert Downey', dept: 'Legal', date: '2024-03-08', role: 'Compliance Officer' },
            ].map((emp, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/5">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-slate-400">
                     {emp.name[0]}
                   </div>
                   <div>
                      <p className="font-bold text-sm">{emp.name}</p>
                      <p className="text-xs text-slate-500">{emp.role} • {emp.dept}</p>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-xs text-slate-500">Joined on</p>
                   <p className="text-sm font-medium">{emp.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="text-primary-400" size={20} /> Policy Status
            </h3>
            <div className="space-y-6">
               <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span>Leave Utilization</span>
                    <span>72%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-500" style={{ width: '72%' }}></div>
                  </div>
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span>Overtime Compliance</span>
                    <span>94%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: '94%' }}></div>
                  </div>
               </div>
            </div>
            <button className="w-full mt-8 py-2.5 glass-button justify-center font-bold">Review Policies</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
