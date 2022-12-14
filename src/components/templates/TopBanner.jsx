import styled from "styled-components";
import * as colors from "@styles/colors";
const Container = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 400px;
  padding: 20px;
`;
const BannerWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.textYellow};
  position: relative;
`;

const TopLeftTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 60px solid ${colors.bgPrimary};
  border-right: 60px solid transparent;
  position: absolute;
  top: -1px;
  left: -1px;
`;

const TopRightTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 60px solid ${colors.bgPrimary};
  border-left: 60px solid transparent;
  position: absolute;
  bottom: -1px;
  right: -1px;
`;

const BannerOrderBox = styled.div`
  position: absolute;
  width: 51px;
  height: 29px;
  background-color: ${colors.bgBannerButton};
  border-radius: 6px;
  left: 16px;
  bottom: 16px;
  font-size: 14px;
  color: ${colors.textSecondary};
  z-index: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TopBanner() {
  return (
    <Container>
      <BannerWrapper>
        <TopLeftTriangle />
        <TopRightTriangle />
        <BannerOrderBox> 1 / 2</BannerOrderBox>
      </BannerWrapper>
    </Container>
  );
}

export default TopBanner;
