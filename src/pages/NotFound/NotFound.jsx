import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotFound.css";

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="not-found-page w-full min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse animation-delay-2"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 md:px-8"
      >
        {/* Animated 404 Number */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Page Not Found!
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg mx-auto"
        >
          Oops! The page you're looking for seems to have shifted gears and
          driven off. Let's get you back on track!
        </motion.p>

        {/* Animated Icon */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-7xl">🚗</div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Back to Home
            </button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Go Back
          </button>
        </motion.div>

        {/* Fun Message */}
        <motion.p
          variants={itemVariants}
          className="text-gray-500 mt-12 text-sm"
        >
          Error Code: <span className="text-red-500">404 - Parts Not Found</span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default NotFound;
