import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white font-sans selection:bg-[var(--color-bir-yellow)] selection:text-[var(--color-bir-blue)]">
      {/* Navigation Header */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--color-bir-yellow)] rounded-full flex items-center justify-center">
              <span className="text-[var(--color-bir-blue)] font-bold text-xl">B</span>
            </div>
            <span className="text-lg font-bold tracking-tight">Bureau of Internal Revenue</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/login" className="text-slate-300 hover:text-white transition-colors font-medium">Log in</Link>
            <Link href="/signup" className="bg-[var(--color-bir-yellow)] text-[var(--color-bir-blue)] px-5 py-2.5 rounded-lg font-semibold hover:bg-yellow-400 transition-all shadow-lg">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-16 pb-32 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Register your <br/>
            <span className="text-[var(--color-bir-yellow)]">
              Business
            </span>
            <br/> with ease.
          </h1>
          <p className="text-lg md:text-lg text-slate-300 max-w-lg leading-relaxed">
            Experience the streamlined BIR Form 1901. Apply for registration of self-employed and mixed income individuals, estates, and trusts digitally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href="/signup" className="flex items-center justify-center gap-2 bg-[var(--color-bir-yellow)] text-[var(--color-bir-blue)] px-8 py-3.5 rounded-lg font-bold text-base hover:bg-yellow-300 transition-colors shadow-lg">
              Start Application <ArrowRight size={20} />
            </Link>
            <Link href="/login" className="flex items-center justify-center gap-2 bg-slate-800 text-white border border-slate-700 px-8 py-3.5 rounded-lg font-bold text-base hover:bg-slate-700 transition-colors">
              Continue Draft
            </Link>
          </div>
        </div>
        
        {/* Decorative Graphic */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="bg-slate-800/40 border border-slate-700 backdrop-blur-xl p-8 rounded-2xl shadow-2xl space-y-6 relative overflow-hidden group hover:border-slate-600 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="flex justify-between items-center border-b border-slate-700 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-bir-red)]/20 flex items-center justify-center text-[var(--color-bir-red)]">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Form 1901</h3>
                  <p className="text-sm text-slate-400">Application for Registration</p>
                </div>
              </div>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-md text-xs font-semibold">Active</span>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: Shield, title: 'Secure & Encrypted', desc: 'Your data is protected by industry standards.' },
                { icon: CheckCircle, title: 'Fast Processing', desc: 'Automated verification speeds up your application.' },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-lg bg-slate-800/30 border border-slate-700 hover:bg-slate-800/50 transition-colors">
                  <feature.icon className="text-[var(--color-bir-yellow)] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-slate-400 mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-bir-blue)] opacity-10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-bir-yellow)] opacity-5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
      </div>
    </div>
  );
}
