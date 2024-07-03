import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 9em;
  width: auto;
  padding: .66em 1em;
  font-size: 15px;
  background-color: black;
  color: white;
  letter-spacing: .05em;
  font-family: 'Open Sans';
  font-weight: 700;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const HighlightButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

// .button {
//   min-width: 9em;
//   width: auto;
//   padding: .66em 1em;
//   font-size: 15px;
//   background-color: black;
//   color: white;
//   letter-spacing: .05em;
//   font-family: 'Open Sans';
//   font-weight: 700;
//   border: 1px solid transparent;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &:hover {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//   }

// }

// .button--highlight {
//   background-color: #4285f4;
//   color: white;

//   &:hover {
//     background-color: #357ae8;
//   }
// }

// .button--invert {
//   background-color: white;
//   color: black;
//   border: 1px solid black;

//   &:hover {
//     background-color: black;
//     color: white;
//     border: none;
//   }
// }
