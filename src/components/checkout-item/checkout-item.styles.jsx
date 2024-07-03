import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr .5fr .5fr;
  gap: 20px;
  align-items: center;
`;

export const CheckoutItemButton = styled.div`
  appearance: none;
  background: transparent;
  border: 1px solid lightgray;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25em;
  height: 1.5em;
  width: 1.5em;
  transition: background-color 125ms, border-color 125ms, color 125ms;

  &:hover {
    background-color: gray;
    border-color: gray;
    color: white;
  }
`;

export const CheckoutItemQuantity = styled.div`
  display: flex;
  align-items: center;
  column-gap: .66em;
  height: max-content;
`;

export const CheckoutItemQuantityNumber = styled.div`
  font-size: 1.25em;
`;

export const CheckoutItemPrice = styled.p`
  font-size: 1.25em;
`;

// .checkout-item {
//   display: grid;
//   grid-template-columns: 1fr 2fr 1fr .5fr .5fr;
//   gap: 20px;
//   align-items: center;
// }

// .checkout-item-button {
//   appearance: none;
//   background: transparent;
//   border: 1px solid lightgray;
//   border-radius: 50%;
//   cursor: pointer;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: bold;
//   font-size: 1.25em;
//   height: 1.5em;
//   width: 1.5em;
//   transition: background-color 125ms, border-color 125ms, color 125ms;

//   &:hover {
//     background-color: gray;
//     border-color: gray;
//     color: white;
//   }
// }

// .checkout-item-quantity {
//   display: flex;
//   align-items: center;
//   column-gap: .66em;
//   height: max-content;
// }

// .checkout-item-quantity-number {
//   font-size: 1.25em;
// }

// .checkout-item-price {
//   font-size: 1.25em;
// }
