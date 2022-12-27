const getListing = async (orderId) => {
  if (orderId) {
    const response = await fetch(`/api/database/orders/getorder/${orderId}`, {
      method: 'GET'
    });
    return await response.json();
  } else {
    throw 'Undefined orderId given'
  }
}

export default getListing