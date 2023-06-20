import styled from 'styled-components';
import cardBackgroundImg from 'images/cardBackgroundImg.png';

export const CardBackground = styled.div`
  height: 168px;
  width: 308px;
  background-image: url(${cardBackgroundImg});
`;

export const GoitLogotype = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const StyledImg = styled.img`
  border-radius: 50%;
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  flex-basis: 380px;
  height: 480px;
  padding: 28px 36px;
  border-radius: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const MiddleLine = styled.div`
  position: absolute;
  left: 0;
  top: 214px; 
  height: 8px;
  width: 100%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarOutLine = styled.div`
  position: absolute;
  left: 150px;
  top: 178px;
  height: 80px;
  width: 80px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  `;

export const AvatarThumb = styled.div`
  width: 62px;
  height: 62px;
  background: #5736a3;
  border-radius: 50%;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 20px;
  line-height: 1.2;
  font-style: normal;
  color: #ebd8ff;
  text-transform: uppercase;
`;

export const TweetersName = styled.span`
  margin-bottom: 16px;
`;

export const TweetsNumber = styled.span`
  margin-bottom: 16px;
`;

export const Followers = styled.span`
  margin-bottom: 26px;
`;

export const FollowBtn = styled.button`
  width: 196px;
  height: 50px;
  border-radius: 10px;
  border: none;
  outline: none;

  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: #373737;

  background-color: ${props =>
    props[`data-following`] ? '#5CD3A8' : '#ebd8ff'};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  
  cursor: pointer;
`;