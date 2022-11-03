import React from "react";
import styled from "styled-components";
import * as colors from "@styles/colors";

const EventCardWrapper = styled.div`
  height: 200px;
  width: 320px;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${colors.cardGradient};
  overflow: hidden;
  flex-shrink: 0;
`;

const EventTitles = styled.div`
  margin-top: 16px;
`;

const CountDownWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const EachCountWrapper = styled.div`
  display: flex;
`;

const CountText = styled.div`
  font-family: MarkPro-Heavy;
  font-size: 36px;
  line-height: 45.63px;
  align-self: flex-start;
`;

const UnitText = styled.div`
  font-size: 18px;
  line-height: 27px;
  align-self: flex-end;
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

export default function EventCard() {
  return (
    <div>
      <EventCardWrapper>
        <CountDownWrapper>
          <EachCountWrapper>
            <CountText>08</CountText>
            <UnitText>일</UnitText>
          </EachCountWrapper>
          <EachCountWrapper>
            <CountText>06</CountText>
            <UnitText>시</UnitText>
          </EachCountWrapper>
          <EachCountWrapper>
            <CountText>11</CountText>
            <UnitText>분</UnitText>
          </EachCountWrapper>
          <EachCountWrapper>
            <CountText>18</CountText>
            <UnitText>초</UnitText>
          </EachCountWrapper>
        </CountDownWrapper>
      </EventCardWrapper>
      <EventTitles>
        <EventSubTitle>Medistock</EventSubTitle>
        <EventTitle>메디소사이어티 NFT 프로젝트</EventTitle>
      </EventTitles>
    </div>
  );
}
