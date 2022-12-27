import { Stack } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/BulkiLogo.png"
import { BulkiBody1 } from "../../common/styles"
import {
  StyledFooterContainer, StyledTitleDiv, StyledVStack, StyledFooterLogoContainer,
  StyledPurposeStatement, StyledFooterTitle, StyledFooterLink, StyledFooterLinkColor,
  StyledCopyrightNotice, StyledFooterFlex, StyledCopyrightDiv, StyledSocials,
  StyledSocialIconButton
} from "./style"
import { urls, metadata } from "../../common"
import { NAVBAR_ITEMS } from "../BulkiNavbar/BulkiNavbar"
import socialIcons from "./socialIcons"



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
        <br />

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
        <StyledFooterLink>{metadata.contact.phone}</StyledFooterLink>
        <StyledFooterLink>{metadata.contact.email}</StyledFooterLink>
        <StyledSocials>
          {Object.keys(metadata.socials).map(socialKey => {
            return <StyledSocialIconButton
              key={socialKey}
              href={metadata.socials[socialKey]}
              target="_blank"
            >
              {socialIcons[socialKey]}
            </StyledSocialIconButton>
          })}
        </StyledSocials>
      </StyledVStack>
    </StyledFooterFlex>
    <StyledCopyrightDiv>
      <StyledCopyrightNotice>{'Copyright © 2022 Bulki LLC, bulki.us'}</StyledCopyrightNotice>

    </StyledCopyrightDiv>

  </StyledFooterContainer>
}

export default BulkiFooter