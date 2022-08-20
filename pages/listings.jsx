import BulkiPage from "../src/common/BulkiPage"
import { useTranslation } from 'react-i18next';
import { Listings } from "../src/pagesSrc";
import { useEffect } from "react"


const PAGE_META = {
  title: 'Listings'
}

const ListingsPage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])

  const { t } = useTranslation();
  return <Listings />

}

export default ListingsPage