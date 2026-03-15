import React, { useState } from 'react';
import { Search, Filter, Download, Users, Briefcase, Calendar, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const LeaveBalance = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alice Johnson', role: 'Frontend Dev', annual: 15, sick: 8, casual: 5 },
    { id: 2, name: 'Bob Smith', role: 'Backend Dev', annual: 12, sick: 10, casual: 3 },
    { id: 3, name: 'Charlie Davis', role: 'QA Engineer', annual: 18, sick: 9, casual: 6 },
    { id: 4, name: 'Diana Prince', role: 'Project Manager', annual: 20, sick: 7, casual: 4 },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Team Leave Balances</h1>
          <p className="text-slate-400">Monitor remaining leave quotas for all team members.</p>
        </div>
        <button className="primary-button"><Download size={18} /> Export Quotas</button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex-1 max-w-md focus-within:border-primary-500/50 transition-all">
          <Search size={18} className="text-slate-500" />
          <input type="text" placeholder="Search team members..." className="bg-transparent border-none outline-none text-sm w-full" />
        </div>
        <div className="flex gap-2">
           <button className="glass-button"><Filter size={18} /> Dept: All</button>
           <button className="glass-button">Reset Filter</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {employees.map((emp) => (
          <div key={emp.id} className="glass-card p-6 flex flex-col lg:flex-row lg:items-center gap-8 group hover:border-white/20 transition-all">
            <div className="flex items-center gap-4 min-w-[240px]">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center font-bold text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-lg">
                {emp.name[0]}
              </div>
              <div>
                <h3 className="font-bold text-lg">{emp.name}</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                  <Briefcase size={12} /> {emp.role}
                </p>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span>Annual Balance</span>
                  <span className="text-primary-400 font-bold">{emp.annual} / 20</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(emp.annual/20)*100}%` }}
                    className="h-full bg-primary-500" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span>Sick Balance</span>
                  <span className="text-emerald-400 font-bold">{emp.sick} / 10</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(emp.sick/10)*100}%` }}
                    className="h-full bg-emerald-500" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span>Casual Balance</span>
                  <span className="text-amber-400 font-bold">{emp.casual} / 7</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(emp.casual/7)*100}%` }}
                    className="h-full bg-amber-500" 
                  />
                </div>
              </div>
            </div>

            <button className="lg:w-12 lg:h-12 glass-button justify-center shrink-0 border-white/5 hover:border-primary-500/50">
              <Calendar size={18} className="group-hover:text-primary-400 transition-colors" />
            </button>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-primary-500/5 border border-primary-500/20 flex items-start gap-4">
        <AlertCircle className="text-primary-400 mt-0.5 shrink-0" size={20} />
        <p className="text-sm text-slate-400 leading-relaxed">
          <span className="font-bold text-slate-200">Note:</span> Balances reflect the current calendar year. Managers are advised to encourage team members to utilize their annual leaves proportionally to maintain peak productivity and work-life balance.
        </p>
      </div>
    </div>
  );
};

export default LeaveBalance;
