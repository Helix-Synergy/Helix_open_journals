import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, FileText, TrendingUp, Award, Calendar, ArrowRight, Star, Bell } from 'lucide-react';

const NewsCard = ({ category, title, date, description, icon: Icon, colorClass, delay, span }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -5, scale: 1.01 }}
            className={`group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col ${span}`}
        >
            <div className={`absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-110 group-hover:-rotate-12`}>
                <Icon className={`w-32 h-32 ${colorClass}`} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${colorClass.replace('text-', 'bg-').replace('600', '100')} ${colorClass}`}>
                        {category}
                    </span>
                    <div className="flex items-center text-slate-400 text-sm font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        {date}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-slate-900">
                    {title}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                    {description}
                </p>

                <div className="flex items-center text-slate-900 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </div>
             <div className={`absolute inset-0 bg-gradient-to-br ${colorClass.replace('text-', 'from-').replace('600', '500')}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </motion.div>
    );
};

const News = () => {
    const newsItems = [
        {
            category: "Special Issue",
            title: "Artificial Intelligence in Modern Medicine",
            date: "Feb 15, 2026",
            description: "Submissions are now open for our upcoming special issue focusing on the transformative role of AI in diagnostics and patient care.",
            icon: Star,
            colorClass: "text-amber-600",
            span: "md:col-span-2 lg:col-span-2",
            delay: 0.1
        },
        {
            category: "Call for Papers",
            title: "Submit Your Research: Green Energy Technologies",
            date: "Mar 01, 2026",
            description: "We are inviting papers on sustainable energy solutions, storage systems, and grid modernization.",
            icon: FileText,
            colorClass: "text-indigo-600",
            span: "md:col-span-1 lg:col-span-1",
            delay: 0.2
        },
        {
            category: "Indexing Milestone",
            title: "Journal Now Indexed in Scopus",
            date: "Jan 20, 2026",
            description: "We are proud to announce that our journal has been accepted for inclusion in the Scopus database, marking a significant milestone in our growth.",
            icon: TrendingUp,
            colorClass: "text-emerald-600",
            span: "md:col-span-1 lg:col-span-1",
            delay: 0.3
        },
        {
            category: "Editorial Appointment",
            title: "Welcome Dr. Sarah Chen as Chief Editor",
            date: "Jan 10, 2026",
            description: "Dr. Chen brings over 20 years of experience in molecular biology and editorial leadership to our board.",
            icon: Award,
            colorClass: "text-violet-600",
            span: "md:col-span-2 lg:col-span-2",
            delay: 0.4
        },
        {
             category: "Announcement",
             title: "Annual Research Conference 2026",
             date: "Apr 05, 2026",
             description: "Join us this April for our annual gathering of researchers, scholars, and industry leaders.",
             icon: Megaphone,
             colorClass: "text-rose-600",
             span: "md:col-span-3 lg:col-span-3",
             delay: 0.5
        }
    ];

    return (
        <div className="min-h-screen pt-28 pb-20 bg-slate-50 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-600 mb-6">
                            <Bell className="w-4 h-4 text-indigo-500" />
                            Latest Updates
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 font-display">
                            News & <span className="text-indigo-600">Insights</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed font-light">
                            Stay up to date with the latest developments, calls for papers, and achievements from our editorial team.
                        </p>
                    </div>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {newsItems.map((item, index) => (
                        <NewsCard key={index} {...item} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default News;
