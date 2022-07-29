import Gallery from '../gallery';
import BulkiPage from '../components/BulkiPage';

export default function Home() {
  if (process.env.NODE_ENV === 'development') return <Gallery />
  return (
    <BulkiPage>Home</BulkiPage>
  )
}
