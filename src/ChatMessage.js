//@flow

import React from "react";
import styled from "styled-components";

const ArrowLeft = styled.div`
  position: relative;
  top: 7px;
  width: 0;
  height: 0;
  border-top: 0px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 15px solid #f2f2f2;
`;

const ArrowRight = styled.div`
  position: relative;
  top: 7px;
  width: 0;
  height: 0;
  border-top: 0px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 15px solid #d0ebf8;
`;

const StyledChatMessage = styled.div`
  display: flex;

  justify-content: ${props =>
    props.status === "incoming" ? "flex-start" : "flex-end"};

    span {
        background-color: ${props =>
        props.status === "incoming" ? "#f2f2f2" : "#d0ebf8"};
      margin-top: 7px;
      max-width: 75%;
      padding: 5px;
      border-radius: ${props =>
        props.status === "incoming" ? "0px 3px 3px 3px" : "3px 0px 3px 3px"};
      span {
        padding: 0 0 0 8px;
        color: #333;
        float: right;
        font-size: .8em;
      }
    }
  }

  @keyframes fadeIn {
    0%, 20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
`;

type Props = {
  status: string,
  content: string
};

const ChatMessage = ({ status, content }: Props) => {
  return (
    <StyledChatMessage status={status}>
      {status === "incoming" && <ArrowLeft />}
      <span>
        {content}
        <span>11:45pm</span>
      </span>
      {status === "outgoing" && <ArrowRight />}
    </StyledChatMessage>
  );
};

export default ChatMessage;
