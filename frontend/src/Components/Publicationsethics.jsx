import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, FileText, Users, AlertTriangle, Database, BookOpen, Scale, Gavel } from 'lucide-react';

const EthicsCard = ({ title, description, icon, color }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

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
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full w-full rounded-xl bg-white p-8 shadow-xl border border-slate-100 group perspective-1000"
        >
            <div 
                style={{ 
                    transform: "translateZ(75px)", 
                    transformStyle: "preserve-3d" 
                }} 
                className="flex flex-col h-full"
            >
                <div className={`mb-6 p-4 rounded-xl w-fit ${color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800 tracking-tight">
                    {title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base flex-grow">
                    {description}
                </p>
                <div className="mt-6 w-12 h-1 bg-slate-200 rounded-full group-hover:bg-indigo-500 transition-colors duration-300" />
            </div>
            
            {/* Glossy overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    );
};

const Publicationsethics = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 15
            }
        }
    };

    const ethicsPoints = [
        {
            title: "Anti-Plagiarism",
            description: "Rigorous screening using industry-leading tools like Turnitin and iThenticate to ensure originality.",
            icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
            color: "bg-emerald-50"
        },
        {
            title: "COPE Compliance",
            description: "Strict adherence to the Committee on Publication Ethics guidelines for highest ethical standards.",
            icon: <Scale className="w-8 h-8 text-indigo-600" />,
            color: "bg-indigo-50"
        },
        {
            title: "Authorship Standards",
            description: "Transparent criteria for authorship to recognize all significant contributions accurately.",
            icon: <Users className="w-8 h-8 text-blue-600" />,
            color: "bg-blue-50"
        },
        {
            title: "Retraction Policy",
            description: "Clear protocols for corrections, retractions, and expressions of concern when necessary.",
            icon: <Gavel className="w-8 h-8 text-rose-600" />,
            color: "bg-rose-50"
        },
        {
            title: "Data Integrity",
            description: "Mandating partial or full data availability to verify results and promote reproducibility.",
            icon: <Database className="w-8 h-8 text-cyan-600" />,
            color: "bg-cyan-50"
        },
         {
            title: "Peer Review Process",
            description: "Double-blind peer review to ensure unbiased and high-quality assessment of manuscripts.",
            icon: <FileText className="w-8 h-8 text-violet-600" />,
            color: "bg-violet-50"
        }
    ];

    return (
        <div className="min-h-screen pt-28 pb-20 bg-slate-50 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                
                 {/* Decorative background elements - subtle and abstract */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-100/40 via-white to-transparent -z-10 text-center" />

                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20 max-w-3xl mx-auto"
                >
                  
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 font-display">
                        Ethical <span className="text-indigo-600">Framework</span>
                    </h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-light">
                        We are committed to maintaining the integrity of the scientific record through rigorous and transparent policies.
                    </p>
                </motion.div>

                {/* Grid Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 perspective-1000"
                >
                    {ethicsPoints.map((point, index) => (
                        <motion.div
                             key={index}
                             variants={itemVariants}
                             className="h-full"
                        >
                           <EthicsCard {...point} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Publicationsethics;
