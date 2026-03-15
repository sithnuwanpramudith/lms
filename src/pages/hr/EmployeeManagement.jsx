import React, { useState } from 'react';
import { Plus, Edit2, Search, Filter, Shield, Briefcase, Mail, Building, Trash2 } from 'lucide-react';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'David Miller', role: 'Staff Engineer', dept: 'Engineering', status: 'active', email: 'david@company.com' },
    { id: 2, name: 'Jessica Alba', role: 'Content Lead', dept: 'Marketing', status: 'active', email: 'jessica@company.com' },
    { id: 3, name: 'Robert Downey', role: 'Legal Officer', dept: 'Legal', status: 'leave', email: 'robert@company.com' },
    { id: 4, name: 'Scarlett Johansson', role: 'HR Manager', dept: 'HR', status: 'active', email: 'scarlett@company.com' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Employee Directory</h1>
          <p className="text-slate-400">View and manage all employees across the organization.</p>
        </div>
        <button className="primary-button"><Plus size={20} /> Add Employee</button>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex-1 max-w-md">
          <Search size={18} className="text-slate-500" />
          <input type="text" placeholder="Search by name, role or department..." className="bg-transparent border-none outline-none text-sm w-full" />
        </div>
        <button className="glass-button"><Filter size={18} /> Filters</button>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Employee</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Department & Role</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Contact</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-white/5 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-slate-400 group-hover:bg-primary-500/20 group-hover:text-primary-400 transition-all">
                      {emp.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{emp.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{emp.status}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                   <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold">
                        <Briefcase size={14} className="text-slate-500" /> {emp.role}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Building size={14} /> {emp.dept}
                      </div>
                   </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Mail size={14} /> {emp.email}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    emp.status === 'active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeManagement;
