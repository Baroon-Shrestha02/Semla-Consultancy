import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function FAQHero() {
  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        description="Everything you need to know about studying in Japan – from courses and universities to visas and scholarships."
        backgroundType="image"
        backgroundSrc="Uni/uni1.jpeg"
        height="70vh"
        overlay="gradient"
        textAlignment="bottom-left"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
    </>
  );
}
