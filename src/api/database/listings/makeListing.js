import uploadImages from "../images/uploadImages"
import app from "../../../../firebaseConfig"
import { ref, uploadBytes } from "firebase/storage"

const dummyDoc = {
  seller: "Family Farm",
  product: "Whole Cow",
  description: "Grassfed, wonderful, tasty, fake description, cool cool cool and tasty meat",
  sellerId: 'sellerId',
  pricing: {
    hsojhfdo: { quantity: 50, price: 12, title: "hhhhhh" },
    djfsdjn: { quantity: 70, price: 80, title: '' }
  },
  images: ['mulch.png'],
  thisIncludes: [{ label: 'bags of mulch', quantity: '5' }, { label: 'breadsticks', quantity: '70' }]
}

const makeListing = async (user, listing, images) => {
  if (user) {
    const formData = new FormData();
    formData.append('file', images[0].file)

    const response = await fetch('/api/database/listings/makelisting', {
      method: 'POST',
      data: JSON.stringify(formData),
      // data: images[0].file
    });
    const myJson = await response.json();
    console.log(myJson)
  }
  // await uploadImages(listing.id, images);


}


export default makeListing