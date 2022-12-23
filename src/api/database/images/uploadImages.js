const uploadImages = async (listingId, images) => {
  var data = new FormData()
  data.append('file', images[0].file)
  console.log(images, images[0].file)
  console.log(typeof images[0].file)
  // if (listingId && images) {
  //   const response = await fetch(`/api/database/images/${listingId}`, {
  //     method: 'PUT',
  //     body: data
  //   });
  //   console.log(response)
  // }
}

export default uploadImages