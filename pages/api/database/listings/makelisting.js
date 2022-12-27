import { collection, doc, writeBatch } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { cloneDeep } from "lodash";
import app from "../../../../firebaseConfig";
import nextConnect from 'next-connect';
import multer from 'multer'



const apiRoute = nextConnect({
  // Handle any other HTTP method
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const multerStorage = multer.memoryStorage();

const upload = multer({ storage: multerStorage });
// Returns middleware that processes multiple files sharing the same field name.
const uploadMiddleware = upload.array('images');

// Adds the middleware to Next-Connect
apiRoute.use(uploadMiddleware);

// Process a POST request
apiRoute.post(async (req, res) => {

  try {
    const timestamp = Date.now();
    const images = req.files;

    const listing = JSON.parse(req.body.listing);

    const db = app.firestore
    //Instantiate batch
    const batch = writeBatch(db);
    //Creates the listing doc
    listing.postedOn = timestamp;


    //Sets up the new document references
    const newListingDoc = doc(collection(app.firestore, "listings"));
    const newListingId = newListingDoc.id

    //Uploads the images to storage, and prepares the array of image paths
    const imagePaths = await uploadImages(images, newListingDoc.id, res);

    const listingWithImages = { ...listing, images: imagePaths }

    //Uploads the new docs to the database
    addListingToCatalog(batch, listingWithImages, newListingDoc)
    addListingToUser(batch, listingWithImages, newListingId)

    // //Commits the batch
    await batch.commit()
    res.status(200).json(newListingId);

  } catch (e) {
    res.status(501).json(e.message);
  }
});

export default apiRoute;


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
  const newDoc = { product: listing.name, postedOn: listing.postedOn, thumbnail: listing.images[0] }
  batch.set(newDocRef, newDoc);
}

// Uploads the images to storage, and then creates the array of paths to those images
async function uploadImages(images, listingId) {
  let paths = [];

  for (var index in images) {
    const image = images[index]

    const path = `listings/${listingId}/${image.originalname}`
    const imgRef = ref(app.storage, path);
    await uploadBytes(imgRef, image.buffer);
    const newUrl = await getDownloadURL(imgRef);
    paths.push(newUrl);
  }
  // batch.update(doc(collection(app.firestore, "listings"), listingId), { images: paths })
  return paths
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};