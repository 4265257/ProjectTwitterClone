import React from "react";
import { TweetContext } from "../../TweetContext";
import styled from "styled-components";
import { useContext } from "react";
import { CurrentUserContext } from "../../CurrentUserContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tweet from "./Tweet";

const SmallTweet = () => {
  const { date, homeFeed, setHomeFeed, tweetStatus, setTweetStatus } =
    useContext(TweetContext);

  const { currentUser, setCurrentUser, userStatus, setUserStatus } =
    useContext(CurrentUserContext);

  if (!homeFeed) {
    return null;
  }
  return (
    <>
      {tweetStatus && tweetStatus === "loading" && (
        <CircularProgressLoad>
          <CircularProgress />
        </CircularProgressLoad>
      )}
      {tweetStatus === "idle" &&
        homeFeed.tweetIds.map((tweetID) => {
          return (
            
              <Tweet key={`${tweetID}`} tweet={homeFeed.tweetsById[tweetID]} />
            
          );
        })}
    </>
  );
};

const CircularProgressLoad = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`;
export default SmallTweet;

