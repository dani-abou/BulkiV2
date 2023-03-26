const getListing = async (listingId) => {
  if (listingId) {
    const response = await fetch(`/api/database/listings/getlisting/${listingId}`, {
      method: 'GET'
    });
    const responseInObject = await response.json();
    return { ...responseInObject, listingId }
  } else {
    throw 'Undefined listingId given'
  }
}

export default getListing