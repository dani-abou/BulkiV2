import { Catalog } from "../src/page_components";
import { useEffect } from "react"
import { useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation'

const PAGE_META = {
  title: 'Listings'
}

const ListingsPage = ({ headControls, ...props }) => {

  const { t } = useTranslation('common');

  useEffect(() => headControls(PAGE_META), [headControls])

  const router = useRouter()
  const { search } = router.query;

  return <Catalog searchQuery={search} />
}



// export const getServerSideProps = async ({ locale }) => {

//   const translator = await serverSideTranslations(locale, ['common']);
//   return ({
//     props: {
//       // locale: locale,
//       test: locale,
//       translator: translator
//     }
//   })
// };

export default ListingsPage