export default async function makePayment(stripe, elements, callback, errorCallback) {
  try {

    // const { origin } = window.location
    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      redirect: "if_required",
      confirmParams: {
        return_url: "https://bulki.us",
      },
    });
    if (error) throw error;
    await callback();
  } catch (e) {
    errorCallback(e.number, ', ', e.code + ": " + e.message);
    console.log(e)
  }
}
