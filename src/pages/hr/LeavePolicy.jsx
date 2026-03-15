import React from 'react';
import { ShieldCheck, Plus, AlertCircle, Info, Clock, CheckCircle } from 'lucide-react';

const LeavePolicy = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Leave Policy Configuration</h1>
        <p className="text-slate-400">Define and manage organizational leave rules and entitlements.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-8">
             <h3 className="text-xl font-bold">Leave Entitlements</h3>
             <button className="primary-button text-xs py-1.5 px-3"><Plus size={14} /> Add Pattern</button>
          </div>
          <div className="space-y-4">
            {[
              { type: 'Annual Leave', days: 20, carryOver: '5 days', accrual: 'Monthly' },
              { type: 'Sick Leave', days: 10, carryOver: 'None', accrual: 'Yearly' },
              { type: 'Casual Leave', days: 7, carryOver: 'None', accrual: 'Monthly' },
              { type: 'Bereavement', days: 3, carryOver: 'None', accrual: 'Event-based' },
            ].map((p, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary-500/20 transition-all group">
                <div className="flex justify-between items-start mb-3">
                   <p className="font-bold text-lg group-hover:text-primary-400 transition-colors">{p.type}</p>
                   <span className="px-2 py-1 bg-primary-500/10 text-primary-400 text-[10px] font-bold uppercase rounded-md">{p.days} Days / Yr</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-slate-500">
                   <div className="flex items-center gap-2"><Clock size={12} /> Accrual: <span className="text-slate-300">{p.accrual}</span></div>
                   <div className="flex items-center gap-2"><ShieldCheck size={12} /> Carry Over: <span className="text-slate-300">{p.carryOver}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 border-amber-500/20 bg-amber-500/5">
             <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-amber-400">
               <AlertCircle size={20} /> System Critical Rules
             </h3>
             <div className="space-y-4 text-sm text-slate-400">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0"></div>
                  <span>Automatically block leave requests during the black-out period (Dec 20 - Jan 05).</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0"></div>
                  <span>Require manager approval for all leaves exceeding 3 consecutive business days.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0"></div>
                  <span>Escalate requests to HR if manager response time exceeds 48 hours.</span>
                </div>
             </div>
          </div>

          <div className="glass-card p-6">
             <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
               <CheckCircle className="text-emerald-400" size={20} /> Compliance Audit
             </h3>
             <p className="text-sm text-slate-500 mb-6">Last policy audit was completed on March 01, 2024. No major violations found.</p>
             <button className="w-full py-2.5 primary-button bg-gradient-to-r from-emerald-600 to-emerald-500 justify-center">Run New Audit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavePolicy;
