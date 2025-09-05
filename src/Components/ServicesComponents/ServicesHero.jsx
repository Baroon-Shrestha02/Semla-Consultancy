import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function ServicesHero() {
  return (
    <>
      <HeroSection
        title="Our Services & Expertise"
        description="Providing comprehensive guidance for students aspiring to study in Japan, including admissions support, visa assistance, and personalized counseling."
        backgroundType="image"
        backgroundSrc="services/hero.jpg"
        height="70vh"
        overlay="gradient"
        textAlignment="bottom-left"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
    </>
  );
}
