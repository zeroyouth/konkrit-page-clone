import React from "react";
import styled from "styled-components";
import * as colors from "@styles/colors";
import CountDown from "@components/molecules/CountDown";

const EventCardWrapper = styled.div`
  height: 200px;
  width: 320px;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${colors.cardGradient}, ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

const EventTitles = styled.div`
  margin-top: 16px;
`;

const EventSubTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${colors.textSecondary};
`;

const EventTitle = styled.div`
  margin-top: 4px;
  font-weight: 700;
  font-size: 16px;
`;

export default function EventCard({
  title,
  subtitle,
  imgUrl,
  targetDate,
} = {}) {
  return (
    <div>
      <EventCardWrapper imgUrl={imgUrl}>
        <CountDown targetDate={targetDate} />
      </EventCardWrapper>
      <EventTitles>
        <EventSubTitle>{subtitle}</EventSubTitle>
        <EventTitle>{title}</EventTitle>
      </EventTitles>
    </div>
  );
}
