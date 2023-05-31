import styled from "styled-components";
import { PrimabullH1, PrimabullH4, screenSizes } from "../../common/styles";
import PrimabullButton from "../../components/PrimabullButton/PrimabullButton";

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
  text-align: center;
  @media screen and (max-width: ${screenSizes.mobile.max}) {
      width: ${screenSizes.mobile.min};
      top: 40%;
  }
  @media screen and (max-width: ${screenSizes.tablet.max}) {
      width: ${screenSizes.tablet.min};
      top: 60%;
  }
`

export const StyledTitle = styled(PrimabullH1)`
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

export const StyledSubtitle = styled(PrimabullH4)`
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

export const StyledButton = styled(PrimabullButton)`
  color: white;
  width: 200px;  
  text-decoration: none;

  @media screen and (max-width: ${screenSizes.mobile.max}) {
        /* margin-top: 20px; */
        display: none;
  }
  
`