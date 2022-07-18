//@flow

import React from "react";
import styled, { css } from "styled-components";
import phone2 from "./images/phone2.svg";
import messageSquare from "./images/message-square.svg";
import video from "./images/video.svg";
import info from "./images/info.svg";
import { truncateString } from "./helpers";
import { Transition } from "react-spring";

const StyledListItem = styled.a`
  background: #FFFFFF;
  display: flex;
  align-items: center;
  &:active {
    background-color: #e4e4e4;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ListItemAvatar = styled.div`
  flex-basis: 20%;
  padding-left: 10px;
  padding-right: 5px;

  img {
    width: 60px;
    height: 60px;
    border-radius: ${props => (props.avatarIsOpen ? "0%" : "50%")};

    transition: transform 1s ease;
  }
  ${props =>
    props.avatarIsOpen &&
    css`
      transform: scale(5) translate(50%, 20px);
      transition: transform 0.5s ease;
      z-index: 9999;
    `}
`;

const UserIcons = styled.div`
  background-color: white;
  display: ${props => (props.avatarIsOpen ? "flex" : "none")};
  justify-content: space-around;
  /* all scaled */
  margin-top: ${props => (props.avatarIsOpen ? "-5px" : "0px")};
  padding: 2px;
  width: 50px;
  img {
    max-width: 5px;
    max-height: 5px;
  }
`;

const StyledContactDetail = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 500px;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const blackDot = styled.div`
height: 18px;
width: 18px;
background-color: #000000;
border-radius: 50%;
display: inline-block;

`;

const yellowDot = styled.div`
height: 6px;
width: 6px;
background-color: #E7E049;
border-radius: 50%;
display: inline-block;

`;

const ListItemContent = styled.div`
  flex-basis: 80%;
  border-bottom: 1px solid #ffffff;
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
  .preview {
    font-size: 0.9em;
    color: #737373;
  }
  span {
    font-size: 0.9em;
    color: #737373;

  }

  a {
    width: 70px;
    height: 70px;
    background:#0000FF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    z-index= 999;
    border-radius: 50%;
    color:#ffffff;
    font-size: 40px;
    box-shadow: 2px 2px 5px Ergba(0, 0, 0, 0.25);
    position: fixed;
    right: 20px;
    bottom: 20px;
    transition: background 0.25s;
  }

a : active {
     background: #007D63;
    }
`;

const ContactDetailOverlay = ({ avatar, title, style, toggleAvatar }) => (
  <StyledContactDetail style={style} onClick={toggleAvatar} />
);

type Props = {
  title: string,
  preview: string,
  avatar: string,
  showChatScreen: Function,
  id: number
};

type State = {
  avatarIsOpen: boolean
};

class ChatListItem extends React.Component<Props, State> {
  state = {
    avatarIsOpen: false
  };

  toggleAvatar = () => {
    this.setState(prevState => ({
      avatarIsOpen: !prevState.avatarIsOpen
    }));
  };

  render() {
    const { id, title, preview, avatar, showChatScreen } = this.props;
    return (
      <StyledListItem>
        <Transition
          items={this.state.avatarIsOpen}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ duration: 100 }}
        >
          {show =>
            show &&
            (props => (
              <ContactDetailOverlay
                title={title}
                avatar={avatar}
                style={props}
                toggleAvatar={this.toggleAvatar}
              />
            ))
          }
        </Transition>

        <ListItemAvatar
          onClick={this.toggleAvatar}
          avatarIsOpen={this.state.avatarIsOpen}
        >
          <img src={avatar} alt={title} />
          <UserIcons avatarIsOpen={this.state.avatarIsOpen}>
            <img src={phone2} alt="call" />
            <img src={messageSquare} alt="message" />
            <img src={video} alt="video" />
            <img src={info} alt="info" />
          </UserIcons>
        </ListItemAvatar>
        <ListItemContent onClick={() => showChatScreen(id)}>
          <ContentTopRow>
            <h4>{title}</h4>
            <span>11.45pm</span>
          </ContentTopRow>
          <ContentBottomRow>
            <span className="preview">{truncateString(preview, 40)}</span>
            <span>{(id % 2 === 0 ? blackDot:yellowDot)}</span>

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
  }
}

export default ChatListItem;
