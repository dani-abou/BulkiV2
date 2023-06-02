import { useEffect } from "react";
import AboutUs from "../src/page_components/aboutUs";

const PAGE_HEAD = {
  title: 'About Us'
}

export default function AboutUsPage({ headControls }) {
  useEffect(() => headControls(PAGE_HEAD));
  return <AboutUs />
}