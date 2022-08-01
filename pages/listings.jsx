import BulkiPage from "../src/common/BulkiPage"
import { useTranslation } from 'react-i18next';
import { Listings } from "../src/pagesSrc";

const ListingsPage = () => {
  const { t } = useTranslation();
  return <BulkiPage title="Listings">
    <Listings />
  </BulkiPage>
}

export default ListingsPage