import { useGetEventQuery } from "../../redux/apiSlice"
const AllEvents = () => {
const {loading, data} = useGetEventQuery();
console.log(data);
  return (
    <div>AllEvents</div>
  )
}

export default AllEvents