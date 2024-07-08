import styled from "styled-components";

export const DirectoryItemImage = styled.img`
  display: block;
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  transform: scale(1);
  transform-origin: center;
  transition: transform 150ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
  width: 100%;
`;

export const DirectoryItemContainer = styled.div`
  align-items: center;
  border: 1px solid black;
  display: flex;
  flex: 1 1 auto;
  height: 240px;
  justify-content: center;
  margin: 0 7.5px 15px;
  min-width: 30%;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    & ${DirectoryItemImage} {
      transform: scale(1.1);
      transition: transform 400ms cubic-bezier(0, 0.86, 0.46, 2);
    }

  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const DirectoryItemBody = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: center;
  opacity: 0.7;
  padding: 0 25px;
  position: absolute;
`;

export const DirectoryItemName = styled.h2`
  color: #4a4a4a;
  font-size: 22px;
  font-weight: bold;
  margin: 0 6px 0;
`;

export const DirectoryItemDescription = styled.p`
  font-size: 16px;
  font-weight: lighter;
`;

// .directory-item-image {
//   display: block;
//   height: 100%;
//   left: 0;
//   object-fit: cover;
//   position: absolute;
//   top: 0;
//   transform: scale(1);
//   transform-origin: center;
//   transition: transform 150ms cubic-bezier(0.25, 0.45, 0.45, 0.95);
//   width: 100%;
// }

// .directory-item {
//   align-items: center;
//   border: 1px solid black;
//   display: flex;
//   flex: 1 1 auto;
//   height: 240px;
//   justify-content: center;
//   margin: 0 7.5px 15px;
//   min-width: 30%;
//   overflow: hidden;
//   position: relative;

//   &:hover {
//     cursor: pointer;

//     & .directory-item-image {
//       transform: scale(1.1);
//       transition: transform 400ms cubic-bezier(0, 0.86, 0.46, 2);
//     }

//     & .directory-item-body-container {
//       opacity: 0.9;
//     }
//   }

//   &.large {
//     height: 380px;
//   }

//   &:first-child {
//     margin-right: 7.5px;
//   }

//   &:last-child {
//     margin-left: 7.5px;
//   }
// }

// .directory-item-body {
//   align-items: center;
//   background-color: white;
//   border: 1px solid black;
//   display: flex;
//   flex-direction: column;
//   height: 90px;
//   justify-content: center;
//   opacity: 0.7;
//   padding: 0 25px;
//   position: absolute;
// }

// .directory-item-name {
//   color: #4a4a4a;
//   font-size: 22px;
//   font-weight: bold;
//   margin: 0 6px 0;
// }

// .directory-item-description {
//   font-size: 16px;
//   font-weight: lighter;
// }
