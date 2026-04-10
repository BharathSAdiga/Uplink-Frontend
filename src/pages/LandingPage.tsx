import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { BrainCircuit, Sparkles, ArrowRight, Database, Zap } from "lucide-react";
import { ThemeToggle } from "../components/theme-toggle";
import { StarsBackground } from "../components/ui/stars";

// Typewriter effect for the demo bar
const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F3F0E5] dark:bg-[#121212] text-[#121212] dark:text-[#F3F0E5] font-sans selection:bg-[#121212] selection:text-[#F3F0E5] dark:selection:bg-[#F3F0E5] dark:selection:text-[#121212] transition-colors duration-500 overflow-x-hidden relative">
      
      {/* Header */}
      <header className="fixed top-0 w-full px-6 py-5 flex items-center justify-between z-50 bg-[#F3F0E5]/90 dark:bg-[#121212]/90 backdrop-blur-md border-b border-[#121212]/10 dark:border-[#F3F0E5]/10 transition-colors">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#121212] dark:text-[#F3F0E5]">
            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="3"/>
            <circle cx="3" cy="12" r="2.5" fill="currentColor"/>
          </svg>
          <span className="font-bold text-lg tracking-tight">UpLink</span>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/login" className="px-6 py-2.5 text-sm font-bold bg-[#121212] text-[#F3F0E5] dark:bg-[#F3F0E5] dark:text-[#121212] rounded-full hover:scale-105 transition-transform">
            Log In
          </Link>
        </div>
      </header>

      {/* Hero Section with Stars Background */}
      <StarsBackground className="relative pt-32 pb-20 min-h-screen flex flex-col items-center justify-center z-10 px-6">
        
        {/* Text Section */}
        <div className="text-center z-20 w-full max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#121212]/20 dark:border-[#F3F0E5]/20 mb-8 bg-[#F3F0E5]/50 dark:bg-[#121212]/50 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#121212] dark:bg-[#F3F0E5] animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">UpLink OS</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] mb-8"
          >
            Turn your data <br />
            <span className="italic font-light text-[#121212]/70 dark:text-[#F3F0E5]/70">into action.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-80 mb-16"
          >
            The intelligent operating system for students. UpLink analyzes your GitHub and notes to automatically schedule your next steps.
          </motion.p>

          {/* Integrated Demo Prompt Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative p-1 rounded-full bg-[#121212] dark:bg-[#F3F0E5] shadow-2xl w-full max-w-3xl mb-12"
          >
            <div className="bg-[#F3F0E5] dark:bg-[#121212] rounded-full p-3 md:p-4 flex items-center gap-3 md:gap-4 border border-[#121212] dark:border-[#F3F0E5]">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#121212] dark:bg-[#F3F0E5] text-[#F3F0E5] dark:text-[#121212] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="text-left flex-1 overflow-hidden">
                <p className="text-sm md:text-base font-medium">
                  <TypewriterText text="Analyze my recent commits and block 2 hours for deep work..." delay={800} />
                </p>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#121212] dark:bg-[#F3F0E5] text-[#F3F0E5] dark:text-[#121212] flex items-center justify-center shrink-0 cursor-pointer hover:scale-110 transition-transform">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/login" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold bg-[#121212] text-[#F3F0E5] dark:bg-[#F3F0E5] dark:text-[#121212] rounded-full hover:scale-105 transition-transform">
              Start Executing <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </StarsBackground>

      {/* Simplified Features Section */}
      <section className="py-24 relative z-20 border-t border-[#121212]/10 dark:border-[#F3F0E5]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              The ultimate execution loop.
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              We don't just show your data. We put it to work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Database, title: "Unify", desc: "Sync your GitHub, notes, and deadlines into one intelligent workspace." },
              { icon: BrainCircuit, title: "Understand", desc: "Our AI reads the context of your code to find exactly what you need to learn next." },
              { icon: Zap, title: "Execute", desc: "UpLink automatically pushes personalized tasks and focus blocks to your calendar." }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 rounded-3xl border-2 border-[#121212]/10 dark:border-[#F3F0E5]/10 hover:border-[#121212] dark:hover:border-[#F3F0E5] transition-colors">
                <div className="w-14 h-14 rounded-full border-2 border-[#121212] dark:border-[#F3F0E5] flex items-center justify-center mb-6 bg-[#121212] text-[#F3F0E5] dark:bg-[#F3F0E5] dark:text-[#121212]">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="opacity-70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Contrast Footer CTA */}
      <section className="relative bg-[#121212] text-[#F3F0E5] dark:bg-[#F3F0E5] dark:text-[#121212] py-32 overflow-hidden z-20">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter leading-[1.1]">
            Stop planning. <br/>
            <span className="italic font-light opacity-70">Start shipping.</span>
          </h2>
          <p className="text-lg md:text-xl opacity-80 leading-relaxed mb-10 max-w-xl mx-auto">
            Join the developers building unstoppable momentum with UpLink OS.
          </p>
          
          <Link to="/login" className="inline-flex items-center justify-center gap-3 text-lg font-bold bg-[#F3F0E5] text-[#121212] dark:bg-[#121212] dark:text-[#F3F0E5] px-8 py-4 rounded-full hover:scale-105 transition-transform">
            Enter UpLink <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
