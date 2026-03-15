import React from 'react';
import { Calendar, Search, Filter, Download, Clock, CheckCircle, XCircle } from 'lucide-react';

const LeaveHistory = () => {
  const history = [
    { id: 1, type: 'Annual', from: '2024-03-20', to: '2024-03-25', days: 5, status: 'approved', manager: 'Alice Smith' },
    { id: 2, type: 'Sick', from: '2024-02-10', to: '2024-02-11', days: 1, status: 'approved', manager: 'Alice Smith' },
    { id: 3, type: 'Casual', from: '2023-12-15', to: '2023-12-15', days: 1, status: 'rejected', manager: 'Alice Smith' },
    { id: 4, type: 'Annual', from: '2023-08-01', to: '2023-08-10', days: 9, status: 'approved', manager: 'Bob Jones' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Leave History</h1>
          <p className="text-slate-400">View and track all your previous leave applications.</p>
        </div>
        <button className="glass-button"><Download size={18} /> Export History</button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex-1 max-w-md">
          <Search size={18} className="text-slate-500" />
          <input type="text" placeholder="Search by date or type..." className="bg-transparent border-none outline-none text-sm w-full" />
        </div>
        <button className="glass-button"><Filter size={18} /> Filters</button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Leave Type</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Duration</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Days</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Approved By</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {history.map((item) => (
                <tr key={item.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-bold">{item.type}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    {item.from} <span className="text-slate-500 mx-1">→</span> {item.to}
                  </td>
                  <td className="px-6 py-4 text-sm">{item.days}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{item.manager}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 w-fit ${
                      item.status === 'approved' ? 'bg-emerald-500/10 text-emerald-400' : 
                      item.status === 'rejected' ? 'bg-accent/10 text-accent' : 
                      'bg-amber-500/10 text-amber-400'
                    }`}>
                      {item.status === 'approved' ? <CheckCircle size={12} /> : item.status === 'rejected' ? <XCircle size={12} /> : <Clock size={12} />}
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveHistory;
