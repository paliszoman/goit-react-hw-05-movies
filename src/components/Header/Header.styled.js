import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  padding: 8px 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;
export const Link = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;

  &.active {
    color: red;
    background-color: #12ca21;
  }
`;
