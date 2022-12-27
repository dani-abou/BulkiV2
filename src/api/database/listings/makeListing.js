import uploadImages from "../images/uploadImages"
import app from "../../../../firebaseConfig"
import { ref, uploadBytes } from "firebase/storage"
import axios from "axios"
import { cloneDeep } from "lodash"

const makeListing = async (user, listing, images) => {
  if (user) {

    //Ensures all the pricing labels are not empty
    listing.pricing = fixPricingLabels(listing.pricing);

    //Prepares the data for request
    const formData = new FormData();
    for (var img of images) {
      formData.append('images', img)
    }
    formData.append('listing', JSON.stringify({ ...listing, sellerId: user }))

    //Send request
    const response = await fetch('/api/database/listings/makelisting', {
      method: 'POST',
      body: formData,
    });
    const myJson = await response.json();
    console.log(myJson)
  }


}

const fixPricingLabels = (uneditedPricing) => {
  let editedPricing = cloneDeep(uneditedPricing);
  Object.keys(uneditedPricing).forEach(key => {
    const currentTier = uneditedPricing[key];
    if (currentTier.label.length === 0) {
      editedPricing[key].label = currentTier.quantity + (currentTier.quantity === "1" ? " unit" : " units")
    }
  })
  return editedPricing;
}


export default makeListing