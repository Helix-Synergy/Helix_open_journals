import React, { Suspense, useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import ScrollToTop from "./Pages/ScrollToTop";
import Footer from "./Pages/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = React.lazy(() => import("./Home"));
const AboutUs = React.lazy(() => import("./Components/AboutUs"));
const JournalPortfolio = React.lazy(() => import("./Components/JournalPortfolio"));
const ForAuthors = React.lazy(() => import("./Components/ForAuthors"));
const ForReviewer = React.lazy(() => import("./Components/ForReviewer"));
const EditorialBoard = React.lazy(() => import("./Components/EditorialBoard"));
const Publicationsethics = React.lazy(() => import("./Components/Publicationsethics"));
const News = React.lazy(() => import("./Components/News"));
const ContactUs = React.lazy(() => import("./Components/ContactUs"));

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // adjust duration

    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <Loader />;
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <ScrollToTop/>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/journals" element={<JournalPortfolio />} />
          <Route path="/for-authors" element={<ForAuthors />}></Route>
          <Route path="/for-reviewers" element={<ForReviewer />} />
          <Route path="/editorial-board" element={<EditorialBoard />} />
          <Route path="/ethics" element={<Publicationsethics />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  );
};

export default App;
