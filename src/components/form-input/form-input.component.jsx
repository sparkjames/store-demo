import './form-input.styles.scss';

const FormInput = ({label, ...otherProps}) => {
  return (
    <div className="signUpForm-fieldGroup">
      <input className="signUpForm-input" {...otherProps} />
      {label && (
        <label htmlFor={otherProps?.id} className={`signUpForm-label ${otherProps.value.length ? 'signUpForm-label--shrink' : ''}`}>{label}</label>
      )}
    </div>
  );
}

export default FormInput;