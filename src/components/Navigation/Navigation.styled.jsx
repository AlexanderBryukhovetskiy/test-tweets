import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationWrapper = styled.div`
  display: flex;
  gap: 120px;
  justify-content: space-around;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 40px;
  padding: 6px;
  text-decoration: none;
  color: #ebd8ff;
  font-weight: 600;

  &:hover, &:focus {
    color:#5CD3A8;
  }

  &.active {
    color: #5CD3A8;
    text-decoration: underline;
  }
`;