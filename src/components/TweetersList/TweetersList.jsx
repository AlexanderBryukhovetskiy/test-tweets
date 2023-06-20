import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCards } from 'services/api';

import {
  CardListContainer,
  CardsList,
  CardListWrapper,
  MenuContainer,
  BackBtn,
  LoadMoreBtn,
  DropdownLabel,
  EmptyFilterMessage,
  StyledSelect,
} from './TweetersList.styled';
import TweeterCard from 'components/TweeterCard/TweeterCard';

export default function TweetsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState({ page: 1, limit: 3 });
  const [tweeters, setTweeters] = useState([]);
  const [filter, setFilter] = useState('show all');
  const [noMatchFilter, setNoMatchFilter] = useState(false);
  const loadMoreBtnRef = useRef(null);
  const [followTweeters, setFollowTweeters] = useState(() => {
    const savedTweeters = JSON.parse(localStorage.getItem(`followTweeters`));
    return savedTweeters ? savedTweeters : {};
  });

  useEffect(() => {
    setSearchParams({ page: 1, limit: params.limit });
    (async () => {
      try {
        const response = await getCards(params);
        const tweetersList = response.data;
        setTweeters([...tweetersList]);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, [searchParams, setSearchParams, params]);

  useEffect(() => {
    loadMoreBtnRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [tweeters]);

  useEffect(() => {
    if (!noMatchFilter) {
      setTimeout(() => setNoMatchFilter(true), 1000);
    }
  }, [noMatchFilter]);

  const handleChange = event => {
    setFilter(event.target.value);
  };

  const handleFollowing = id => {
    setFollowTweeters(prevState => (
      { 
        ...prevState,
        [id]: prevState[id] ? !prevState[id] : true,
      }
    ));
  };

  const getFilteredCards = () => {
    switch (filter) {
      case 'followings':
        return tweeters.filter(tweeter => followTweeters[tweeter.id] === true);
      
      case 'follow':
        return tweeters.filter(tweeter => followTweeters[tweeter.id] !== true);
    
      default:
        return tweeters;
    }
  };

  const filteredCardList = getFilteredCards();

  const onLoadMore = () => {
    setParams(prevState => prevState.limit < 10
        ? { ...prevState, limit: prevState.limit + 3 }
        : prevState
    );
  };

  localStorage.setItem(`followTweeters`, JSON.stringify(followTweeters));

  return (
    <CardListWrapper>
      <MenuContainer>
        <BackBtn to="/">
          Back
        </BackBtn>
        <DropdownLabel>
          <StyledSelect name="tweeters" onChange={handleChange}>
              <option value="show all"> show all </option>
              <option value="follow"> follow </option>
              <option value="followings"> followings </option>
          </StyledSelect>
        </DropdownLabel>
      </MenuContainer>

      {filteredCardList.length === 0 && noMatchFilter ? (
        <EmptyFilterMessage>
          Oops... We can not find any Tweeter by this filter. Try another one!
        </EmptyFilterMessage>
      ) : (
        <>
          <CardListContainer>
            <CardsList>
              {filteredCardList.map(tweeter => {
                const { id, user, tweets, followers, avatar } = tweeter;
                const following = followTweeters[id] 
                ? followTweeters[id] : false;
                return (
                  <TweeterCard
                    key={id}
                    id={id}
                    user={user}
                    tweets={tweets}
                    followers={followers}
                    avatar={avatar}
                    setFollowing={handleFollowing}
                    isFollowing={following}
                  />
                );
              })}
            </CardsList>
          </CardListContainer>
          <LoadMoreBtn
            type="buttons"
            ref={loadMoreBtnRef}
            onClick={onLoadMore}
          >
            Load more...
          </LoadMoreBtn>
      </>
      )}
    </CardListWrapper>
  );
}