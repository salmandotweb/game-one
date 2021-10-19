import React, { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import InvestSection from "../sections/AvatarSection/InvestSection";
import FeatureSection from "../sections/FeatureSection/FeatureSection";
import PartnerBanner from "../components/PartnerBanner/PartnerBanner";
import Footer from "../components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import GraphSection from "../sections/GraphSection/GraphSection";

export default function HomeScreen() {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <InvestSection />
      <FeatureSection />
      <Banner />
      <GraphSection />
      <PartnerBanner />
      <Footer />
    </div>
  );
}
