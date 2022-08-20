import React from "react";
import {  useState,  useContext } from "react";
import { TweetContext } from "../../TweetContext";
import BigTweet from "../Tweet/BigTweet";
import SmallTweet from "../Tweet/SmallTweet";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { CurrentUserContext } from "../../CurrentUserContext";
import ErrorPage from "../../ErrorPage";
const HomeFeed = () => {
  const { userStatus, currentUser } = useContext(CurrentUserContext);
  const {
    homeFeed,
    setHomeFeed,
    tweetStatus,
    setTweetStatus,
    tweetPost,
    setTweetPost,
    handleAfterPublishTweet,
  } = useContext(TweetContext);
  const [count, setCount] = useState(0);
  const remaningLetters = 280 - count;
  const [isDisabled, setDisabled] = useState(true);

  return (
    <>
      {/* {!tweetStatus && <ErrorPage />} */}
      {tweetStatus && tweetStatus === "loading" && (
        <CircularProgressLoad>
          <CircularProgress />
        </CircularProgressLoad>
      )}
      {tweetStatus && tweetStatus === "idle" && (
        <div>
          <Header>
            <span>Home</span>
            <InputArea>
              <TextArea>
                <textarea
                  type="text"
                  style={{ height: 150, width: 500 }}
                  onChange={(e) => {
                    setTweetPost(e.target.value);
                    setCount(e.target.value.length);
                    if (count >= 280 || e.target.value.length == 0) {
                      setDisabled(true);
                    } else if (count <= 280) {
                      setDisabled(false);
                    }
                  }}
                />
              </TextArea>
              <RemaningLetters>
                {remaningLetters > 55 && (
                  <p style={{ color: "black" }}>{remaningLetters}</p>
                )}
                {remaningLetters <= 55 && remaningLetters > 0 && (
                  <p style={{ color: "yellow" }}>{remaningLetters}</p>
                )}
                {remaningLetters <= 0 && (
                  <p style={{ color: "red" }}>{remaningLetters}</p>
                )}
              </RemaningLetters>

              <ButttonMeow
                type="button"
                onClick={handleAfterPublishTweet}
                disabled={isDisabled}
              >
                Meow
              </ButttonMeow>

              <PicAvatar src={currentUser?.profile.avatarSrc} />
            </InputArea>
          </Header>

          {!homeFeed && <ErrorPage />}
          {homeFeed && <SmallTweet />}
        </div>
      )}
    </>
  );
};

const Header = styled.header`
  color: black;
  position: relative;
  margin-bottom: 200px;
`;

const RemaningLetters = styled.div`
  color: black;
  position: absolute;
  top: 155px;
  left: 575px;
`;
const TextArea = styled.div`
  color: black;
  position: absolute;
  left: 65px;
`;
const ButttonMeow = styled.button`
  border-radius: 10px;
  color: white;
  background-color: ${(p) => (p.disabled ? "gray" : COLORS.primary)};
  border-color: ${(p) => (p.disabled ? "gray" : COLORS.primary)};
  height: 30px;
  width: 150px;
  top: 150px;
  left: 620px;
  position: absolute;
`;
const InputArea = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;
const PicAvatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  position: absolute;
`;

export default HomeFeed;
