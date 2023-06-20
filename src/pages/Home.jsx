import About from 'components/About/About';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import { PageWrapper } from './pages.styled';

export default function Footer() {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <About />
        </Container>
      </Section>
    </PageWrapper>
  );
}