import { Stack } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/BulkiLogo.png"
import { BulkiBody1 } from "../../common/styles"
import {
  StyledFooterContainer, StyledTitleDiv, StyledVStack, StyledFooterLogoContainer,
  StyledPurposeStatement, StyledFooterTitle, StyledFooterLink, StyledFooterLinkColor
} from "./style"
import { urls, metadata } from "../../common"
import { NAVBAR_ITEMS } from "../BulkiNavbar/BulkiNavbar"



const BulkiFooter = () => {
  return <StyledFooterContainer>
    <StyledTitleDiv>
      <Stack>
        <StyledFooterLogoContainer>
          <Link href={urls.primary}>
            <a style={{ height: '100%', width: '100%' }} href={urls.primary}>
              <Image
                src={logo}
                alt="footer-logo"
                layout="fill"
              />
            </a>
          </Link>
        </StyledFooterLogoContainer>
        <StyledPurposeStatement>{metadata.purposeStatement}</StyledPurposeStatement>
      </Stack>
    </StyledTitleDiv>
    <StyledVStack>
      <StyledFooterTitle>Navigate</StyledFooterTitle>
      <br />
      {NAVBAR_ITEMS.map(navItem => {
        return <StyledFooterLink key={navItem.label}>
          <Link href={navItem.href} >
            <StyledFooterLinkColor href={navItem.href} >
              {navItem.label}
            </StyledFooterLinkColor>
          </Link>
        </StyledFooterLink>
      })}
    </StyledVStack>
    <StyledVStack>
      <StyledFooterTitle>Contact us</StyledFooterTitle>
      <br />
    </StyledVStack>


  </StyledFooterContainer>
}

export default BulkiFooter