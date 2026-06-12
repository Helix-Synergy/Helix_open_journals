import React from "react";
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./Components/AboutUs";
import Loader from "./Components/Loader";
import { useState, useEffect } from "react";
import JournalPortfolio from "./Components/JournalPortfolio";
import ForAuthors from "./Components/ForAuthors";
import ForReviewer from "./Components/ForReviewer";
import EditorialBoard from "./Components/EditorialBoard";
import Publicationsethics from "./Components/Publicationsethics";
import News from "./Components/News";
import ContactUs from "./Components/ContactUs"
import ScrollToTop from "./Pages/ScrollToTop";
import Footer from "./Pages/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <Footer/>
    </div>
  );
};

export default App;
