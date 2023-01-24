const PAYMENT_KEYS = ['object', 'country', 'currency', 'account_holder_name', 'account_holder_type', 'routing_number', 'account_number'];

export default async function getStripeAccount(uid) {
  if (uid) {
    const response = await fetch(`/api/payment/getstripeaccount/${uid}`, {
      method: 'GET'
    })

    const myJson = await response.json();

    const defaultPayment = myJson.external_accounts.data.find(e => e.default_for_currency && e.country === "US")
    let flattenedPayment = {};
    Object.keys(defaultPayment).forEach(key => {
      if (PAYMENT_KEYS.includes(key)) flattenedPayment[key] = defaultPayment[key] || '';
    })
    return {
      paymentMethod: flattenedPayment,
      profile: {
        business_type: myJson.business_type || 'individual',
        name: myJson.company?.name || '',
        url: myJson.business_profile?.url || ''
      }
    }
  }
}

