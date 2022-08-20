import { useState, useEffect } from "react";
import { getImage } from './utils'

//First image of all the given listings

export const useImageUrls = (listings, setUrls) => {
  // const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState({})

  useEffect(() => {
    const getImages = async () => {
      for (const listing of listings) {
        setLoading(prev => ({ ...prev, listing: true }))
        if (listing?.images[0]) {

          const url = await getImage(listing.id, listing?.images[0])
          setUrls(prev => {
            prev[listing.id] = url
            return prev
          })
          // accListings[listing.id] = url
          if (url) setLoading(prev => ({ ...prev, listing: false }))
        }
        // for (const image of listing.images) {
        //   accUrls.push(url)
        // }
        // accListings[listing.id] = accUrls;
      }
    }
    getImages()
  }, [listings, setUrls])
  return loading
}

//All the images of the given product
export const useImagesOfProduct = (product) => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getImages = async () => {
      const { id, images } = product
      setLoading(true);
      if (product && Object.keys(product).length > 0) {
        for (const image of images) {
          const url = await getImage(id, image)
          setUrls(prev => [...prev, url])
        }
        setLoading(false)
      }
    }
    getImages()
  }, [product])
  return [urls, loading]
}
