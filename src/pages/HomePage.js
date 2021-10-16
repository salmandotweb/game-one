import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import InvestSection from "../sections/InvestSection/InvestSection";
import FeatureSection from "../sections/FeatureSection/FeatureSection";
import CarouselSection from "../sections/CarouselSection/CarouselSection";
import PartnerBanner from "../components/PartnerBanner/PartnerBanner";
import Footer from "../components/Footer/Footer";

export default function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Header />
      <InvestSection />
      <FeatureSection />
      <Banner />
      <CarouselSection />
      <PartnerBanner />
      <Footer />
    </div>
  );
}
