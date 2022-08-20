import styled from "styled-components";
import { BulkiButton } from "../BulkiButton";
import { BulkiInput } from "../BulkiInput";

export const StyledHeaderContainer = styled.div`
  width: 100vw;
  min-width: 950px;
  height: 120px;
  padding: 0 80px 0 3px;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.surface.hexa()};
  margin-top: 15px;
  margin-botton: 30px;
  gap: 10px;
`

export const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary.hexa()};
  cursor: pointer;
`
export const StyledBulkiLogoContainer = styled.div`
  position: relative;
  z-index: 0;
  cursor: pointer;
  height: 110%;
  width: 200px;
  margin-left: 10%;
`
//flex: 0 0 150px;


export const StyledRightDiv = styled.div`
  flex: 0 1 80%;
`

export const StyledBulkiInput = styled(BulkiInput)`
  margin-left: auto;
  margin-right: 0;
  margin-top: 20px;
  height: 100%;
  float: right;
`
export const StyledNavbarDiv = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 0;
  width: max-content;
  gap: 50px;
  align-items: center;
`

export const StyledSearchButton = styled(BulkiButton)`
  height: 100%;
  width: ${props => props.width || '10%'};
  margin:0;
  float: right;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`

export const StyledLoginButton = styled(BulkiButton)`
`
export const StyledNavbarButton = styled(BulkiButton)`
  height: 40px;
  width: 100px;
  cursor:pointer;
  border-radius: 3px;
`