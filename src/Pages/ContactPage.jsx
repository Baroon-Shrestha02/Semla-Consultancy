import React from "react";
import ContactHero from "../Components/ContactComponents/ContactHero.";
import ContactForm from "../Components/ContactComponents/ContactForm";
import ContactVisit from "../Components/ContactComponents/ContactVisit";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactVisit />
    </>
  );
}
