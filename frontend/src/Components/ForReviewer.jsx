import React from "react";
import { ShieldCheck, Clock, Scale, Lock, Award, Globe, UserPlus } from "lucide-react";
import { FaOrcid } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ForReviewer = () => {
  const navigate=useNavigate();
  const HandleApply=()=>{
navigate("/contact")
  }
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-2 text-indigo-600">
            <Globe className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm">Global Reviewer Network</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Reviewer Community
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600">
            Helix recognizes reviewers as essential partners in maintaining
            academic integrity and publication excellence worldwide.
          </p>
        </div>

        {/* Responsibilities + Recognition */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Responsibilities */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              Reviewer Responsibilities
            </h2>

            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <Scale className="w-5 h-5 text-indigo-500" />
                Objective Assessment
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-indigo-500" />
                Ethical Compliance
              </li>
              <li className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-indigo-500" />
                Confidentiality
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-indigo-500" />
                Timely Reviews
              </li>
            </ul>
          </div>

          {/* Recognition */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-500" />
              Recognition Program
            </h2>

            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3">
                <Award className="w-5 h-5 text-yellow-500" />
                Reviewer Certificates
              </li>
              <li className="flex items-center gap-3">
                <Award className="w-5 h-5 text-yellow-500" />
                Annual Acknowledgment
              </li>
              <li className="flex items-center gap-3">
                <FaOrcid className="w-5 h-5 text-green-600" />
                ORCID Integration
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-10">
          <h3 className="text-2xl font-semibold mb-4" >
            Join as a Reviewer
          </h3>

          <p className="text-slate-600 mb-6">
            Online registration with verified academic credentials.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-8 py-3 font-semibold text-white shadow-md hover:scale-105 hover:shadow-indigo-500/30 transition-all duration-300 cursor-pointer" onClick={HandleApply}>
            <UserPlus className="w-5 h-5" />
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForReviewer;
