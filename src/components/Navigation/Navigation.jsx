import { StyledNavLink, NavigationWrapper } from './Navigation.styled';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/tweets" end>
        Tweets
      </StyledNavLink>
    </NavigationWrapper>
  );
}