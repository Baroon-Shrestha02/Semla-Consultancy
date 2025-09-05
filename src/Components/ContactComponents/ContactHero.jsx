import React from "react";
import HeroSection from "../HelperComponents/HeroSection";

export default function ContactHero() {
  return (
    <div>
      <HeroSection
        title="Get in Touch with Us"
        description="Reach out to Smela Educational Consultancy for expert guidance on studying in Japan. We're here to answer your questions and assist you every step of the way."
        backgroundType="image"
        backgroundSrc="Main/contactHero.jpg"
        height="70vh"
        overlay="gradient"
        textAlignment="bottom-left"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
    </div>
  );
}
