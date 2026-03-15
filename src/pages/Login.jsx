import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, ChevronRight, Eye, EyeOff } from 'lucide-react';
import logo from '../assets/logo_transparent.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingRole, setLoadingRole] = useState(null);
  const { login, mockLogin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadingRole('form');
    setError('');

    try {
      const userData = await login(email, password);
      navigate(`/${userData.role}/dashboard`);
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setIsLoading(false);
      setLoadingRole(null);
    }
  };

  const handleDemoLogin = async (role) => {
    setIsLoading(true);
    setLoadingRole(role);
    setError('');
    try {
      const userData = await mockLogin(role);
      navigate(`/${userData.role}/dashboard`);
    } catch (err) {
      setError('Demo login failed');
    } finally {
      setIsLoading(false);
      setLoadingRole(null);
    }
  };

  const getButtonClass = (role) => {
    const isThisRoleLoading = loadingRole === role;
    // Base classes for the grid buttons
    const base = "justify-center py-4 font-medium transition-all duration-300 ";
    
    if (isThisRoleLoading) {
      return "primary-button justify-center py-4 font-medium " + (isLoading ? 'scale-[1.02]' : '');
    }
    
    return "glass-button " + base + (isLoading ? 'opacity-50' : '');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-[-20%] left-[-20%] w-[80%] sm:w-[60%] h-[80%] sm:h-[60%] bg-primary-600/10 blur-[100px] sm:blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[80%] sm:w-[60%] h-[80%] sm:h-[60%] bg-accent/5 blur-[100px] sm:blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card w-full max-w-lg p-6 sm:p-10 relative z-10 border-white/5 shadow-2xl"
      >
        <div className="text-center mb-8 sm:mb-10">
          <div className="mb-6">
            <img 
              src={logo} 
              alt="Southern Province Logo" 
              className="w-24 h-24 mx-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
            <h2 className="text-white font-bold mt-4 tracking-widest text-sm sm:text-base">
              CHIEF MINISTRY - SOUTHERN PROVINCE
            </h2>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-sm sm:text-base text-slate-400">Sign in to manage your leave requests</p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-2"
          >
            <Shield size={16} /> {error}
          </motion.div>
        )}

        <form className="space-y-5 sm:space-y-6" onSubmit={handleLogin} autoComplete="off">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="input-field pl-12 border-white/5 text-sm sm:text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="••••••••" 
                className="input-field pl-12 pr-12 border-white/5 text-sm sm:text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm px-1 gap-3 sm:gap-1">
            <label className="flex items-center gap-2 cursor-pointer group text-slate-400 hover:text-slate-200 transition-colors">
              <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 accent-primary-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">Forgot Password?</a>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="primary-button w-full justify-center py-3 sm:py-4 text-base sm:text-lg font-bold"
          >
            {loadingRole === 'form' ? 'Signing in...' : 'Sign In'} <ChevronRight size={20} className="ml-2" />
          </button>

          <div className="relative py-2 sm:py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-[10px] sm:text-xs uppercase">
              <span className="bg-slate-950 px-2 text-slate-500">Or Quick Login</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <button 
              type="button"
              onClick={() => handleDemoLogin('Admin')}
              className={getButtonClass('Admin')}
              disabled={isLoading}
            >
              {loadingRole === 'Admin' ? 'Logging in...' : 'Admin Login'}
            </button>
            
            <button 
              type="button"
              onClick={() => handleDemoLogin('Employee')}
              className={getButtonClass('Employee')}
              disabled={isLoading}
            >
              {loadingRole === 'Employee' ? 'Logging in...' : 'Employee Login'}
            </button>

            <button 
              type="button"
              onClick={() => handleDemoLogin('Manager')}
              className={getButtonClass('Manager')}
              disabled={isLoading}
            >
              {loadingRole === 'Manager' ? 'Logging in...' : 'Manager Login'}
            </button>

            <button 
              type="button"
              onClick={() => handleDemoLogin('HR')}
              className={getButtonClass('HR')}
              disabled={isLoading}
            >
              {loadingRole === 'HR' ? 'Logging in...' : 'HR Login'}
            </button>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs sm:text-sm text-slate-500">
              Don't have an account? <a href="#" className="text-primary-400 hover:text-primary-300 font-medium transition-colors">Contact HR</a>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
