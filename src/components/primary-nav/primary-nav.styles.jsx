import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
`;

export const LogoContainer = styled(Link)`

`;

export const PrimaryNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const PrimaryNavItem = styled.li`
  position: relative;
`;

export const PrimaryNavLink = styled(Link)`
  padding: 1rem 1.5rem;
  cursor: pointer;
`;

// .primaryNav {
//   display: flex;
//   justify-content: space-between;
//   gap: 2rem;
//   padding: 2rem;
// }

// .primaryNav-list {
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// }

// .primaryNav-link {
//   padding: 1rem 1.5rem;
//   cursor: pointer;
// }

// .primaryNav-item {
//   position: relative;
// }
