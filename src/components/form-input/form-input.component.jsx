// import './form-input.styles.scss';
import { SignUpFormFieldGroup, SignUpFormInput, SignUpFormLabel } from './form-input.styles';

const FormInput = ({label, ...otherProps}) => {
  return (
    <SignUpFormFieldGroup>
      <SignUpFormInput {...otherProps} />
      {label && (
        <SignUpFormLabel htmlFor={otherProps?.id} shrink={otherProps.value.length}>{label}</SignUpFormLabel>
      )}
    </SignUpFormFieldGroup>
  );
}

export default FormInput;
