import React from "react";
import { FaBomb } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div>
      <FaBomb size={40} />
      An unkowwn error has occurred.
      <br></br>
      Please try refreshing the page
    </div>
  );
};

export default ErrorPage;
