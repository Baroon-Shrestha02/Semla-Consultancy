import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function ContactVisit() {
  const [isMapInteractive, setIsMapInteractive] = useState(false);

  const officeHours = [
    { day: "Sunday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "Closed" },
  ];

  const address = "Chabahil, Kathmandu, Nepal";
  const phoneNumber = "+977 9813960567";

  const handleGetDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    alert(`Phone number copied: ${phoneNumber}`);
  };

  const handleOpenMap = () => {
    handleGetDirections();
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-secondary">Office</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Drop by our office for a face-to-face consultation and personalized
            guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                We'd Love to Meet You
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Visit our office to discuss your goals, explore university
                options, and get expert advice tailored to your needs.
              </p>
            </div>

            {/* Office Details */}
            <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Office Details
              </h4>

              {/* Address */}
              <motion.div
                className="flex items-start space-x-4 cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={handleOpenMap}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Address</h5>
                  <p className="text-gray-600">
                    Semla Educational Consultancy
                    <br />
                    {address}
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-start space-x-4 cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={handleCopyPhone}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">Phone</h5>
                  <p className="text-gray-600">{phoneNumber}</p>
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Office Hours
                  </h5>
                  <div className="space-y-1">
                    {officeHours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="text-gray-900 font-medium">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleGetDirections}
                className="flex items-center justify-center bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Navigation className="w-5 h-5 mr-2" /> Get Directions
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gray-100 rounded-2xl shadow-xl overflow-hidden h-[600px]">
              <div
                className="w-full h-full relative cursor-pointer"
                onMouseEnter={() => setIsMapInteractive(true)}
                onMouseLeave={() => setIsMapInteractive(false)}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.096058794945!2d85.3492534!3d27.7165448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197d9d23f7ed%3A0x2724281b4393865d!2sChabahil%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1756288594793!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className={`transition-all duration-300 ${
                    isMapInteractive ? "scale-105" : "scale-100"
                  }`}
                  title="Semla Educational Consultancy Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
