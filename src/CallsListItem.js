//@flow

import React from "react";
import styled from "styled-components";

const StyledListItem = styled.a`
  
  background: #fafafa;
  display: flex;
  align-items: center;
  &:active {
    background-color: #e4e4e4;
  }
`;

const ListItemAvatar = styled.div`
  flex-basis: 20%;
  padding-left: 10px;
  padding-right: 5px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const ListItemContent = styled.div`
  flex-basis: 80%;
  border-bottom: 1px solid #e4e4e4;
  padding-left: 13px;
  padding: 17px 15px 17px 0px;
`;

const ContentTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4.5px;
  h4 {
    margin: 0;
    color: #202020;
    font-weight: 500;
    font-size: 1.1em;
  }
  span {
    color: gray;
    font-size: 0.7em;
  }
`;

const ContentBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  span:first-child {
    font-size: 0.9em;
    white-space: nowrap;
    overflow: hidden;
    max-width: 250px;
    text-overflow: ellipsis;
  }
  span {
    color: #737373;
    font-size: 0.8em;
  }

  a {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color:#ffffff;
    font-size: 40px;
    background:#3F00FF;
    box-shadow: 0.5px 0.5px 3px #888888;
   
  }

`;

type Props = {
  title: string,
  preview: string,
  avatar: string
};

const CallsListItem = ({ title, preview, avatar }: Props) => (
  <StyledListItem>
    <ListItemAvatar>
      <img src={avatar} alt={title} />
    </ListItemAvatar>
    <ListItemContent>
      <ContentTopRow>
        <h4>{title}</h4>
        <span>18-07-2022</span>
      </ContentTopRow>
      <ContentBottomRow>
        <span>{preview}</span>
        <span>Missed</span>
        <a href="http://www.google.com" >
            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12.1667" cy="9.33334" r="4.66667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M18.928 23.8549C18.5292 22.3665 17.6503 21.0513 16.4278 20.1132C15.2053 19.1751 13.7074 18.6667 12.1665 18.6667C10.6256 18.6667 9.12769 19.1751 7.90518 20.1132C6.68267 21.0513 5.80385 22.3665 5.40502 23.8549" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M22.6665 11.6667L22.6665 18.6667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M26.1665 15.1667L19.1665 15.1667" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          </svg>

        </a>
      </ContentBottomRow>
    </ListItemContent>
  </StyledListItem>
);

export default CallsListItem;
