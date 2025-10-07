import { useParams } from "react-router-dom"
import StoreBg from "../components/Store/Books/StoreBg"
import StoreBtn from "../components/Store/Books/StoreBtn"
const CategoriesPage = () => {
  const {genre} =useParams()
  console.log(genre, "from params")
  return (
    <section>
       <StoreBg/>
      <StoreBtn/>
       
    </section>
  )
}

export default CategoriesPage