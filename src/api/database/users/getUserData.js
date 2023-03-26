const getUserData = async (userId) => {
  if (userId) {
    const response = await fetch(`/api/database/users/getuser/${userId}`, {
      method: 'GET',
    });
    return await response.json();
  } else {
    throw 'Undefined user id given'
  }
}

export default getUserData