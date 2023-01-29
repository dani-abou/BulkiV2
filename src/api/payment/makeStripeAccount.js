import { format } from "date-fns";

export default async function makeStripeAccount(flattenedValues, uid) {
  let formattedProfile;
  if (flattenedValues?.profile?.business_type === 'company') formattedProfile = formatCompany(flattenedValues?.profile);
  else formattedProfile = formatIndividual(flattenedValues?.profile)

  const formattedPayment = formatPayment(flattenedValues)
  console.log({ profile: formattedProfile, payment: formattedPayment })
  // const response = await fetch("/api/payment/makestripeaccount", {
  //   method: "POST",
  //   body: JSON.stringify({ profile: formattedProfile, payment: formattedPayment }),
  // });
  // const myJson = await response.json();
  // console.log(myJson);
  // return myJson
}

function formatPayment(flattenedValues) {
  return {
    object: 'bank_account',
    country: 'US',
    currency: 'usd',
    account_holder_type: flattenedValues?.profile.business_type,
    ...flattenedValues.paymentMethod
  }
}

function formatCompany(flattenedValues) {
  return {
    business_type: 'company',
    company: {
      name: flattenedValues.name
    },
    business_profile: {
      url: flattenedValues.url
    }
  }
}

function formatIndividual(flattenedValues) {
  const date = format(flattenedValues.dob, 'mm/dd/yyyy').split('/')
  const dob = {
    day: parseInt(date[1]),
    month: parseInt(date[0]),
    year: parseInt(date[2]),
  }
  return {
    business_type: 'individual',
    business_profile: {
      url: flattenedValues.url
    },
    individual: {
      first_name: flattenedValues.firstName,
      last_name: flattenedValues.lastName,
      dob
    }
  }
}