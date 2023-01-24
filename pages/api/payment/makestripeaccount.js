import stripe from "stripe";

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
    last_name: 'white'
  }
}

export default async function makestripeaccount(req, res) {
  const accountInfo = dummy;
  try {

    const account = await ourStripe.accounts.create(
      {
        ...individual,
        type: 'custom',
        country: 'US',
        capabilities: { transfers: { requested: true } },
        external_account: accountInfo,
        tos_acceptance: { date: Math.floor(Date.now() / 1000), ip: req.socket.remoteAddress },
      })

    // let paymentAccount
    // if (accountInfo.account_type === 'card') {
    //   paymentAccount = await makestripecard(accountInfo)
    // } else if (accountInfo.account_type === 'bank_account') {
    //   paymentAccount = await makestripebank(account.id, accountInfo);
    // } else throw 'Invalid account_type'


    res.status(200).json({ message: 'succcess' })
  } catch (e) {
    res.status(501).json({ message: e.message });
  }
}

async function makestripebank(accountId, accountInfo) {
  const paymentAccount = await ourStripe.accounts.createExternalAccount(accountId, accountInfo);
  return paymentAccount;
}