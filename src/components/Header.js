import React from "react";
import styled from "@emotion/styled";

//UI imports
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

//STYLE start
const SearchBar = styled.div`
  position: absolute;
  z-index: 2;
  top: 20px;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 45px;
`;

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const SearchInput = styled.input`
  width: 90%;
  border-radius: 15px;
  border: none;
  padding: 7px;
  font-size: 18px;
  box-shadow: 2px 11px 22px -6px rgba(0, 0, 0, 0.54);
  background: #ffe;
`;

const BeforeButton = styled(NavigateBeforeIcon)`
  background: #ffe;
  border-radius: 50%;
  font-family: "Source Sans Pro";
  font-weight: bold;
  box-shadow: 2px 11px 22px -6px rgba(0, 0, 0, 0.54);
  font-size: 20px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0000ff;
  cursor: pointer;
  &:hover {
    color: #ffe;
    background: #0000ff;
  }
`;
//STYLE end

export default function Header() {
  return (
    <>
      <SearchBar>
        <BeforeButton />
        <SearchForm>
          <SearchInput autoFocus placeholder="Search" />
        </SearchForm>
      </SearchBar>
    </>
  );
}
