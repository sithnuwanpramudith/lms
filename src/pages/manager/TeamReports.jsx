import React from 'react';
import { BarChart3, TrendingUp, Users, Calendar, Download, PieChart, ArrowUpRight } from 'lucide-react';

const TeamReports = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Team Analytics</h1>
          <p className="text-slate-400">Detailed insights into your team's leave patterns and productivity.</p>
        </div>
        <button className="primary-button"><Download size={18} /> Export Results</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-6 min-h-[400px]">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp size={20} className="text-primary-400" /> Monthly Team Leave Distribution
          </h3>
          <div className="flex items-end justify-between h-64 gap-2 px-4">
            {[30, 50, 40, 80, 60, 45, 90, 70, 50, 40, 60, 30].map((h, i) => (
              <div key={i} className="flex-1 space-y-2 group cursor-pointer">
                <div className="h-full flex flex-col justify-end gap-1">
                   <div className="bg-primary-500/20 group-hover:bg-primary-500/40 rounded-t-lg transition-all" style={{ height: `${h}%` }}></div>
                </div>
                <p className="text-[10px] text-slate-500 text-center font-bold">M{i+1}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-xs text-slate-500">Number of leave days taken per month across the team</p>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <PieChart size={20} className="text-emerald-400" /> Leave Type Breakdown
          </h3>
          <div className="space-y-6">
            {[
              { label: 'Annual Leave', value: 65, color: 'bg-primary-500' },
              { label: 'Sick Leave', value: 20, color: 'bg-emerald-500' },
              { label: 'Casual Leave', value: 10, color: 'bg-amber-500' },
              { label: 'Others', value: 5, color: 'bg-indigo-500' },
            ].map((type, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold">{type.label}</span>
                  <span className="text-slate-400">{type.value}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full ${type.color}`} style={{ width: `${type.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><TrendingUp size={20} /></div>
               <div>
                  <p className="text-sm font-bold">Optimal Utilization</p>
                  <p className="text-[10px] text-slate-500">Your team's leave patterns are within healthy limits.</p>
               </div>
             </div>
             <ArrowUpRight className="text-slate-500" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamReports;
