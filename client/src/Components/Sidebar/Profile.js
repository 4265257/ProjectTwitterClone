import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import { TweetContext } from "../../TweetContext";
import { CurrentUserContext } from "../../CurrentUserContext";
import ActionBar from "../Tweet/ActionBar";
import SmallTweet from "../Tweet/SmallTweet";
import BigTweet from "../Tweet/BigTweet";
import styled from "styled-components";
import Tweet from "../Tweet/Tweet";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProfilFeed from "./ProfileFeed";

const Profile = () => {
  const { date, homeFeed, setHomeFeed, tweetStatus, setTweetStatus } =
    useContext(TweetContext);
  const { profileId } = useParams();
  const { userStatus, currentUser } = useContext(CurrentUserContext);
  const [profile, setProfile] = useState({});
  const [profileFeed, setProfileFeed] = useState({});
  useEffect(() => {
    fetch(`api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [profileId]);

  useEffect(() => {
    fetch(`api/${profileId}/feed`)
      .then((res) => res.json())
      .then((data) => setProfileFeed(data));
  }, [profileId]);
  if (!profileId) {
    return null;
  }
  if (!profile.profile) {
    return null;
  }
  if (!homeFeed) {
    return null;
  }
  if (!currentUser) {
    return null;
  }
  if (!profileFeed.tweetIds) {
    return null;
  }
  return (
    <div>
      {tweetStatus && tweetStatus === "loading" && (
        <CircularProgressLoad>
          <CircularProgress />
        </CircularProgressLoad>
      )}
      {tweetStatus === "idle" && (
        <div>
          <PicBanner src={profile.profile.bannerSrc} />

          <PicAvatar src={profile.profile.avatarSrc} />

          <ProfileArea>
            {profile.profile.displayName}
            <br></br>@{profile.profile.handle}
            <br></br>
            {profile.profile.bio}
            <br></br>
          </ProfileArea>
          <Row>
            Joined : {profile.profile.joined}
            &nbsp; &nbsp;
            {profile.profile.location}
          </Row>
          <Row>
            Followers:
            {profile.profile.numFollowers}
            &nbsp; Following:
            {profile.profile.numFollowing}
          </Row>
        </div>
      )}
      <div>
        <br></br>

        <ButtonTweet>Tweet</ButtonTweet>
        <ButtonLikes>Likes</ButtonLikes>
        <ButtonMedia>Media</ButtonMedia>
        {tweetStatus === "idle" &&
          profileFeed.tweetIds.map((tweetID) => {
            return (
              <ProfilFeed
                key={tweetID}
                tweet={profileFeed.tweetsById[tweetID]}
              />
            );
          })}
      </div>
    </div>
  );
};

const ProfileArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;
const Row = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const PicBanner = styled.img`
  height: 350px;
  width: 1500px;
`;

const PicAvatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 80px;
  margin-top: -60px;
  margin-left: 20px;
  margin-bottom: 5px;
`;
const CircularProgressLoad = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`;

const ButtonTweet = styled.button`
  color: gray;
  width: 167px;
  border: none;
  background-color: white;
`;
const ButtonMedia = styled.button`
  color: gray;
  width: 167px;
  border: none;
  background-color: white;
`;
const ButtonLikes = styled.button`
  color: gray;
  width: 167px;
  border: none;
  background-color: white;
  margin-bottom: 20px;
`;
export default Profile;
