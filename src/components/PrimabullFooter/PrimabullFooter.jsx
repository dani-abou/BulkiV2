import Image from "next/legacy/image"
import Link from "next/link"
import logo from "../../../public/logos/MainSecondary.png"
import { metadata, urls } from "../../common"
import { useCart } from "../../common/context"
import { NAVBAR_ITEMS } from "../PrimabullNavbar/PrimabullNavbar"
import socialIcons from "./socialIcons"
import { StyledCopyrightDiv, StyledCopyrightNotice, StyledFooterContainer, StyledFooterFlex, StyledFooterLink, StyledFooterLinkColor, StyledFooterLogoContainer, StyledFooterTitle, StyledPurposeStatement, StyledSocialIconButton, StyledSocials, StyledTitleDiv, StyledVStack } from "./style"



const PrimabullFooter = () => {
  const { setShowCart } = useCart()

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
                objectFit="cover"
              />
            </div>
          </Link>
        </StyledFooterLogoContainer>
        {/* <StyledPurposeStatement>{metadata.slogan}</StyledPurposeStatement> */}
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
        <StyledFooterLink >
          <StyledFooterLinkColor onClick={() => setShowCart(true)}>
            My Cart
          </StyledFooterLinkColor>
        </StyledFooterLink>
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
              $color={socialIcons[socialKey].color}
              target="_blank"
            >
              {socialIcons[socialKey].icon}
            </StyledSocialIconButton>
          })}
        </StyledSocials>
      </StyledVStack>
    </StyledFooterFlex>
    <StyledCopyrightDiv>
      <StyledCopyrightNotice>{'Copyright © 2022 Primabull LLC, primabull.co'}</StyledCopyrightNotice>

    </StyledCopyrightDiv>

  </StyledFooterContainer>
}

export default PrimabullFooter