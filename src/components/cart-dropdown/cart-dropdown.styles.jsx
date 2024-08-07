import styled from "styled-components";

import { BaseButton, HighlightButton, InvertedButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 100%;
  right: 0;
  z-index: 5;

  ${BaseButton}, ${HighlightButton}, ${InvertedButton} {
    margin-top: auto;
  }
`;

export const CartDropdownEmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartDropdownList = styled.ul`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  list-style: none;
`;

// .cartDropdown {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 100%;
//   right: 0;
//   z-index: 5;

//   button {
//     margin-top: auto;
//   }
// }

// .cartDropdown-empty-message {
//   font-size: 18px;
//   margin: 50px auto;
// }

// .cartDropdown-list {
//   height: 240px;
//   display: flex;
//   flex-direction: column;
//   overflow: auto;
//   list-style: none;
// }
