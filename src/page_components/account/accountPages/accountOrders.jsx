import BulkiCard from "../../../components/BulkiCard";
import { StyledAccountCard, StyledAccountCardContainer } from "../style"

const DUMMY_ORDER = {
  orderId: 'JWPFsz0vrH5n93HvfKgm',
  product: 'Cow',
  quantity: 1,
  orderedOn: 1668033108879,
  seller: "Meat Men",
  status: "confirmed",
  listing: '3VgHlyt43mrWHBlFpFIK'
}

const DUMMY_ORDERS = Array(10).fill(DUMMY_ORDER);


const AccountOrders = () => {

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

export default AccountOrders