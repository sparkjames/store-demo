import styled from "styled-components";

export const ProductCardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  button {
    display: none;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    width: 80%;
  }

  &:hover {
    .product-card-image-container {
      opacity: 0.8;
    }

    button {
      display: flex;
      opacity: 0.85;
    }
  }
`;

export const ProductCardImageContainer = styled.div`
  height: 350px;
  margin-bottom: 5px;
  width: 100%;
`;

export const ProductCardImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const ProductCardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  gap: 20px;
  width: 100%;
`;

// .product-card {
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   width: 100%;

//   button {
//     display: none;
//     opacity: 0.7;
//     position: absolute;
//     top: 255px;
//     width: 80%;
//   }

//   &:hover {
//     .product-card-image-container {
//       opacity: 0.8;
//     }

//     button {
//       display: flex;
//       opacity: 0.85;
//     }
//   }

// }


// .product-card-image-container {
//   height: 350px;
//   margin-bottom: 5px;
//   width: 100%;
// }

// .product-card-image {
//   height: 100%;
//   object-fit: cover;
//   width: 100%;
// }

// .product-card-footer {
//   display: flex;
//   justify-content: space-between;
//   font-size: 18px;
//   gap: 20px;
//   width: 100%;
// }
