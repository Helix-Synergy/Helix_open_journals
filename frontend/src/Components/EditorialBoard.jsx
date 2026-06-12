import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { University, Search, Fingerprint, BookOpen, UserCheck, Award, Globe } from 'lucide-react';

const InfoCard = ({ text, icon: Icon, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="group relative h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-xl perspective-1000 cursor-pointer"
        >
             <div 
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="flex items-center gap-4"
            >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {text}
                </h3>
            </div>
             <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    );
};

const EditorialBoard = () => {
    const items = [
        { text: 'Academic Affiliation', icon: University },
        { text: 'Research Interests', icon: Search },
        { text: 'ORCID / Scopus ID', icon: Fingerprint },
        { text: 'Publications', icon: BookOpen },
    ];

    return (
        <div className="min-h-screen pt-28 pb-20 bg-slate-50 overflow-hidden relative selection:bg-indigo-100 selection:text-indigo-900">
             {/* Background Decoration */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-white to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
                
                {/* Content Section */}
                <div className="flex-1 w-full">
                     <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-600 mb-6">
                            <UserCheck className="w-4 h-4 text-indigo-500" />
                            Official Board
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 font-display">
                            Editorial <span className="text-indigo-600">Board</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
                            Our distinguished board consists of world-renowned experts dedicated to maintaining the highest scientific standards.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {items.map((item, index) => (
                            <InfoCard key={index} {...item} index={index} />
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                <motion.div 
                    initial={{ opacity: 0, x: 50, rotate: 2 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex-1 w-full max-w-[500px] lg:max-w-none"
                >
                    <div className="relative group perspective-1000">
                         {/* Frame/Backdrop */}
                        <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-6 opacity-10 group-hover:rotate-12 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-slate-200 rounded-3xl -rotate-3 opacity-20 group-hover:-rotate-6 transition-transform duration-500" />
                        
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                             {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
                            
                             {/* The Image */}
                            <motion.img 
                                src="/Images/Editorial.jpg" 
                                alt="Editorial Board" 
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    aspectRatio: "4/5"
                                }}
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4">
                                <div className="p-3 bg-indigo-100 rounded-full">
                                    <Globe className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Global Reach</p>
                                    <p className="text-lg font-bold text-slate-900">50+ Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default EditorialBoard;
