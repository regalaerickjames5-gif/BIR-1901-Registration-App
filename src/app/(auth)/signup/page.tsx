"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup and redirect to the form
    router.push('/form-1901');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col relative p-6">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--color-bir-yellow)] rounded-full flex items-center justify-center">
            <span className="text-[var(--color-bir-blue)] font-bold text-xl">B</span>
          </div>
          <span className="text-lg font-bold tracking-tight">Bureau of Internal Revenue</span>
        </div>
      </div>

      <Link href="/" className="absolute top-20 left-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors z-40">
        <ArrowLeft size={20} />
        Back to Home
      </Link>
      
      <div className="w-full max-w-md bg-slate-800/40 border border-slate-700 backdrop-blur-xl p-8 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden mt-32 mx-auto flex-1 flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-bir-red)] via-[var(--color-bir-yellow)] to-[var(--color-bir-blue)]"></div>
        
        <div className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-white">Create Account</h2>
            <p className="text-slate-400">Start your digital Form 1901 registration</p>
          </div>
          
          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300" htmlFor="name">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <User size={20} />
                </div>
                <input 
                  id="name"
                  type="text" 
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-bir-yellow)] focus:border-transparent transition-all text-white"
                  placeholder="Juan Dela Cruz"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300" htmlFor="email">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Mail size={20} />
                </div>
                <input 
                  id="email"
                  type="email" 
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-bir-yellow)] focus:border-transparent transition-all text-white"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300" htmlFor="password">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Lock size={20} />
                </div>
                <input 
                  id="password"
                  type="password" 
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-bir-yellow)] focus:border-transparent transition-all text-white"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300" htmlFor="confirm_password">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Lock size={20} />
                </div>
                <input 
                  id="confirm_password"
                  type="password" 
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--color-bir-yellow)] focus:border-transparent transition-all text-white"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[var(--color-bir-yellow)] text-[var(--color-bir-blue)] font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors shadow-lg mt-2"
            >
              Create Account
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <Link href="/login" className="text-[var(--color-bir-yellow)] font-semibold hover:underline">
              Log in instead
            </Link>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-bir-blue)] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--color-bir-red)] opacity-5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
