import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomeFeed from "./Components/Sidebar/HomeFeed";
import Notifications from "./Components/Sidebar/Notifications";
import Bookmarks from "./Components/Sidebar/Bookmarks";
import Profile from "./Components/Sidebar/Profile";
import GlobalStyles from "./GlobalStyles";
import Sidebar from "./Components/Sidebar/Sidebar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import BigTweet from "./Components/Tweet/BigTweet";

const App = () => {
  const { currentUser, userStatus } = useContext(CurrentUserContext);
  return (
    <>
      {userStatus == "loading" && (
        <CircularProgressLoad>
          <CircularProgress />
        </CircularProgressLoad>
      )}
      {userStatus == "idle" && (
        <div className="App">
          <GlobalStyles />
          <TexteStyle>
            <BrowserRouter>
              <div>
                <Sidebar />
              </div>
              <div>
                <Routes>
                  <Route exact path="/" element={<HomeFeed />}>
                    Home
                  </Route>
                  <Route exact path="/notification" element={<Notifications />}>
                    Notifications
                  </Route>
                  <Route exact path="/bookmarks" element={<Bookmarks />}>
                    Bookmarks
                  </Route>
                  <Route exact path="/tweet/:tweetId" element={<BigTweet />}>
                    TweetDetails
                  </Route>
                  <Route exact path="/:profileId" element={<Profile />}>
                    Profile
                  </Route>
                </Routes>
              </div>
            </BrowserRouter>
          </TexteStyle>
        </div>
      )}
    </>
  );
};
const TexteStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const CircularProgressLoad = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px;
`;
export default App;
