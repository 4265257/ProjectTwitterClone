import { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext(null);
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [ userStatus, setUserStatus] = useState("loading");

  useEffect(() => {
  setUserStatus("idle")    
  fetch("/api/me/profile")
    .then((res) => res.json())
    .then((data) => { 
      setCurrentUser(data)
    });
}, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userStatus,
         setUserStatus
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
