import React, { useState } from 'react';
import { Check, X, ShieldCheck, User, Calendar, MessageSquare, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FinalApproval = () => {
  const [requests, setRequests] = useState([
    { id: 101, name: 'Alice Johnson', type: 'Annual', from: '2024-03-20', to: '2024-03-25', manager: 'Admin', reason: 'Family trip', status: 'manager-approved' },
    { id: 102, name: 'John Doe', type: 'Sick', from: '2024-03-22', to: '2024-03-24', manager: 'Sarah (Team Lead)', reason: 'Severe flu', status: 'manager-approved' },
  ]);

  const handleFinalAction = (id, action) => {
    setRequests(requests.filter(req => req.id !== id));
    alert(`Final ${action === 'approve' ? 'Approval' : 'Rejection'} processed.`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Final Approval Queue</h1>
        <p className="text-slate-400">Perform final HR sign-off on manager-approved leave requests.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <AnimatePresence mode="popLayout">
          {requests.map((req) => (
            <motion.div
              key={req.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card p-8 border-l-4 border-l-emerald-500 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 p-4 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 rounded-bl-2xl">
                <ShieldCheck size={12} /> Manager Approved
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex items-center gap-4 min-w-[200px]">
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-2xl font-bold text-slate-300 shadow-xl">
                     {req.name[0]}
                   </div>
                   <div>
                      <h3 className="text-xl font-bold">{req.name}</h3>
                      <p className="text-sm text-primary-400 font-bold uppercase tracking-wider">{req.type} Leave</p>
                   </div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   <div className="space-y-1">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Requested Duration</p>
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Calendar size={16} className="text-slate-500" />
                        <span>{req.from} <span className="text-slate-500 mx-1">→</span> {req.to}</span>
                      </div>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Manager Verdict</p>
                      <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
                        <Check size={16} />
                        <span>Approved by {req.manager}</span>
                      </div>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Reason / Notes</p>
                      <div className="flex items-center gap-2 text-sm text-slate-400 italic">
                        <MessageSquare size={16} className="text-slate-500 shrink-0" />
                        <span className="truncate">"{req.reason}"</span>
                      </div>
                   </div>
                </div>

                <div className="flex md:flex-col gap-3 w-full md:w-auto mt-4 md:mt-0">
                   <button 
                     onClick={() => handleFinalAction(req.id, 'approve')}
                     className="flex-1 primary-button bg-gradient-to-r from-emerald-600 to-emerald-500 justify-center py-3"
                   >
                     Final Approve
                   </button>
                   <button 
                     onClick={() => handleFinalAction(req.id, 'reject')}
                     className="flex-1 glass-button border-accent/20 text-accent hover:bg-accent/10 justify-center py-3"
                   >
                     Reject
                   </button>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-6">
                 <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-400/5 px-3 py-1.5 rounded-lg border border-amber-400/20">
                   <AlertTriangle size={14} /> NO POLICY VIOLATIONS DETECTED
                 </div>
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Employee Balance after approval: 15 / 20 Days</p>
              </div>
            </motion.div>
          ))}
          {requests.length === 0 && (
            <div className="glass-card p-20 text-center">
               <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
                 <ShieldCheck size={32} />
               </div>
               <h3 className="text-xl font-bold">Queue Empty</h3>
               <p className="text-slate-500">All manager-approved requests have been processed.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FinalApproval;
