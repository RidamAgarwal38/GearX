import React from "react";
import { motion } from "framer-motion";
import "./GradientCard.css";

export const GradientCard = ({
  icon: Icon,
  title,
  description,
  gradient = "from-red-500 to-orange-500",
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="gradient-card"
      {...props}
    >
      <div className={`gradient-card-header bg-gradient-to-r ${gradient}`}>
        {Icon && <Icon className="gradient-card-icon" />}
      </div>
      <div className="gradient-card-body">
        <h3 className="gradient-card-title">{title}</h3>
        <p className="gradient-card-description">{description}</p>
      </div>
      <div className="gradient-card-footer">
        <a href="#" className="gradient-card-link">
          Learn More →
        </a>
      </div>
    </motion.div>
  );
};

export const GlassCard = ({
  children,
  hover = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className="glass-card-container"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const HoverCard = ({
  image,
  title,
  subtitle,
  description,
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="hover-card"
      {...props}
    >
      <div className="hover-card-image">
        {image && <img src={image} alt={title} />}
      </div>
      <div className="hover-card-content">
        {subtitle && <span className="hover-card-subtitle">{subtitle}</span>}
        <h3 className="hover-card-title">{title}</h3>
        {description && <p className="hover-card-description">{description}</p>}
      </div>
    </motion.div>
  );
};
