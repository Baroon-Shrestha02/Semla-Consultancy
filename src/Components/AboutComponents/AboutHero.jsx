import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function AboutHero() {
  return (
    <HeroSection
      title="About Smela Educational Consultancy"
      description="Helping students achieve their dream of studying in Japan with expert guidance and end-to-end support."
      backgroundType="image"
      backgroundSrc="About/hero.jpg"
      height="70vh"
      overlay="gradient"
      textAlignment="bottom-left"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
  );
}
