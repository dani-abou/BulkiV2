import { useState } from "react"
import makeOrder from "../../api/makeOrder.js"
import BulkiNavbar from "../../components/BulkiNavbar/BulkiNavbar.jsx"
import { StyledBackground, StyledButton, StyledCenter, StyledSubtitle, StyledTitle } from "./style.js"

export default function Landing() {

  const [name, setName] = useState({ first: 'Jack', last: 'White', email: 'jwhite@gmail.com' })
  const [address, setAddress] = useState({ street: '47 Main St', city: 'Jacksonville', state: 'MA', zip: '01332' })

  const sendOrder = async function () {
    await makeOrder('Beef', { name, address })
  }

  return <StyledBackground>
    <BulkiNavbar />
    <StyledCenter>
      <StyledTitle>True Farm to Table</StyledTitle>
      <br />
      <StyledSubtitle>Meat from local farmers shipped to your door!</StyledSubtitle>
      <br />

      <StyledButton size='large'>Shop Now</StyledButton>
    </StyledCenter>
  </StyledBackground>
}