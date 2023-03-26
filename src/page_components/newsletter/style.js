import { Card, Paper } from "@mui/material"
import styled from "styled-components"
import { BulkiBody1 } from "../../common/styles"
import BulkiCard from "../../components/BulkiCard/BulkiCard"

export const StyledSurface = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
`

export const StyledLogoDiv = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  margin-left: 50%;
  transform: translate(-50%);
`

export const StyledFormDiv = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  margin-left: 50%;
  transform: translate(-50%);
`

export const StyledSection = styled.div`
  width: 100%;
  /* padding: 50px 20px; */
  padding-bottom: 50px;
  ${props => props.$greyed && 'background-color: #d9d9d9'}
`

export const StyledExamplesFlex = styled.div`
  display:flex;
  margin-left: 50%;
  transform: translate(-50%);
  justify-content: space-around;
  gap: 10px;
  width: 80%;
`

export const StyledExamplesPaper = styled(BulkiCard)`
  height: 300px;
  width: 250px;
  background-color: #f7f7f7;
`

export const StyledExampleDescription = styled(BulkiBody1)`
  height: 75px;
  overflow: hidden;
`

export const StyledPrice = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
`