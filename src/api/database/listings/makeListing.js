import { fixPricingLabels } from "../../../page_components/newListing/utils.";

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
  //TODO Add seller name


}


export default makeListing