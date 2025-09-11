import { useParams } from "react-router-dom"
import StoreBg from "../components/Store/Books/StoreBg"
const CategoriesPage = () => {
  const {genre} =useParams()
  console.log(genre, "from params")
  return (
    <section>
       <StoreBg/>
    </section>
  )
}

export default CategoriesPage