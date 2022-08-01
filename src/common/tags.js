import styled, { css, createGlobalStyle } from 'styled-components';
import Link from 'next/link';


/**
 * Bulki text tags.
 */

export const tagToStyle = tag => css`
  color: ${props => props.theme.colors.onSurface.rgbaString};
  font-family: ${props => props.theme.fonts.families[tag]};
  font-size: ${props => props.theme.fonts.sizes[tag]}px;
  font-weight: ${props => props.theme.fonts.weights[tag]};
  margin: 0;
`;

export const BulkiH1 = styled.h1`
  ${tagToStyle('h1')};
`;

export const BulkiH2 = styled.h2`
  ${tagToStyle('h2')};
`;

export const BulkiH3 = styled.h3`
  ${tagToStyle('h3')};
`;

export const BulkiH4 = styled.h4`
  ${tagToStyle('h4')};
`;

export const BulkiH5 = styled.h5`
  ${tagToStyle('h5')};
`;

export const BulkiH6 = styled.h6`
  ${tagToStyle('h6')};
`;

export const BulkiSubtitle1 = styled.div`
  ${tagToStyle('subtitle1')};
`;

export const BulkiSubtitle2 = styled.div`
  ${tagToStyle('subtitle2')};
`;

export const BulkiBody1 = styled.span`
  ${tagToStyle('body1')};
`;

export const BulkiBody2 = styled.span`
  ${tagToStyle('body2')};
`;

export const BulkiButtonText = styled.div`
  ${tagToStyle('button')};
  text-transform: uppercase;
`;

export const BulkiCaption = styled.div`
  ${tagToStyle('caption')};
`;

export const BulkiTextArea = styled.textarea`
  ${tagToStyle('body1')}
  resize: none;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  opacity: 1;

  :focus {
    border-color: ${props => props.theme.colors.primary.rgbaString};
  }
`;

export const BulkiOption = styled.option`
  ${tagToStyle('body1')}

  :hover {
    background-color: ${props => props.theme.colors.primary.rgbaString};
  }
`;

export const BulkiSpan = styled.span`
  ${tagToStyle('body1')}
  ${props => props.color && `color: ${props.color};`}
`;

const BulkiAStyle = styled.a`
  ${tagToStyle('body1')}
  color: ${props => props.theme.colors.primary.rgbaString};
  cursor: pointer;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const BulkiA = ({ href, children }) => <Link href={href}><BulkiAStyle href={href}>{children}</BulkiAStyle></Link>

