import { StyledHeader,  HeaderWrapper, Title } from './Header.styled';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';


export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Title>
            Alternative Tweeter
          </Title>
          <Navigation />
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}