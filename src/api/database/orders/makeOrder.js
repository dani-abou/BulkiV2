const dummyDoc = {
  product: 'Cow',
  quantity: 1,
  price: 2000,
  sellerId: 'sellerId',
}

const makeOrder = async (listingId, user) => {
  if (listingId && user) {
    const response = await fetch('/api/database/orders/makeorder', {
      method: 'POST',
      body: JSON.stringify({ ...dummyDoc, listing: listingId, buyerId: user.uid })
    });
    return await response.json();
  }
}

export default makeOrder;