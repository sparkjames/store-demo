// import "./button.styles.scss";
import { BaseButton, HighlightButton, InvertedButton } from "./button.styles";

const buttonClassModifier = {
  highlight: 'button--highlight',
  invert: 'button--invert',
};

export const BUTTON_MODIFIERS = {
  base: 'base',
  highlight: 'highlight',
  google: 'highlight',
  inverted: 'invert',
};

const getButton = ( buttonType = BUTTON_MODIFIERS.base ) => (
  {
    [BUTTON_MODIFIERS.base]: BaseButton,
    [BUTTON_MODIFIERS.google]: HighlightButton,
    [BUTTON_MODIFIERS.highlight]: HighlightButton,
    [BUTTON_MODIFIERS.inverted]: InvertedButton,
  }[buttonType]
);

export const Button = ({ children, buttonModifier, ...otherProps }) => {
  // console.log('otherProps = ', otherProps);

  const CustomButton = getButton( buttonModifier );

  return (
    // <button className={`button ${buttonClassModifier[buttonModifier]}`} {...otherProps}>{children}</button>
    <CustomButton {...otherProps}>{children}</CustomButton>
  );
}

export default Button;
