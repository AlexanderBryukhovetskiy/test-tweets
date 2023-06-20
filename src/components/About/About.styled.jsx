import styled from 'styled-components';

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
  text-indent: 40px;
  font-size: 24px;
  line-height: 1.6;
  color: #5736a3;
`;

export const AboutTitle = styled.h2`
  font-size: 45px;
  line-height: 50px;
  font-weight: 600;
  color: #5736a3;

  text-align: center;
  margin: 35px auto;
`;

export const StyledText = styled.p`
  font-size: 30px;
  line-height: 45px;
  font-weight: 500;
  text-align: justify;
`;

export const StyledSpan = styled.span`
  font-size: 30px;
  line-height: 45px;
  font-weight: 600;
  text-align: justify;

  &: hover,
  &: focus {
    font-weight: 700;
  }
`;