import React from "react";

const JournalPortfolio = () => {
  return (
    <div className="pt-28 pb-20 px-4 max-w-6xl mx-auto space-y-16">

      {/* Overview */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Overview
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Helix publishes specialized, peer-reviewed journals serving scientific,
          medical, engineering, and interdisciplinary communities.
        </p>
      </section>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Journal Categories */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-80 md:gap-20">

        <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Journal Categories
        </h2>
<br />
        <ul className="space-y-3 text-gray-700">
          <li className="border-l-4 border-violet-600 pl-4">
            Life & Biological Sciences
          </li>
          <li className="border-l-4 border-violet-600 pl-4">
            Medical & Clinical Research
          </li>
          <li className="border-l-4 border-violet-600 pl-4">
            Pharmaceutical & Healthcare Sciences
          </li>
          <li className="border-l-4 border-violet-600 pl-4">
            Engineering & Applied Technology
          </li>
          <li className="border-l-4 border-violet-600 pl-4">
            Environmental & Agricultural Sciences
          </li>
          <li className="border-l-4 border-violet-600 pl-4">
            Interdisciplinary Research
          </li>
        </ul>
        </div>
        <div>
        <img
  src="/Images/journalsimage.jpg"
  alt="Journal categories"
  className="w-full md:w-[400px] h-60 md:h-80 object-cover rounded-xl shadow-lg"
/>
        </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Sample Journal Listing */}
      <section className="space-y-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Sample Journal Listing
        </h2>

        {/* Journal 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border-l-4 border-indigo-600 pl-6 space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Helix Journal of Life Sciences
          </h3>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Scope:</span> Molecular biology,
            biotechnology, applied biosciences
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">ISSN:</span> XXXX |{" "}
            <span className="font-medium text-gray-800">Frequency:</span> Quarterly
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Indexing:</span> Google Scholar, DOAJ (Applied)
          </p>
        </div>

        {/* Journal 2 */}
        <div className="border-l-4 border-indigo-600 pl-6 space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Helix Journal of Medical Research
          </h3>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Scope:</span> Clinical studies,
            public health, translational medicine
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">ISSN:</span> XXXX |{" "}
            <span className="font-medium text-gray-800">Frequency:</span> Quarterly
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Indexing:</span> Google Scholar, DOAJ (Applied)
          </p>
        </div>

        {/* Journal 3 */}
        <div className="border-l-4 border-indigo-600 pl-6 space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Helix Journal of Pharmaceutical Sciences
          </h3>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Scope:</span> Drug development,
            pharmacology, pharmaceutical analysis
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">ISSN:</span> XXXX |{" "}
            <span className="font-medium text-gray-800">Frequency:</span> Biannual
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Indexing:</span> Google Scholar, CrossRef
          </p>
        </div>

        {/* Journal 4 */}
        <div className="border-l-4 border-indigo-600 pl-6 space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Helix Journal of Engineering & Technology
          </h3>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Scope:</span> Mechanical,
            electrical, computer science & AI research
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">ISSN:</span> XXXX |{" "}
            <span className="font-medium text-gray-800">Frequency:</span> Quarterly
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Indexing:</span> Google Scholar, DOAJ (Applied)
          </p>
        </div>

        {/* Journal 5 */}
        <div className="border-l-4 border-indigo-600 pl-6 space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Helix Journal of Environmental Sciences
          </h3>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Scope:</span> Climate change,
            sustainability, agricultural sciences
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">ISSN:</span> XXXX |{" "}
            <span className="font-medium text-gray-800">Frequency:</span> Biannual
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Indexing:</span> Google Scholar, CrossRef
          </p>
        </div>

        {/* Journal 6 */}
        <div className="border-l-4 border-indigo-600 pl-6 space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Helix Journal of Interdisciplinary Research
          </h3>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Scope:</span> Multidisciplinary
            research, policy studies, innovation
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">ISSN:</span> XXXX |{" "}
            <span className="font-medium text-gray-800">Frequency:</span> Quarterly
          </p>
          <p className="text-gray-600">
            <span className="font-medium text-gray-800">Indexing:</span> Google Scholar, DOAJ (Applied)
          </p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default JournalPortfolio;
