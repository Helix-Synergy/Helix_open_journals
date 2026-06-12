import React from "react";
import { BookOpen, Target, FileCheck, Send ,Landmark,MessageSquareCode  } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-8 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* About Section */}
        <section className="animate-fadeInUp text-center space-y-6">
          {/* Icon */}
          <div className="flex justify-center mb-4">
         <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 transform transition-transform duration-500 hover:scale-110">
  <BookOpen size={26} />
</div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 animate-fadeInUp">
            About Helix Open Access Journals
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto animate-fadeInUp delay-75">
            <span className="font-semibold">Helix Open Access Journals</span> is
            an independent academic publishing organization committed to
            advancing global knowledge through ethical, accessible, and
            impactful research dissemination. We support researchers,
            institutions, and policymakers by providing a credible platform for
            scholarly communication.
          </p>

          {/* Subsection */}
          <div className="space-y-2 animate-fadeInUp delay-150">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Our Identity
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Helix Open Access Journals operates as a multidisciplinary
              scholarly publisher dedicated to excellence in academic
              communication. We bridge researchers and global audiences through
              transparent, sustainable, and high-impact publishing practices.
            </p>
          </div>
        </section>

        {/* Grid Layout for Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission Section */}
          <section className="bg-white rounded-2xl shadow-md p-6 sm:p-10 hover:shadow-xl transition-shadow duration-300 animate-fadeInUp delay-100 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                <Target size={26} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              To democratize scientific knowledge by ensuring unrestricted
              global access to rigorously peer-reviewed research.
            </p>
          </section>

          {/* Vision Section */}
          <section className="bg-white rounded-2xl shadow-md p-6 sm:p-10 hover:shadow-xl transition-shadow duration-300 animate-fadeInUp delay-150 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-green-100 text-green-600 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                <FileCheck size={26} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              To become a globally recognized open access publisher fostering
              innovation, integrity, and interdisciplinary collaboration.
            </p>
          </section>

          {/* Core Values */}
          <section className="bg-white rounded-2xl shadow-md p-6 sm:p-10 hover:shadow-xl transition-shadow duration-300 animate-fadeInUp delay-200 group">
            <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-xl bg-violet-100 text-[#2f1772]
                          group-hover:scale-110 transition-transform duration-300 animate-pulse">
                <MessageSquareCode size={26} />
                </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Core Values
            </h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Academic Integrity</li>
              <li>Editorial Independence</li>
              <li>Transparency</li>
              <li>Inclusivity</li>
              <li>Research Excellence</li>
            </ul>

          </section>

          {/* Governance Section */}
          <section className="bg-white rounded-2xl shadow-md p-6 sm:p-10 hover:shadow-xl transition-shadow duration-300 animate-fadeInUp delay-250 group">
            <div className="flex items-center gap-4 mb-4">
               <div className="p-3 rounded-xl bg-orange-100 text-orange-600 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                <Landmark size={26} />
              </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Governance & Editorial Leadership
            </h3>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our journals are governed by internationally recognized editors,
              advisory board members, and subject specialists who ensure
              compliance with global publishing standards.
            </p>
          </section>
        </div>

        {/* Submission Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-6 sm:p-10 text-white animate-fadeInUp delay-300">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-white/20 animate-bounce">
              <Send size={26} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Submission of Articles
            </h3>
          </div>
          <p className="text-base sm:text-lg leading-relaxed mb-4 max-w-3xl">
            Authors are invited to submit their research articles and review
            papers formatted as per the author guidelines.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
