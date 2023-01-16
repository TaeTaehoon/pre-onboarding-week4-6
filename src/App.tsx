import React from "react";

import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";
import styled from "styled-components";

function App() {
  return (
    <StContentsWrapper>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </StContentsWrapper>
  );
}

const StContentsWrapper = styled.div`
  max-width: 128rem;
  margin: 1rem auto;
`;

export default App;
