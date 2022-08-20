import Gallery from '../gallery';
import BulkiPage from '../src/common/BulkiPage';
import { Button } from '@mui/material';
import {
  BulkiBody1, BulkiBody2, BulkiH1, BulkiH2, BulkiH3, BulkiH4, BulkiH5, BulkiH6,
  BulkiSubtitle1, BulkiSubtitle2, BulkiCaption, BulkiButtonText, BulkiOverline
} from '../src/common/tags';
import styled from "styled-components";
import { useEffect } from "react"


const TestButton = styled(Button)`
  border: 3px solid black;
  background-color: green;
`

const PAGE_META = {
  title: 'Contact Us'
}

export default function Home({ headControls }) {
  useEffect(() => headControls(PAGE_META), [headControls])
  if (process.env.NODE_ENV === 'development') return <Gallery />
  return (
    <>
      <Button>Unstyled</Button>
      <TestButton>STyled</TestButton>
      <BulkiBody1>BODY</BulkiBody1>
      <BulkiBody2>BODY2</BulkiBody2>

      <BulkiH1>H1</BulkiH1>
      <BulkiH2>H2</BulkiH2>
      <BulkiH3>H3</BulkiH3>
      <BulkiH4>H4</BulkiH4>
      <BulkiH5>H5</BulkiH5>
      <BulkiH6>H6</BulkiH6>

      <BulkiSubtitle1>Subtitle1</BulkiSubtitle1>
      <BulkiSubtitle2>Subtitle2</BulkiSubtitle2>

      <BulkiOverline>Overline</BulkiOverline> <br />

      <BulkiCaption>Caption</BulkiCaption> <br />
      <BulkiButtonText>Button</BulkiButtonText> <br />

    </>
  )
}
