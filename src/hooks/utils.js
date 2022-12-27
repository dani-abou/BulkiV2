import { ref, getDownloadURL } from "firebase/storage";
import app from "../../firebaseConfig";

const LISTINGS_REF = `gs://${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}/listings/`

export const getImage = async (productID, imageName) => {
  const imgRef = ref(app.storage, LISTINGS_REF + productID + '/' + imageName);
  try {
    const imgUrl = await getDownloadURL(imgRef);
    return imgUrl
  } catch (error) { console.log(`Could not find image: ${imageName} for ${productID}`) }
}

