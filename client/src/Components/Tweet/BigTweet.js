import React from "react";
import { TweetContext } from "../../TweetContext";
import styled from "styled-components";
import { useContext } from "react";
import { CurrentUserContext } from "../../CurrentUserContext";
import TweetDetails from "./TweetDetails";
import CircularProgress from "@material-ui/core/CircularProgress";

const BigTweet = () => {
  const { date, homeFeed, setHomeFeed, tweetStatus, setTweetStatus } =
    useContext(TweetContext);
  const { currentUser } = useContext(CurrentUserContext);
  if (!homeFeed) {
    return null;}
  return (
    <>
      {tweetStatus && tweetStatus === "loading" && (
        <CircularProgressLoad>
          <CircularProgress />
        </CircularProgressLoad>
      )}
      {tweetStatus && tweetStatus === "idle" && <TweetDetails />}
    </>
  );
};
const CircularProgressLoad = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`;
export default BigTweet;
