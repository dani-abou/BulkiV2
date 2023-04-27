import styled from "styled-components";
import { BulkiH1, BulkiH4, screenSizes } from "../../common/styles";
import BulkiButton from "../../components/BulkiButton/BulkiButton";

export const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-image: url('/cows.png'); */
  background: linear-gradient(rgba(150, 150, 150, 0.1), rgba(0, 0, 0, 0.4)), url('/cows.png');
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 650px;

`

export const StyledCenter = styled.div`
  position: absolute;
  top: 68%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${console.log(screenSizes)}
  text-align: center;
  @media screen and (max-width: ${screenSizes.mobile.max}) {
      width: ${screenSizes.mobile.min};
      top: 60%;
  }
  @media screen and (max-width: ${screenSizes.tablet.max}) {
      width: ${screenSizes.tablet.min};
      top: 60%;
  }
`

export const StyledTitle = styled(BulkiH1)`
  color: white;
  font-size: 85px;

  @media screen and (max-width: ${screenSizes.mobile.max}) {
      font-size:50px;
      width: 100%;
  }

  @media screen and (max-width: ${screenSizes.tablet.max}) {
      font-size:60px;
      width: 100%;
  }
`

export const StyledSubtitle = styled(BulkiH4)`
  color: white;
  font-size: 37px;
  width: 80%;
  margin-left: 50%;
  transform: translate(-50%);
  @media screen and (max-width: ${screenSizes.mobile.max}) {
      font-size:30px;
      width: 100%;
  }
    @media screen and (max-width: ${screenSizes.tablet.max}) {
      font-size:33px;
      width: 100%;
  }
`

export const StyledButton = styled(BulkiButton)`
  color: white;
  width: 200px;  

  @media screen and (max-width: ${screenSizes.mobile.max}) {
        margin-top: 20px;
  }
  
`