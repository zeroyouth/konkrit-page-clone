import React from "react";
import styled from "styled-components";
import * as colors from "@styles/colors";
import HideScrollX from "@components/molecules/HideScrollX";
import Ether from "@components/atoms/Ether";

const CardWrapper = styled.div`
  border-radius: 16px;
  flex-shrink: 0;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  display: block;
`;

const InfoBox = styled.div`
  width: 150px;
  height: 73px;
  padding: 16px;
  background-color: ${colors.bgSecondary};
`;

const PriceBox = styled.div`
  padding: 8px 16px 16px 16px;
  width: 150px;
  height: 50px;
  background-color: ${colors.bgSecondary};
`;

const CollectionTitle = styled.div`
  font-size: 12px;
  color: ${colors.textSecondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Title = styled.div`
  font-family: MarkPro-Heavy;
  font-size: 14px;
  margin-top: 4px;
`;

const PriceTitle = styled.div`
  font-size: 10px;
  color: ${colors.textSecondary};
  font-weight: 700;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;

const PriceText = styled.div`
  font-family: MarkPro-Heavy;
  font-size: 14px;
`;
export default function Item() {
  const collectionTitle = "FrankenPunkFrankenPunk";

  return (
    <HideScrollX>
      {[1, 2, 3, 4, 5].map((num) => (
        <CardWrapper key={num}>
          <CardImage src="https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0x1fec856e25f757fed06eb90548b0224e91095738/0x1fec856e25f757fed06eb90548b0224e91095738-6741.png"></CardImage>
          <InfoBox>
            <CollectionTitle>{collectionTitle}</CollectionTitle>
            <Title>#6741</Title>
          </InfoBox>
          <PriceBox>
            <PriceTitle>판매가</PriceTitle>
            <PriceWrapper>
              <Ether />
              <PriceText>0.01</PriceText>
            </PriceWrapper>
          </PriceBox>
        </CardWrapper>
      ))}
    </HideScrollX>
  );
}
