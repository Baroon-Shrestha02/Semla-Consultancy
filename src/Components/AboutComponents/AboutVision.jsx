import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Eye,
  Target,
  ArrowRight,
  Sparkles,
  Globe,
  Users,
  BookOpen,
  Heart,
} from "lucide-react";

const sections = [
  {
    id: "vision",
    title: "Our Vision",
    subtitle: "Shaping the Future of Global Education",
    description:
      "We envision a world where geographical boundaries don't limit educational aspirations. Our vision is to create seamless pathways for students worldwide to access Japan's world-class education system, fostering cross-cultural understanding and building tomorrow's global leaders.",
    highlights: [
      {
        icon: Users,
        text: "Cultural Bridge Building",
        description: "Connecting diverse communities through education",
      },
      {
        icon: Sparkles,
        text: "Innovation in Learning",
        description: "Pioneering new approaches to student success",
      },
    ],
    stats: [
      { number: "10+", label: "Partner Universities" },
      { number: "500+", label: "Students Guided" },
      { number: "98%", label: "Success Rate" },
    ],
    layout: "text-left",
    bgColor: "bg-blue-50",
    accentColor: "text-blue-600",
    gradientFrom: "from-blue-500",
    gradientTo: "to-indigo-600",
  },
  {
    id: "mission",
    title: "Our Mission",
    subtitle: "Empowering Dreams Through Education",
    description:
      "Our mission is to provide comprehensive, personalized guidance to students seeking education in Japan. We are committed to excellence in every aspect of our service, from initial consultation to successful enrollment and beyond, ensuring each student's journey is supported with expertise, care, and dedication.",
    highlights: [
      {
        icon: BookOpen,
        text: "Comprehensive Guidance",
        description: "End-to-end support for your educational journey",
      },
      {
        icon: Heart,
        text: "Personalized Guidance",
        description: "Tailored solutions for each student's unique needs",
      },
    ],
    stats: [
      { number: "24/7", label: "Student Support" },
      { number: "100%", label: "Satisfaction Rate" },
      { number: "5+", label: "Years Experience" },
    ],
    layout: "text-right",
    bgColor: "bg-purple-50",
    accentColor: "text-purple-600",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-600",
  },
];

function SectionCard({ section, index }) {
  const [hoveredHighlight, setHoveredHighlight] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const isTextLeft = section.layout === "text-left";

  return (
    <div className={`min-h-screen relative overflow-hidden`}>
      <div className="container mx-auto px-6 relative z-10 mb-10 md:mb-0">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className={`flex items-center min-h-screen ${
            isTextLeft ? "flex-row" : "flex-row-reverse text-right"
          } gap-16`}
        >
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {section.title}
              </h2>

              <h3 className="text-2xl text-gray-600 font-light">
                {section.subtitle}
              </h3>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed max-w-2xl"
            >
              {section.description}
            </motion.p>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-4">
              {section.highlights.map((highlight, idx) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={idx}
                    onMouseEnter={() => setHoveredHighlight(idx)}
                    onMouseLeave={() => setHoveredHighlight(null)}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary text-white backdrop-blur-sm border border-white/50 cursor-pointer transition-all duration-300"
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${section.gradientFrom} ${section.gradientTo} text-white`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold ">{highlight.text}</h4>
                      <p className="text-sm">{highlight.description}</p>
                    </div>
                    <motion.div
                      animate={{ x: hoveredHighlight === idx ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className={`w-5 h-5 text-white`} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 pt-8">
              {section.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className={`text-3xl font-bold ${section.accentColor}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image/Visual Content */}
          <div className="flex-1">
            <motion.div variants={itemVariants} className="relative">
              {/* Main visual container */}
              <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-secondary shadow-2xl flex items-center justify-center">
                {/* Replace with your dummy image */}
                <img
                  src="About/bis.png" // replace with your image path
                  alt="Illustration"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function AboutVision() {
  return (
    <div className="relative">
      {sections.map((section, index) => (
        <SectionCard key={section.id} section={section} index={index} />
      ))}
    </div>
  );
}
