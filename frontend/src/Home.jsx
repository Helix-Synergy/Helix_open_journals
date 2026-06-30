import React from "react";
import About from "./Pages/About";
import { useNavigate } from "react-router-dom";
import SEO from './Components/SEO';

const Home = () => {
  const navigate = useNavigate();

  const HandleSubmit = () => {
    navigate("/contact");
  }

  return (
    <div className="pt-28">
      <SEO title="Home" url="/" />
      
      {/* 👈 This pushes content below navbar */}
      <div className="relative w-full h-[100vh]">
        <img
          src="/Images/HomePage2.webp"
          alt="Image"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            Helix Open Access Journals
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
            A trusted international publishing platform delivering high-quality,
            ethically reviewed, and freely accessible scholarly research
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Key Highlights
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Highlight 1 --> */}
          <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            {/* <!-- Globe Icon for International Editorial Boards --> */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full transform group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20"
                />
              </svg>
            </div>
            <p className="text-gray-700 font-medium text-lg">
              International Editorial Boards
            </p>
          </li>

          <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            {/* <!-- Document Icon for Transparent Peer Review --> */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-full transform group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-gray-700 font-medium text-lg">
              Transparent Peer Review System
            </p>
          </li>

          {/* <!-- Highlight 5 --> */}
          <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group md:col-span-2 md:justify-self-center md:max-w-md w-full">
            {/* <!-- User Icon for Author-Centric Model --> */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-full transform group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A12.042 12.042 0 0112 15c2.5 0 4.847.78 6.879 2.112M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="text-gray-700 font-medium text-lg">
              Author-Centric Publishing Model
            </p>
          </li>

          {/* <!-- Highlight 3 --> */}
          <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            {/* <!-- Globe/Network Icon for DOI & Global Indexing --> */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full transform group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <p className="text-gray-700 font-medium text-lg">
              DOI & Global Indexing Support
            </p>
          </li>

          {/* <!-- Highlight 4 --> */}
          <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            {/* <!-- Clock Icon for Rapid Publication Workflow --> */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full transform group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-gray-700 font-medium text-lg">
              Rapid Publication Workflow
            </p>
          </li>

        </ul>
      </div>
      <div className="flex gap-4 justify-center mt-8">
        {/* <!-- Primary CTA --> */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition cursor-pointer" onClick={HandleSubmit}>
          Submit Manuscript
        </button>

        {/* <!-- Secondary CTA --> */}
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition cursor-pointer" onClick={HandleSubmit}>
          Explore Journals
        </button>
      </div>
      <About />
    </div>
  );
};

export default Home;
