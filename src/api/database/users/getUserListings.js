const getUserListings = async (userId) => {
  if (userId) {
    const response = await fetch(`/api/database/users/getuserlistings/${userId}`, {
      method: 'GET',
    });
    const myJson = await response.json();
    return myJson;

  } else {
    throw 'Undefined user id given'
  }
}

export default getUserListings