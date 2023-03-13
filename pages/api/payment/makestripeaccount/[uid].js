import { doc, updateDoc } from "firebase/firestore";
import stripe from "stripe";
import app from "../../../../firebaseConfig";

const ourStripe = stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

//account info (for bank account): {
// account type: 'card' or 'bank_account'
// country
// currency
// account holder name
// account holder type 'individual' or 'company'
// routing number
// account number 
//}
const dummy = {
  object: 'bank_account',
  country: 'US',
  currency: 'usd',
  account_holder_name: 'Jack White',
  account_holder_type: 'individual',
  routing_number: '110000000',
  account_number: '000123456789'
}

const dummyAccount = {
  business_type: 'company',
  company: {
    name: 'NE Farms',
    tax_id: '000000000'
  },
  business_profile: {
    url: 'www.bulki.us'
  }
}

const individual = {
  business_type: 'individual',
  business_profile: {
    url: 'www.bulki.us'
  },
  individual: {
    first_name: 'jack',
    last_name: 'white',
    dob: {
      day: 15,
      month: 2,
      year: 2000
    }
  }
}

export default async function makestripeaccount(req, res) {

  try {
    const { uid } = req.query
    const { profile, payment } = JSON.parse(req.body)

    const account = await ourStripe.accounts.create(
      {
        type: 'custom',
        country: 'US',
        capabilities: { transfers: { requested: true } },
        external_account: payment,
        tos_acceptance: { date: Math.floor(Date.now() / 1000), ip: req.socket.remoteAddress },
        ...profile
      })

    const userDocRef = doc(app.firestore, "users", uid);
    await updateDoc(userDocRef, {
      stripeId: account.id
    })

    res.status(200).json({ message: 'succcess' })
  } catch (e) {
    res.status(501).json({ message: e.message });
  }
}

async function makestripebank(accountId, accountInfo) {
  const paymentAccount = await ourStripe.accounts.createExternalAccount(accountId, accountInfo);
  return paymentAccount;
}