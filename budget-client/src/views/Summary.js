import React from "react";
import UserPageTemplate from "../templates/UserPageTemplate";

const Summary = () => {
  return (
    <UserPageTemplate pageContext="summary">
      <h2 className="summaryTitle"> Summary</h2>
    </UserPageTemplate>
  );
};

export default Summary;
