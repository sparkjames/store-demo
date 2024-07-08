import styled, { css } from "styled-components";

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  color: ${mainColor};
  font-size: 12px;
  top: -14px;
`;

export const SignUpFormFieldGroup = styled.div`
  position: relative;
`;

export const SignUpFormLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({shrink}) => shrink && shrinkLabelStyles}

`;

export const SignUpFormInput = styled.input`
  background-color: white;
  background: none;
  border-bottom: 1px solid ${subColor};
  border-radius: 0;
  border: none;
  color: ${subColor};
  display: block;
  font-size: 18px;
  margin-top: 24px;
  padding: 10px 10px 10px 5px;
  width: 100%;

  &[type='password'] {
    letter-spacing: 0.3em;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${SignUpFormLabel} {
    ${shrinkLabelStyles}
  }
`;

// $sub-color: grey;
// $main-color: black;

// @mixin shrinkLabel {
//   top: -14px;
//   font-size: 12px;
//   color: $main-color;
// }



// .signUpForm-fieldGroup {
//   position: relative;
// }


// .signUpForm-input {
//   background-color: white;
//   background: none;
//   border-bottom: 1px solid $sub-color;
//   border-radius: 0;
//   border: none;
//   color: $sub-color;
//   display: block;
//   font-size: 18px;
//   margin-top: 24px;
//   padding: 10px 10px 10px 5px;
//   width: 100%;

//   &[type='password'] {
//     letter-spacing: 0.3em;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:focus ~ .signUpForm-label {
//     @include shrinkLabel();
//   }
// }

// .signUpForm-label {
//   color: $sub-color;
//   font-size: 16px;
//   font-weight: normal;
//   position: absolute;
//   pointer-events: none;
//   left: 5px;
//   top: 10px;
//   transition: 300ms ease all;

//   &.signUpForm-label--shrink {
//     @include shrinkLabel();
//   }
// }
