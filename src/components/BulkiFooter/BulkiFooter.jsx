import { Stack } from "@mui/material"
import Image from "next/legacy/image"
import Link from "next/link"
import logo from "../../../public/BulkiLogo.png"
import { metadata, urls } from "../../common"
import { BulkiBody1 } from "../../common/styles"
import { NAVBAR_ITEMS } from "../BulkiNavbar/BulkiNavbar"
import socialIcons from "./socialIcons"
import { StyledCopyrightDiv, StyledCopyrightNotice, StyledFooterContainer, StyledFooterFlex, StyledFooterLink, StyledFooterLinkColor, StyledFooterLogoContainer, StyledFooterTitle, StyledPurposeStatement, StyledSocialIconButton, StyledSocials, StyledTitleDiv, StyledVStack } from "./style"



const BulkiFooter = () => {
  return <StyledFooterContainer>
    <StyledFooterFlex>
      <StyledTitleDiv>
        <StyledFooterLogoContainer>
          <Link href={urls.primary}>
            <div style={{ height: '100%', width: '100%' }} href={urls.primary}>
              <Image
                src={logo}
                alt="footer-logo"
                layout="fill"
              />
            </div>
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