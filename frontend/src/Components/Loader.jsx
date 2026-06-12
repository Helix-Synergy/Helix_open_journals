import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]"
            />
        </div>

      <div className="flex flex-col items-center justify-center relative z-10">
        
        {/* Logo Container with Ripple Effect */}
        <div className="relative mb-8">
            {/* Ripples */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border border-indigo-500/30"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5 + i * 0.2] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeOut"
                    }}
                />
            ))}

            {/* Main Logo Animation */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative bg-white rounded-full p-6 shadow-2xl shadow-indigo-500/20"
            >
                <motion.img
                    src="/Images/HOAJ.png"
                    alt="Helix Journals Logo"
                    className="w-24 h-24 object-contain relative z-10"
                    animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                />
            </motion.div>
        </div>

        {/* Text Animation */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center space-y-2"
        >
            <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                Helix Open Access Journals
            </h3>
            <div className="flex items-center justify-center gap-1">
                <span className="text-sm font-medium text-slate-500">Loading Resources</span>
                <motion.span 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.1 }}
                >.</motion.span>
                <motion.span 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2, repeatDelay: 0.1 }}
                >.</motion.span>
                <motion.span 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.4, repeatDelay: 0.1 }}
                >.</motion.span>
            </div>
            
            {/* Custom Progress Bar */}
            <div className="w-48 h-1 bg-slate-100 rounded-full mt-4 overflow-hidden relative mx-auto">
                <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-sky-500 w-full"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
