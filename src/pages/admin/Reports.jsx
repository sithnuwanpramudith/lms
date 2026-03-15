import React from 'react';
import { BarChart3, PieChart, FileText, Download, TrendingUp, Calendar, Users, Building } from 'lucide-react';

const Reports = () => {
  const reports = [
    { title: 'Monthly Leave Report', icon: TrendingUp, desc: 'Overview of all leaves taken per month.', color: 'text-primary-400' },
    { title: 'Employee Leave Summary', icon: Users, desc: 'Individual attendance and leave balance.', color: 'text-emerald-400' },
    { title: 'Department Wise Report', icon: Building, desc: 'Comparative leave analytics across depts.', color: 'text-amber-400' },
    { title: 'Public Holiday Planner', icon: Calendar, desc: 'Upcoming holidays and workforce impact.', color: 'text-indigo-400' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <p className="text-slate-400">Generate and export detailed system reports.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, i) => (
          <div key={i} className="glass-card p-6 flex items-start gap-6 hover:border-primary-500/30 transition-all group">
            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${report.color}`}>
              <report.icon size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">{report.title}</h3>
              <p className="text-sm text-slate-500 mb-6">{report.desc}</p>
              <div className="flex gap-3">
                <button className="glass-button text-xs py-1.5 px-3">View Preview</button>
                <button className="primary-button text-xs py-1.5 px-3"><Download size={14} /> Export PDF</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold">Custom Report Generator</h3>
          <button className="glass-button"><FileText size={18} /> Documentation</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Start Date</label>
            <input type="date" className="input-field" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">End Date</label>
            <input type="date" className="input-field" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Format</label>
            <select className="input-field">
              <option>Excel (.xlsx)</option>
              <option>PDF Document</option>
              <option>CSV Format</option>
            </select>
          </div>
        </div>
        <button className="primary-button w-full mt-8 py-3 justify-center text-lg">Generate Custom Report</button>
      </div>
    </div>
  );
};

export default Reports;
