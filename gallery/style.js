import styled from "styled-components";

export const StyledGalleryFrame = styled.div`
  width: 90%;
  height: 90%;
  margin-left: 5%;
  background-color: ${props => props.theme.colors.surface.hexa()};
  padding: 20px;
`