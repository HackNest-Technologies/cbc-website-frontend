import StoreBg from "../components/Store/Books/StoreBg"
import StoreBtn from "../components/Store/Books/StoreBtn"
import DisplayBooks from "../components/Store/Books/DisplayBooks"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  const [cartID, setCartID] = useState(null);

  const { user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (user) {
      setCartID(user.cart.id)
    } else {
      const cartId = localStorage.getItem("cart_id");
      setCartID(cartId);
    }
  }, [user])
 
  return (
    <section>
      <StoreBg cartID={cartID} setCartID={setCartID} />
      <StoreBtn/>
      <DisplayBooks cartID={cartID} setCartID={setCartID} />
    </section>
  )
}

export default CategoriesPage