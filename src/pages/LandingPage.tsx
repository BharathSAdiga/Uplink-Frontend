import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, BrainCircuit, GitBranch, CalendarClock } from "lucide-react";
import { ThemeToggle } from "../components/theme-toggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans selection:bg-purple-500/30 transition-colors duration-300">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-purple-600 dark:text-purple-400">
          UpLink<span className="text-neutral-900 dark:text-neutral-50">:</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/login"
            className="px-5 py-2.5 text-sm font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            The Data Exists.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-600">
              The Clarity Doesn't.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Modern students generate more data than ever — and understand less of it. 
            UpLink is the system that finally understands your progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-8 py-4 text-lg font-medium bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
            >
              Start Connecting Dots <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Problems Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
        >
          <div className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl backdrop-blur-sm shadow-xl shadow-neutral-200/50 dark:shadow-none transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <GitBranch className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-blue-100">Fragmented Progress</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Projects live on GitHub. Ideas die in notes. Deadlines hide in chats. Nothing talks to anything.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl backdrop-blur-sm shadow-xl shadow-neutral-200/50 dark:shadow-none transition-colors duration-300">
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl flex items-center justify-center mb-6">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-pink-100">Cognitive Overload</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Constant context-switching kills deep work. Spend energy managing tools, not building skills.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl backdrop-blur-sm shadow-xl shadow-neutral-200/50 dark:shadow-none transition-colors duration-300">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-6">
              <CalendarClock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-amber-100">Missed Momentum</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Hackathons pass unnoticed. Submission windows close. Progress goes unmeasured and unrewarded.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
