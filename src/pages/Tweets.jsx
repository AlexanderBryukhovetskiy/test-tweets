import TweetersList from 'components/TweetersList/TweetersList';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';
import { PageWrapper } from './pages.styled';

export default function Tweets() {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <TweetersList />
        </Container>
      </Section>
    </PageWrapper>
  );
}