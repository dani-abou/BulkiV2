import BulkiCard from "../../../components/BulkiCard";
import { StyledAccountCard, StyledAccountCardContainer } from "../style"

const DUMMY_ORDER = {
  orderId: 'JWPFsz0vrH5n93HvfKgm',
  product: 'Cow',
  quantity: 1,
  listing: '3VgHlyt43mrWHBlFpFIK'
}

const DUMMY_ORDERS = Array(10).fill(DUMMY_ORDER);


const AccountListings = () => {

  return <StyledAccountCardContainer>
    {
      DUMMY_ORDERS.map((order, index) => {
        return <StyledAccountCard key={index} image='cans.png' header={order.product}>
          CHILDREN
        </StyledAccountCard>
      })
    }
  </StyledAccountCardContainer>

}
export default AccountListings