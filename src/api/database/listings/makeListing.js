import uploadImages from "../images/uploadImages"

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
  // if (user) {
  //   const response = await fetch('/api/database/listings/makelisting', {
  //     method: 'POST',
  //     body: JSON.stringify({ ...dummyDoc, sellerId: user.uid })
  //   });
  //   const myJson = await response.json();
  // }
  await uploadImages(listing.id, images);
}

export default makeListing