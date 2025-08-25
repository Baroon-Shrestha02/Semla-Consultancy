import React from "react";
import ServicesHero from "../Components/ServicesComponents/ServicesHero";
import CoreServices from "../Components/ServicesComponents/CoreServices";
import ServicesCTA from "../Components/ServicesComponents/ServicesCTA";

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <CoreServices />
      <ServicesCTA />
    </div>
  );
}
