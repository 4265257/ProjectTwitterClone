import React from "react";
import { useContext } from "react";
import { TweetContext } from "../../TweetContext";
import styled from "styled-components";
import Action from "./Action";
import LikeButton from "../LikeButton";
import TweetActionIcon from "./TweetActionIcon";

const ActionBar = (props) => {
  const {
    homeFeed,
    setHomeFeed,
    tweetStatus,
    setTweetStatus,
    numOfLikes, 
    numOfRetweets,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
  } = useContext(TweetContext);
  if (!homeFeed) {
    return null;
  }
  if (!homeFeed.tweetsById[props.tweetId]) {
    return null;
  }
  if (!props.tweetId) {
    return null;
  }
  return (
  <>
    <Wrapper>
      <Action Id={'1'} color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action Id={'2'} color="rgb(23, 191, 99)" size={40}>
        <TweetActionIcon
        isRetweeted={isLikedByCurrentUser}
        kind="retweet"
        color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
        />
      </Action>
      <Action Id={'3'} color="rgb(224, 36, 94)" size={40}  tweetId={props.tweetId} >
        <LikeButton isLiked={homeFeed.tweetsById[props.tweetId].isLiked}  />
      </Action>
      <Action Id={'4'} color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  </>
  )
};

  const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;
export default ActionBar;