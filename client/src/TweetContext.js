import { createContext, useState, useEffect } from "react";

export const TweetContext = createContext(null);
export const TweetProvider = ({ children }) => {
  const date = new Date();
  const [homeFeed, setHomeFeed] = useState(null);
  const [tweetStatus, setTweetStatus] = useState("loading");
  const [numOfLikes, setNumOfLikes] = useState(0);
  const [numOfRetweets, setNumOfRetweets] = useState(0);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [tweetPost, setTweetPost] = useState({ status: "" });

  const handleToggleLike = (tweetId) => {
    const newHomeFeed = {
      tweetIds: homeFeed.tweetIds,
      tweetsById: {
        ...homeFeed.tweetsById,
        [tweetId]: {
          ...homeFeed.tweetsById[tweetId],
          isLiked: !homeFeed.tweetsById[tweetId].isLiked,
        },
      },
    };
    setHomeFeed(newHomeFeed);
  };

  const handleToggleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    if (isRetweeted) {
      setNumOfRetweets(numOfRetweets - 1);
    } else {
      setNumOfRetweets(numOfRetweets + 1);
    }
  };
  useEffect(() => {
    setTweetStatus("idle");
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => setHomeFeed(data))
      .catch((error) => {
        if (error) {
          console.error("Error:", error);
        }
      });
  }, []);

  const handleAfterPublishTweet = () => {
    const data = { status: tweetPost };

    fetch("/api/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("/api/me/home-feed")
          .then((res) => res.json())
          .then((data) => setHomeFeed(data));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <TweetContext.Provider
      value={{
        homeFeed,
        setHomeFeed,
        tweetStatus,
        setTweetStatus,
        date,
        numOfLikes,
        setNumOfLikes,
        numOfRetweets,
        setNumOfRetweets,
        isRetweeted,
        setIsRetweeted,
        handleToggleLike: handleToggleLike,
        handleToggleRetweet: handleToggleRetweet,
        tweetPost,
        setTweetPost,
        handleAfterPublishTweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
