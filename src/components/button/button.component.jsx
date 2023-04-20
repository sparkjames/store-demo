import "./button.styles.scss";

const buttonClassModifier = {
  highlight: 'button--highlight',
  invert: 'button--invert',
};

const Button = ({ buttonChildren, buttonModifier, ...otherProps }) => {
  return (
    <button className={`button ${buttonClassModifier[buttonModifier]}`} {...otherProps}></button>
  );
}

export default Button;