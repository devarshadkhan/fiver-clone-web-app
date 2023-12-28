import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componet/header";
import Footer from "./componet/footer";
import Home from "./pages/home";
import HowToHire from "./pages/how-to-hire";
import Layout from "./Layout";
import HowToFindWork from "./pages/how-to-find-work";
import Srevices from "./pages/services";




function App() {

  return (
    <>
  
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<>  <Header /> <Home /></>} />
          <Route path="/" element={<Layout />}>
          <Route path="why-skillzena/how-to-hire" element={<HowToHire />} />
          <Route path="why-skillzena/how-to-find-work" element={<HowToFindWork />} />
          <Route path="services" element={<Srevices />} />

          {/* <Route path="/blogs" element={<Blogs />} /> */}
          </Route>
       
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
