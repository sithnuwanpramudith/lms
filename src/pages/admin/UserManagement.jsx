import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Search, Filter, MoreVertical, UserPlus, Mail, Shield, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@company.com', role: 'admin', department: 'IT', status: 'active' },
    { id: 2, name: 'Bob Smith', email: 'bob@company.com', role: 'manager', department: 'Sales', status: 'active' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@company.com', role: 'employee', department: 'HR', status: 'active' },
    { id: 4, name: 'Diana Prince', email: 'diana@company.com', role: 'hr', department: 'Administration', status: 'active' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@company.com', role: 'employee', department: 'Security', status: 'inactive' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-slate-400">Add, edit, and manage system users and their roles.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="primary-button"
        >
          <UserPlus size={20} /> Add New User
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex-1 max-w-md focus-within:border-primary-500/50 transition-all">
          <Search size={18} className="text-slate-500" />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            className="bg-transparent border-none outline-none text-sm w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="glass-button">
          <Filter size={18} /> Filters
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">User</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Role & Dept</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <AnimatePresence>
                {filteredUsers.map((user) => (
                  <motion.tr 
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center font-bold text-slate-300">
                          {user.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{user.name}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <Shield size={14} className="text-primary-400" />
                          <span className="text-xs font-bold uppercase tracking-wider text-primary-400">{user.role}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Briefcase size={14} />
                          <span className="text-xs">{user.department}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        user.status === 'active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-500/10 text-slate-500'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-primary-400 transition-colors">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-accent transition-colors">
                          <Trash2 size={16} />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Add User Modal Mockup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-sm bg-black/50">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card w-full max-w-md p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Add New User</h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase mb-1.5 block">Full Name</label>
                <input type="text" className="input-field" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase mb-1.5 block">Email Address</label>
                <input type="email" className="input-field" placeholder="john@company.com" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase mb-1.5 block">Role</label>
                  <select className="input-field">
                    <option>Employee</option>
                    <option>Manager</option>
                    <option>HR Officer</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase mb-1.5 block">Department</label>
                  <select className="input-field">
                    <option>IT</option>
                    <option>Sales</option>
                    <option>HR</option>
                    <option>Marketing</option>
                  </select>
                </div>
              </div>
              <div className="pt-6 flex gap-3">
                <button onClick={() => setIsModalOpen(false)} className="flex-1 glass-button justify-center">Cancel</button>
                <button className="flex-1 primary-button justify-center">Save User</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
