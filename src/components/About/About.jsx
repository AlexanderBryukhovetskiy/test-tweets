import { Link } from 'react-router-dom';
import { AboutWrapper, AboutTitle, StyledText, StyledSpan } from './About.styled';

export default function About() {
  return (
    <AboutWrapper>
      <AboutTitle>General information about this site</AboutTitle>
      <StyledText>
        In fact, this site is a Twitter simulator.
      </StyledText>
      <StyledText>
        All information on this site is invented only to demonstrate the functionality of the site.
      </StyledText>
      <StyledText>
        All cards presented on the site are unreal and do not belong to the persons or characters presented on them.
      </StyledText>
      <StyledText>
        Anyone can try out the site and become an imaginary follower of any of the presented tweets.
      </StyledText>
      <StyledText>  
      To view the main features of the site, follow the {' '}
          <Link to="/tweets" style={{ "color": "#5CD3A8"}}>
            <StyledSpan>link</StyledSpan>
          </Link>{' '}
      </StyledText>
    </AboutWrapper>
  );
}