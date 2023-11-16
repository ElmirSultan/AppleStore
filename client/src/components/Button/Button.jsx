import "./button.scss";

const Button = ({ buttonText, buttonClick,butonIcon }) => {
  return (
    <div className="button" onClick={buttonClick}>
      <p>{buttonText}</p>
      {butonIcon && <p className="buton-icon">{butonIcon}</p>}
    </div>
  );
};

export default Button;
