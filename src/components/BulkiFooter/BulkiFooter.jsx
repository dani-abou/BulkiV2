import { Stack } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/BulkiLogo.png"
import { BulkiBody1 } from "../../common/styles"
import {
  StyledFooterContainer, StyledTitleDiv, StyledVStack, StyledFooterLogoContainer,
  StyledPurposeStatement, StyledFooterTitle, StyledFooterLink, StyledFooterLinkColor,
  StyledCopyrightNotice, StyledFooterFlex, StyledCopyrightDiv, StyledSocials
} from "./style"
import { urls, metadata } from "../../common"
import { NAVBAR_ITEMS } from "../BulkiNavbar/BulkiNavbar"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BulkiIconButton } from "../BulkiButton"




const BulkiFooter = () => {
  return <StyledFooterContainer>
    <StyledFooterFlex>
      <StyledTitleDiv>
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
        <StyledPurposeStatement>{metadata.slogan}</StyledPurposeStatement>
        <StyledSocials>
          <BulkiIconButton><LinkedInIcon /></BulkiIconButton>
        </StyledSocials>
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
    </StyledFooterFlex>
    <StyledCopyrightDiv>
      <StyledCopyrightNotice>{'Copyright © 2022 Bulki LLC, bulki.us'}</StyledCopyrightNotice>

    </StyledCopyrightDiv>

  </StyledFooterContainer>
}

export default BulkiFooter