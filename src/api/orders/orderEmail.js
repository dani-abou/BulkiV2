export default function orderEmail(order, id, totals) {
  return `<h2>ORDER FOR ${order.firstName} ${order.lastName}</h2>
  <br/>
  Order number: ${id}
  <br/>
  <h2>Contact Info</h2>
  <br/>
  ${order.email} -- ${order.phone}
  <h2>Cart</h2>
  <br/>
  <ul>
  ${compileCart(order.cart)}
  </br>
  Subtotal: ${totals.subtotal}, Shipping: ${totals.shippingTotal}, taxed amount: ${totals.taxTotal}, TOTAL: ${totals.total}
  </br>
  <h2>Shipping Info</h2>
  ${order.address}, ${order.city}, ${order.state}, ${order.zipCode}
  `
}

function compileCart(cart) {
  let output = ''
  Object.keys(cart).forEach(cartKey => {
    output += `<li>${cartKey}: ${cart[cartKey]}</li>`
  })
  return output
}