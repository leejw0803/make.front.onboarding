import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin: 0;
  border: 1px solid red;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
}

export default Header;
