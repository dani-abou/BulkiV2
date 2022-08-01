import styled from "styled-components";
import Image from 'next/image'
import { BulkiA, BulkiBody1 } from "../../common/tags";
import Link from 'next/link';
import { BulkiButton } from "../BulkiButton";
import BulkiInput from "../BulkiInput/BulkiInput";

export const StyledHeaderContainer = styled.div`
  width: 100vw;
  max-width:100%;
  height: 120px;
  padding: 0 80px 0 120px;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.surface.hexa()};
`

export const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary.hexa()};
  cursor: pointer;
`
export const StyledBulkiLogoContainer = styled.div`
  position: relative;
  margin-top: -20px;
  height: 150%;
  flex: 0 0 15%;
  z-index: 0;
`
export const StyledRightDiv = styled.div`
  flex: 1 0;
`

export const StyledBulkiInput = styled(BulkiInput)`
  margin-left: auto;
  margin-right: 0;
  margin-top: 30px;
  width: 880px;
  border-radius: 100px;

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
  width: 100%;
  margin:0;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`

export const StyledLoginButton = styled(BulkiButton)`
`
export const StyledNavbarButton = styled.div`
  height: 40px;
  width: 100px;
  background-color: transparent;
  border: 1px;
  display:flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  border-radius: 3px;


  :hover {
    background-color: ${props => props.theme.colors.background.hexa()};
  }

`