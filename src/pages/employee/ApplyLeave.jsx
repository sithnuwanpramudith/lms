import React, { useState } from 'react';
import { Send, Calendar, MessageCircle, AlertCircle, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const ApplyLeave = () => {
  const [formData, setFormData] = useState({
    type: 'Annual',
    from: '',
    to: '',
    reason: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Leave request submitted successfully!');
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Apply for Leave</h1>
        <p className="text-slate-400">Please provide the details for your leave request.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Leave Type</label>
              <select 
                className="input-field"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option>Annual Leave</option>
                <option>Sick Leave</option>
                <option>Casual Leave</option>
                <option>Maternity/Paternity</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                  <Calendar size={14} /> From Date
                </label>
                <input 
                  type="date" 
                  className="input-field"
                  onChange={(e) => setFormData({...formData, from: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                  <Calendar size={14} /> To Date
                </label>
                <input 
                  type="date" 
                  className="input-field"
                  onChange={(e) => setFormData({...formData, to: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                <MessageCircle size={14} /> Reason for Leave
              </label>
              <textarea 
                rows="4" 
                className="input-field resize-none" 
                placeholder="Briefly explain the reason for your leave..."
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
              ></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="primary-button w-full justify-center py-4 text-lg">
                Submit Request <Send size={20} />
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 border-amber-500/20 bg-amber-500/5">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-amber-400">
              <AlertCircle size={20} /> Important Note
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0"></div>
                Submit requests at least 3 days in advance for annual leave.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0"></div>
                Medical certificate is required for sick leave over 2 days.
              </li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Info size={20} className="text-primary-400" /> Leaf Balance
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Annual</span>
                <span className="font-bold">15 / 20</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Sick</span>
                <span className="font-bold">08 / 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;
