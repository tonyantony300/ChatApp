//@flow

import React from "react";
import styled from "styled-components";

const StyledHeaderNav = styled.nav`
  background: white;
  position: static;
  background-color: #1E1E1E;
  top: 0;
  z-index: 1;
  font-size: 0.9em;
  font-weight: 600;
  height: 75px;
  display: flex;
  border-collapse: collapse;
  letter-spacing: 0.4px;
  justify-content: space-between;
  color: white;
  text-transform: uppercase;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  a {
    flex-grow: 3
    padding-top: 15px;
  }
  a:first-child {
    flex-grow: 3
    padding-top: 15px;
  }
`;

const StyledNavItem = styled.a`
  text-align: center;
  transition: background-color 1.5s;
  color: ${props => (props.viewState === props.current ? "white" : "white")};
  border-bottom: ${props =>
    props.viewState === props.current ? "3px solid yellow" : "none"};
  &:active {
    background-color: lightgray;
    transition: background-color 1.5s;
    border-bottom: 3px solid white;
  }
  svg {
    fill: ${props => (props.viewState === props.current ? "black" : "black")};
  }
`;

type Props = {
  changeViewState: Function,
  viewState: string
};

const HeaderNav = ({ changeViewState, viewState }: Props) => {
  return (
    <StyledHeaderNav>

      <StyledNavItem
        data-nav="2"
        onClick={changeViewState}
        viewState={viewState}
        current="2"
      >
      <svg width="28" height="28" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Home</title>
      <path d="M8.3335 21.266C8.3335 19.0031 8.3335 17.8716 8.79093 16.8771C9.24837 15.8825 10.1074 15.1461 11.8256 13.6735L13.4922 12.2449C16.5978 9.583 18.1505 8.25206 20.0002 8.25206C21.8498 8.25206 23.4025 9.583 26.5081 12.2449L28.1747 13.6735C29.8929 15.1461 30.752 15.8825 31.2094 16.8771C31.6668 17.8716 31.6668 19.0031 31.6668 21.266V28.3333C31.6668 31.476 31.6668 33.0474 30.6905 34.0237C29.7142 35 28.1429 35 25.0002 35H15.0002C11.8575 35 10.2861 35 9.30981 34.0237C8.3335 33.0474 8.3335 31.476 8.3335 28.3333V21.266Z" stroke="white" stroke-width="2"/>
      <path d="M24.1668 35V26C24.1668 25.4477 23.7191 25 23.1668 25H16.8335C16.2812 25 15.8335 25.4477 15.8335 26V35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </StyledNavItem>

      <StyledNavItem
        data-nav="3"
        onClick={changeViewState}
        viewState={viewState}
        current="3"
      >
        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>settings</title>
        <path d="M6.3335 14L6.3335 4.66667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M22.6665 23.3333L22.6665 19.8333" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M6.3335 23.3333L6.3335 18.6667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M22.6665 15.1667L22.6665 4.66667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M14.5 8.16667L14.5 4.66667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M14.5 23.3333L14.5 12.8333" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <ellipse cx="6.33333" cy="16.3333" rx="2.33333" ry="2.33333" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <ellipse cx="14.4998" cy="10.5" rx="2.33333" ry="2.33333" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <ellipse cx="22.6668" cy="17.5" rx="2.33333" ry="2.33333" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        
      </StyledNavItem>


      <StyledNavItem
        data-nav="4"
        onClick={changeViewState}
        viewState={viewState}
        current="4"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>search</title>
        <path d="M11.6669 4.66667H11.6661C7.80033 4.66667 4.6665 7.80049 4.6665 11.6663V11.6671C4.6665 15.5329 7.80033 18.6667 11.6661 18.6667H11.6669C15.5327 18.6667 18.6665 15.5329 18.6665 11.6671V11.6663C18.6665 7.80049 15.5327 4.66667 11.6669 4.66667Z" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M17.1108 17.1111L23.3331 23.3334" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        
      </StyledNavItem>
    </StyledHeaderNav>
  );
};

export default HeaderNav;
