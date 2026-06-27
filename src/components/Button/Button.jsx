import React from "react";
import "./Button.css";

export const PrimaryButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  icon: Icon = null,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-primary ${className}`}
      {...props}
    >
      {Icon && <Icon className="btn-icon" />}
      <span>{children}</span>
    </button>
  );
};

export const SecondaryButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  icon: Icon = null,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-secondary ${className}`}
      {...props}
    >
      {Icon && <Icon className="btn-icon" />}
      <span>{children}</span>
    </button>
  );
};

export const OutlineButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  icon: Icon = null,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-outline ${className}`}
      {...props}
    >
      {Icon && <Icon className="btn-icon" />}
      <span>{children}</span>
    </button>
  );
};

export const GhostButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  icon: Icon = null,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-ghost ${className}`}
      {...props}
    >
      {Icon && <Icon className="btn-icon" />}
      <span>{children}</span>
    </button>
  );
};

export const GradientButton = ({
  children,
  onClick,
  className = "",
  disabled = false,
  icon: Icon = null,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-gradient ${className}`}
      {...props}
    >
      <span className="btn-gradient-content">
        {Icon && <Icon className="btn-icon" />}
        {children}
      </span>
    </button>
  );
};
