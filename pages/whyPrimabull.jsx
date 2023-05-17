import { useEffect } from "react";
import WhyPrimabull from "../src/page_components/whyPrimabull";

const PAGE_HEAD = {
  title: 'About Us'
}

export default function WhyPrimabullPage({ headControls }) {
  useEffect(() => headControls(PAGE_HEAD));
  return <WhyPrimabull />
}