import React, { useState } from 'react';
import { Check, X, Eye, Clock, MessageSquare, User, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamApprovals = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: 'John Doe', type: 'Annual', from: '2024-03-25', to: '2024-03-30', days: 5, reason: 'Family trip to Kandy', status: 'pending' },
    { id: 2, name: 'Sarah Wilson', type: 'Sick', from: '2024-03-16', to: '2024-03-17', days: 2, reason: 'Severe fever', status: 'pending' },
    { id: 3, name: 'Michael Chen', type: 'Casual', from: '2024-03-20', to: '2024-03-20', days: 1, reason: 'Personal emergency', status: 'pending' },
  ]);

  const handleAction = (id, action) => {
    setRequests(requests.filter(req => req.id !== id));
    alert(`Request ${action === 'approve' ? 'Approved' : 'Rejected'} successfully!`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Team Approvals</h1>
        <p className="text-slate-400">Review and action leave requests from your team members.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <AnimatePresence mode="popLayout">
          {requests.map((req) => (
            <motion.div
              key={req.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card p-0 overflow-hidden flex flex-col md:flex-row group border-l-4 border-l-primary-500"
            >
              <div className="p-8 flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center font-bold text-slate-300 text-xl group-hover:from-primary-600 group-hover:to-primary-700 transition-all shadow-lg">
                    {req.name[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{req.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-primary-500/10 text-primary-400 rounded-md">
                        {req.type} Leave
                      </span>
                      <span className="text-xs text-slate-500">• {req.days} days requested</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Calendar className="text-slate-500" size={18} />
                      <span className="font-medium text-slate-400">Period:</span>
                      <span>{req.from} <span className="text-slate-500 font-normal mx-1">to</span> {req.to}</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-slate-300">
                      <MessageSquare className="text-slate-500 mt-0.5" size={18} />
                      <span className="font-medium text-slate-400 shrink-0">Reason:</span>
                      <span className="italic">"{req.reason}"</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Check size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Balance After</p>
                      <p className="text-sm font-bold">12 / 20 Days Remaining</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border-l border-white/5 p-6 flex flex-row md:flex-col justify-center gap-3 md:w-48">
                <button 
                  onClick={() => handleAction(req.id, 'approve')}
                  className="flex-1 primary-button justify-center py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 shadow-emerald-500/20"
                >
                  <Check size={18} /> Approve
                </button>
                <button 
                  onClick={() => handleAction(req.id, 'reject')}
                  className="flex-1 glass-button justify-center py-3 border-accent/20 hover:bg-accent/10 hover:text-accent hover:border-accent/40"
                >
                  <X size={18} /> Reject
                </button>
                <button className="hidden md:flex glass-button justify-center py-3">
                  <Eye size={18} /> View History
                </button>
              </div>
            </motion.div>
          ))}
          {requests.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-20 text-center">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                <Check size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">All Caught Up!</h3>
              <p className="text-slate-500">No pending leave requests to review at this time.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TeamApprovals;
