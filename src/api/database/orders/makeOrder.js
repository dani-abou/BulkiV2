const dummyDoc = {
  listingId: 'K227iZEQJRSPioYUYf5Q',
  contactEmail: 'dummy@gmail.com',
  destination: 'acct_1MVhNrGhBaNPTemb',
  sellerId: 'FnaR9P1xGdbzecdDLn1pXo6clXD2',
}

const makeOrder = async (uid, listing = dummyDoc, amount = 10000) => {
  if (listing && uid) {
    const response = await fetch('/api/database/orders/makeorder', {
      method: 'POST',
      body: JSON.stringify({ listing, buyerId: uid, amount })
    });
    const myJson = await response.json();
    console.log(myJson)
    return myJson
  }
}

export default makeOrder;