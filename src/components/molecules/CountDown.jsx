import styled from "styled-components";

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

export default function CountDown() {
  return (
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
  );
}
