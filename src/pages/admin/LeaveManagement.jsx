import React, { useState } from 'react';
import { Check, X, Eye, Search, Filter, Calendar, User, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LeaveManagement = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Alice Johnson', type: 'Annual', from: '2024-03-20', to: '2024-03-25', reason: 'Family vacation', status: 'pending' },
    { id: 2, name: 'Bob Smith', type: 'Sick', from: '2024-03-15', to: '2024-03-16', reason: 'Medical checkup', status: 'approved' },
    { id: 3, name: 'Charlie Davis', type: 'Casual', from: '2024-03-18', to: '2024-03-18', reason: 'Personal matters', status: 'rejected' },
    { id: 4, name: 'John Doe', type: 'Sick', from: '2024-03-22', to: '2024-03-24', reason: 'Flu symptoms', status: 'pending' },
  ]);

  const [filter, setFilter] = useState('all');

  const filteredRequests = requests.filter(req => filter === 'all' || req.status === filter);

  const handleAction = (id, newStatus) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus } : req));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Leave Management</h1>
          <p className="text-slate-400">Review and manage employee leave requests.</p>
        </div>
        <div className="flex gap-2 bg-white/5 p-1 rounded-xl">
          {['all', 'pending', 'approved', 'rejected'].map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                filter === s ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredRequests.map((req) => (
            <motion.div
              key={req.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card p-6 flex flex-col md:flex-row md:items-center gap-6 group hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-4 min-w-[200px]">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center font-bold text-slate-300 group-hover:from-primary-600 group-hover:to-primary-700 transition-all">
                  {req.name[0]}
                </div>
                <div>
                  <p className="font-bold">{req.name}</p>
                  <p className="text-xs text-primary-400 font-semibold">{req.type} Leave</p>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Duration</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={14} className="text-slate-400" />
                    <span>{req.from} <span className="text-slate-500 mx-1">→</span> {req.to}</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Reason</p>
                  <div className="flex items-center gap-2 text-sm text-slate-300 italic">
                    <MessageCircle size={14} className="text-slate-500 shrink-0" />
                    <span className="truncate">"{req.reason}"</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Status</p>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    req.status === 'pending' ? 'bg-amber-500/10 text-amber-400' :
                    req.status === 'approved' ? 'bg-emerald-500/10 text-emerald-400' :
                    'bg-accent/10 text-accent'
                  }`}>
                    {req.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 md:ml-auto">
                {req.status === 'pending' ? (
                  <>
                    <button 
                      onClick={() => handleAction(req.id, 'approved')}
                      className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl hover:bg-emerald-500/20 transition-all"
                    >
                      <Check size={20} />
                    </button>
                    <button 
                      onClick={() => handleAction(req.id, 'rejected')}
                      className="p-2.5 bg-accent/10 text-accent rounded-xl hover:bg-accent/20 transition-all"
                    >
                      <X size={20} />
                    </button>
                  </>
                ) : (
                  <button className="glass-button py-2">View Details <Eye size={16} /></button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LeaveManagement;
