import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const backgroundTheme = {
  summary: "#e8f3f9",
  analysis: "#e8f3f9",
  planning: "#e8f3f9",
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ pageContext }) =>
    pageContext ? backgroundTheme[pageContext] : backgroundTheme.summary};
  padding-top: 80px;
`;

const UserPageTemplate = ({ children, pageContext }) => (
  <>
    <StyledWrapper pageContext={pageContext}>
      <Sidebar pageContext={pageContext} />

      {children}
    </StyledWrapper>
  </>
);

export default UserPageTemplate;
