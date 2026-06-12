import React from "react";
import {
  FileText,
  ClipboardList,
  LayoutTemplate,
  ShieldCheck,
  Copyright,
  BadgeCheck,
  LifeBuoy,
} from "lucide-react";

const ForAuthors = () => {
  return (
    <div className="pt-28 space-y-24">

      {/* HERO */}
      <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden">
        <img
          src="/Images/ForAuthors.jpg"
          alt="For Authors"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-4 animate-fadeInUp">
            Author-Centric Publishing
          </h1>
          <p className="text-gray-200 max-w-2xl text-lg animate-fadeInUp delay-150">
            Streamlined, transparent, and supportive publishing designed for academic excellence.
          </p>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <Feature
          icon={<FileText />}
          title="Manuscript Categories"
          points={[
            "Original Research",
            "Review Articles",
            "Systematic Reviews",
            "Short Communications",
            "Case Reports",
            "Methodology Papers",
          ]}
        />

        <Feature
          icon={<ClipboardList />}
          title="Submission Requirements"
          points={[
            "Structured Abstract",
            "Keywords (5–8)",
            "ORCID IDs",
            "Ethical Approval",
            "COI Statement",
            "Funding Disclosure",
            "Data Availability",
          ]}
        />
    <Feature
          icon={<ShieldCheck />}
          title="Peer Review Framework"
          points={[
            "Initial Editorial Screening",
            "Double-Blind Review",
            "Expert Assessment",
            "Revision Monitoring",
            "Final Editorial Approval",
          ]}
        />
        <Feature
          icon={<LayoutTemplate />}
          title="Formatting & Templates"
          description="Standardized templates ensure consistency and rapid processing."
        />

    

        <Feature
          icon={<Copyright />}
          title="Open Access & Copyright"
          description="All articles are published under Creative Commons (CC BY 4.0) licenses."
        />

        <Feature
          icon={<BadgeCheck />}
          title="APC & Waiver Policy"
          description="Transparent APC structure with institutional and need-based waivers."
        />

        <Feature
          icon={<LifeBuoy />}
          title="Author Support Services"
          points={[
            "Language Editing",
            "Statistical Review",
            "Research Visibility",
            "Media Promotion",
          ]}
        />
      </div>

      {/* VIDEO SECTION (LAST) */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-2xl overflow-hidden shadow-xl group">

          <video
            src="/Images/Scene.mp4"
            className="w-full h-[60vh] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
              Publish With Confidence
            </h2>
            <p className="text-gray-200 max-w-xl">
              Experience transparent peer review, global visibility, and fast publication workflows.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ForAuthors;

const Feature = ({ icon, title, points, description }) => {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/70 backdrop-blur-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">

      {/* Neon Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/30 to-cyan-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition" />

      <div className="relative z-10 space-y-4">
        <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>

        {points && (
          <ul className="space-y-2 text-gray-700 text-sm">
            {points.map((item, i) => (
              <li key={i} className="border-l-2 border-indigo-500 pl-3">
                {item}
              </li>
            ))}
          </ul>
        )}

        {description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
