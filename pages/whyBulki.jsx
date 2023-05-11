import { useEffect } from "react";
import WhyBulki from "../src/page_components/whyBulki";

const PAGE_HEAD = {
  title: 'About Us'
}

export default function WhyBulkiPage({ headControls }) {
  useEffect(() => headControls(PAGE_HEAD));
  return <WhyBulki />
}