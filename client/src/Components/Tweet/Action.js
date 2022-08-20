import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { TweetContext } from "../../TweetContext";
import UnstyledButton from "../Tweet/UnstyledButton";

const Action = ({ Id, color, size, children, tweetId}) => {
  const {
    handleToggleLike,
    handleToggleRetweet,
  } = useContext(TweetContext);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Wrapper
      onClick={() => {
        const id = Id;
        if (id == "3") {
          handleToggleLike(tweetId);
        }
        if (id == "2") {
          handleToggleRetweet();
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      circleColor={color}
      style={{ width: size, height: size, color: isHovered ? color : null }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledButton)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    opacity: 0;
    background-color: ${(p) => p.circleColor};
  }

  &:focus:after,
  &:hover:after {
    opacity: 0.12;
  }
`;

export default Action;
