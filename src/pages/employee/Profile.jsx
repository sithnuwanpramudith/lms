import React, { useState } from 'react';
import { User, Mail, Building, Shield, Lock, Camera, Edit2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-slate-400">Manage your personal information and account settings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="glass-card p-8 text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img 
                src={user?.avatar} 
                alt="Profile" 
                className="w-full h-full rounded-2xl border-4 border-primary-500/20 shadow-xl"
              />
              <button className="absolute bottom-[-10px] right-[-10px] p-2.5 bg-primary-600 rounded-xl shadow-lg border-2 border-slate-900 hover:bg-primary-500 transition-colors">
                <Camera size={18} />
              </button>
            </div>
            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-sm text-primary-400 font-bold uppercase tracking-widest mt-1">{user?.role}</p>
            <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={16} className="text-slate-500" />
                <span>{user?.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Building size={16} className="text-slate-500" />
                <span>Product Engineering</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold">General Information</h3>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="glass-button text-xs py-1.5"
              >
                <Edit2 size={14} /> {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                <input type="text" className="input-field" defaultValue={user?.name.split(' ')[0]} disabled={!isEditing} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                <input type="text" className="input-field" defaultValue={user?.name.split(' ')[1]} disabled={!isEditing} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Contact Number</label>
                <input type="text" className="input-field" defaultValue="+94 77 123 4567" disabled={!isEditing} />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Alternate Email</label>
                <input type="email" className="input-field" defaultValue="personal@mail.com" disabled={!isEditing} />
              </div>
            </div>
          </div>

          <div className="glass-card p-8 group hover:border-accent/30 transition-all">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
              <Lock className="text-accent" size={20} /> Security Settings
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-slate-400 mb-4">Update your password to keep your account secure.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="password" placeholder="Current Password" className="input-field" />
                <input type="password" placeholder="New Password" className="input-field" />
              </div>
              <button className="primary-button bg-gradient-to-r from-accent to-red-600 hover:from-red-600 hover:to-accent shadow-accent/20">Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
