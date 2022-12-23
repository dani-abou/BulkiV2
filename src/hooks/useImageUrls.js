import { useState, useEffect } from "react";
import { getImage } from './utils'
import { DUMMY_IMAGES } from "./data";

//First image of all the given listings

export const useImageUrls = (listings, setUrls) => {
  const [loading, setLoading] = useState({})

  useEffect(() => {
    const getImages = async () => {
      for (const listing of listings) {
        setLoading(prev => ({ ...prev, listing: true }))
        // if (process.env.NODE_ENV === 'development') {
        //   const url = DUMMY_IMAGES[listing?.images[0]]
        //   setUrls(prev => {
        //     prev[listing.id] = url
        //     return prev
        //   })
        //   setLoading(prev => ({ ...prev, listing: false }))
        // } else 
        // if (listing?.images[0]) {
        //   const url = await getImage(listing.id, listing?.images[0])
        //   setUrls(prev => {
        //     prev[listing.id] = url
        //     return prev
        //   })
        //   if (url) setLoading(prev => ({ ...prev, listing: false }))
        // }
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
          if (process.env.NODE_ENV) {
            const url = DUMMY_IMAGES[image]
            setUrls(prev => [...prev, url])
          } else {
            const url = await getImage(id, image)
            setUrls(prev => [...prev, url.src])
          }
        }
        setLoading(false)
      }
    }
    getImages()
  }, [product])
  return [urls, loading]
}
