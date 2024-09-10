import "./Button.scss"; // Add styles in a separate CSS file or use inline styles

const Button = ({
  variant,
  onClick,
  children,
  text,
  className,
  type = "button",
}) => {
  // Determine the button class based on the variant
  const buttonClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <button
      type={type}
      className={`btn ${buttonClass} ${className}`}
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
