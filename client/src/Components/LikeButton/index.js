import styled from "styled-components";
import React, { useState, createContext, useContext } from "react";
import Heart from "./Heart";
import { TweetContext } from "../../TweetContext";
import PoppingCircle from "./PoppingCircle ";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40, isLiked }) => {
  const heartSize = size * 0.6;
  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLiked && <PoppingCircle size={size} color="#E790F7" />}
      <Heart width={heartSize} isToggled={isLiked} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
