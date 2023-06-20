import logotype from 'images/goitLogotype.png';
import {
  CardWrapper,
  MiddleLine,
  AvatarOutLine,
  AvatarThumb,
  CardBackground,
  GoitLogotype,
  CardInfoWrapper,
  TweetersName,
  TweetsNumber,
  Followers,
  FollowBtn,
  StyledImg,
} from './TweeterCard.styled';

export default function TweeterCard({
  user,
  id,
  tweets,
  followers,
  avatar,
  setFollowing,
  isFollowing,
}) {
  const tweetsNumber = tweets.toLocaleString('en-EN');

  const onFollowNumber = (isFollowing ? 1 : 0) + followers;
  const followersNumber = onFollowNumber.toLocaleString('en-EN');

  return (
    <CardWrapper>
      <MiddleLine />
      <AvatarOutLine>
        <AvatarThumb>
          <StyledImg src={avatar} width="62" height="62" alt="user" />
        </AvatarThumb>
      </AvatarOutLine>
      <GoitLogotype>
        <img src={logotype} alt="logo" width="76" height="22"/>
      </GoitLogotype>
      <CardBackground />
      <CardInfoWrapper>
        <TweetersName>
          <strong>{user}</strong>
        </TweetersName>
        <TweetsNumber>{tweetsNumber} Tweets</TweetsNumber>
        <Followers>{followersNumber} Followers</Followers>
        <FollowBtn
          type="button"
          data-following={isFollowing}
          onClick={() => setFollowing(id)}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </FollowBtn>
      </CardInfoWrapper>
    </CardWrapper>
  );
}