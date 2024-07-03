import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CategoryPreviewTitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const CategoryPreviewPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

// .categoryPreview {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;
// }

// .categoryPreview-titleLink {
//   font-size: 28px;
//   margin-bottom: 25px;
//   cursor: pointer;
// }

// .categoryPreview-preview {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 20px;
// }
