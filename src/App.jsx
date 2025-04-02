import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MainPage from "./Components/Pages/MainPage/MainPage";
import ContactPage from "./Components/Pages/ContactPage/ContactPage";
import AboutPage from "./Components/Pages/AboutPage/AboutPage";
import ArtworksPage from "./Components/Pages/ArtworksPage/ArtworksPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/artworks" element={<ArtworksPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;