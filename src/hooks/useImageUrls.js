import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import app from "../../firebaseConfig";


const useImageUrls = (listings) => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      let accListings = {}
      for (const listing of listings) {
        let accUrls = []
        const folder = `gs://${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}/listings/${listing.id}/`

        for (const image of listing.images) {
          const imgRef = ref(app.storage, folder + image);
          console.log(folder + image)
          // try {
          const imgUrl = await getDownloadURL(imgRef);
          accUrls.push(imgUrl)
          // } catch (error) { console.log(`Could not find image: ${image} for ${listing.id}`) }
        }
        accListings[listing.id] = accUrls;
      }
      setUrls(accListings)
    }
    getImages()
  }, [listings])
  return urls
}

export default useImageUrls