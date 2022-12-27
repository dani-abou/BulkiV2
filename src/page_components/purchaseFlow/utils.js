import { useEffect } from "react"
import getUserData from "../../api/database/users/getUserData"

export const usePocInfo = (userId, setPOC) => {
  useEffect(() => {
    const setter = async () => {
      if (userId) {
        const response = await getUserData(userId);
        setPOC('firstName', response.firstName);
        setPOC('lastName', response.lastName);
        setPOC('email', response.email);
        setPOC('phone', response.phone);
      }
    }
    setter();
  }, [userId, setPOC])
}