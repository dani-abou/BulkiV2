const uploadImages = async (listingId, images) => {
  var data = new FormData()
  data.files = images;
  if (listingId && images) {

    const response = await fetch(`/api/images/uploadimages/${listingId}`, {
      method: 'PUT',
      body: data
    });
    console.log(response)
  }
}

export default uploadImages