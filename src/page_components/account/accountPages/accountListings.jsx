import { useEffect, useMemo, useState } from "react";
import getUserListings from "../../../api/database/users/getUserListings";
import BulkiCard from "../../../components/BulkiCard";
import { StyledAccountCard, StyledAccountCardContainer } from "../style";

const DUMMY_ORDER = {
  orderId: 'JWPFsz0vrH5n93HvfKgm',
  product: 'Cow',
  quantity: 1,
  listing: '3VgHlyt43mrWHBlFpFIK'
}

const DUMMY_ORDERS = Array(10).fill(DUMMY_ORDER);


const AccountListings = ({ userData }) => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const getListings = async () => {
      setLoading(true);
      const ourListings = await getUserListings(userData?.uid);
      setListings(ourListings);
      setLoading(false);
    }
    getListings()
  }, [userData?.uid]);

  return <StyledAccountCardContainer>
    {!loading && listings.map((order, index) => (<StyledAccountCard key={index} image={order.thumbnail} header={order.product}>
      CHILDREN
    </StyledAccountCard>
    ))
    }
  </StyledAccountCardContainer>

}
export default AccountListings