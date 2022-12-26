import { collection, doc, writeBatch } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { cloneDeep } from "lodash";
import app from "../../../../firebaseConfig";
import formidable from "formidable";

/**API funciton for adding a listing to the database */
export default async function makeListing(req, res) {
  try {
    const form = formidable({ multiples: true });
    let variable = 10;

    // res.status(200).json(form)
    form.parse(req, (err, fields, files) => variable = 400);
    res.status(200).json(variable)


    // const timestamp = Date.now();
    // const listing = JSON.parse(req.body);
    // const images = JSON.parse(req.data);

    // const db = app.firestore
    // //Instantiate batch
    // const batch = writeBatch(db);
    // //Creates the listing doc
    // listing.postedOn = timestamp;

    // //Sets up the new document references
    // const newListingDoc = doc(collection(app.firestore, "listings"));
    // const newListingId = newListingDoc.id

    // //Uploads the images to storage, and prepares the array of image paths
    // const imagePaths = await uploadImages(images, newListingDoc.id);

    // res.status(200).json({ test: imagePaths });


    // const listingWithImages = { ...listing, images: imagePaths }

    // //Uploads the new docs to the database
    // addListingToCatalog(batch, listingWithImages, newListingDoc)
    // addListingToUser(batch, listingWithImages, newListingId)

    // //Commits the batch
    // await batch.commit()
    // res.status(200).json({ listingId: newListingId });

  } catch (e) {
    res.status(400).json(e.message);
  }
}

// Formats and adds the doc to the all listings database
function addListingToCatalog(batch, listing, docRef) {
  const { pricing, ...newListing } = listing;
  batch.set(docRef, newListing);
  //Creates a doc in the pricing collection for each pricing option
  Object.values(pricing).forEach(price => {
    const newPricingDoc = doc(collection(docRef, "pricing"));
    let priceObject = cloneDeep(price);
    if (!priceObject.title || priceObject.title.length === 0) {
      priceObject.title = priceObject.quantity + " units"
    }
    batch.set(newPricingDoc, priceObject)
  })
}

// Formats and ads the doc to the user's listings collection
function addListingToUser(batch, listing, newListingId) {
  const newDocRef = doc(collection(doc(collection(app.firestore, "users"), listing.sellerId), "listings"), newListingId);
  const newDoc = { product: listing.product, postedOn: listing.postedOn, thumbnail: listing.images[0] }
  batch.set(newDocRef, newDoc);
}

// Uploads the images to storage, and then creates the array of paths to those images
async function uploadImages(images, listingId) {


  let paths = [];
  const path = `listings/${listingId}/${images[0].id}`
  const imgRef = ref(app.storage, path);
  // await uploadBytes(imgRef, images);

  return images
  for (var image in images) {
    const path = `listings/${listingId}/${image.id}`
    const imgRef = ref(app.storage, path);

    await uploadBytes(imgRef, image.file);
    const newUrl = await getDownloadURL(imgRef);
    paths.push(newUrl);
  }
  batch.update(doc(collection(app.firestore, "listings"), listingId), { images: paths })
}