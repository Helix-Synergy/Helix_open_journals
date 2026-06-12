import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// Custom hook for counting animation

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  
  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function: easeOutExpo
      // 1 - Math.pow(2, -10 * percentage)
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      const currentCount = Math.floor(ease * end);
      setCount(currentCount);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Use Intersection Observer to start animation when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrameId = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }


    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (countRef.current) observer.unobserve(countRef.current); // Cleanup observer
      observer.disconnect(); // Disconnect observer
    };
  }, [end, duration]);

  return { count, countRef };
};

const StatCard = ({ label, value, colorClass }) => {
  const { count, countRef } = useCounter(value);

  return (
    <div 
      ref={countRef}
      className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-transform duration-300 border border-gray-100"
    >
      <div className={`text-5xl font-extrabold mb-2 ${colorClass}`}>
        {count.toLocaleString()}
        <span className="text-3xl align-top">+</span>
      </div>
      <div className="text-gray-500 font-medium text-lg uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
};

const About = () => {
  const navigation=useNavigate();
  const HandleButton=()=>{
navigation("/about")
 window.scrollTo({ top: 0, behavior: "smooth" });
    }
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            About <span className="text-blue-600">Helix Open Access Journals</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center sm:text-justify">
Helix Open Access Journals is an independent academic publishing organization committed 
to advancing global knowledge through ethical, accessible, and impactful research 
dissemination. We support researchers, institutions, and policymakers by providing a credible 
platform for scholarly communication. 
</p>
{/* 
<p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center sm:text-justify">
  Fortune Journals follows a rigorous peer-review together with strict ethical policies and standards to ensure high quality scientific works to the field of scholarly publication. Fortune Journals uses best softwares for identifying plagiarism and it never accept articles with higher plagiarism. Articles published under Fortune Journals will be Open-Access articles which are distributed under the terms and conditions of the Creative Commons Attribution License version 4.0. Fortune Journals follows single blind peer-review process, manuscript submitted by an Author is assigned to a particular Editor.
</p> */}

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center pt-8">
          <StatCard 
            label="Journals" 
            value={31} 
            colorClass="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" 
          />
          <StatCard 
            label="Articles" 
            value={8044} 
            colorClass="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500" 
          />
          <StatCard 
            label="Editors" 
            value={1539} 
            colorClass="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500" 
          />
          <StatCard 
            label="Authors" 
            value={19168} 
            colorClass="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600" 
          />
        </div>

        {/* Bottom CTA or Decoration */}
        <div className="pt-12 text-center border-t border-gray-200">
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 cursor-pointer" onClick={HandleButton}>
            Learn More About Our Process
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
