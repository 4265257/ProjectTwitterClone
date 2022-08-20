import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ActionBar from "./ActionBar";
import moment from "moment";
import { TweetContext } from "../../TweetContext";
import { useContext } from "react";

const TweetDetails = () => {
  const { date, homeFeed, setHomeFeed, tweetStatus, setTweetStatus } =
    useContext(TweetContext);
  if (!homeFeed) {
    return null;
  }
  const { tweetId } = useParams();
  const arrayOfTweet = Object.values(homeFeed.tweetsById);
  const tweetItemID = arrayOfTweet.find((tweet) => tweet.id == tweetId);
  const tweetAuthor = tweetItemID.author?.displayName;
  const handle = tweetItemID.author?.handle;
  const avatarSrc = tweetItemID.author?.avatarSrc;
  const media = tweetItemID.media[0]?.url;
  const status = tweetItemID.status;
  const tweetTimeStamp = tweetItemID.tweetTimeStamp;
  const isLiked = tweetItemID.isLiked;

  return (
    <>
     <User>
        <div>
          <UserPic src={avatarSrc} />
        </div>
        <UserArea>
          <div>{tweetAuthor}</div>
          <div>{handle}</div>
        </UserArea>
      </User>
      <TweetArea>
        <div style={{ marginLeft: 20 }}>{status}</div>
        {tweetItemID.media[0]?.url && <PostPic src={media} />}
        <Timestamp>{moment(tweetTimeStamp).format("MMM Do YYYY")}</Timestamp>
      </TweetArea>
      <ActionBar tweetId={tweetId} isLiked={isLiked} />
    </>
  );
};
const UserPic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50px;
`;
const PostPic = styled.img`
  height: 350px;
  width: 500px;
`;
const UserArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 20px;
`;
const User = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const TweetArea = styled.div`
  display: flex;
  flex-direction: column;
`;
const Timestamp = styled.div`
  color: black;
  margin-left: 20px;
`;
export default TweetDetails;
