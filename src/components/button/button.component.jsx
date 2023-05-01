import "./button.styles.scss";

const buttonClassModifier = {
  highlight: 'button--highlight',
  invert: 'button--invert',
};

const Button = ({ children, buttonModifier, ...otherProps }) => {
  // console.log('otherProps = ', otherProps);
  return (
    <button className={`button ${buttonClassModifier[buttonModifier]}`} {...otherProps}>{children}</button>
  );
}

export default Button;