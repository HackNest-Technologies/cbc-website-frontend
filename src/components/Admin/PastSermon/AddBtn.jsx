import { Link } from "react-router-dom"
const AddBtn = ({title, addMsg, linkTo}) => {
  return (
 <section>
      <section className="pt-2">
        <div className="flex justify-between">
          <h2 className="text-3xl font-inter font-semibold text-[#101828]">
            {title}
          </h2>
          <Link
            to= {linkTo}
            className="flex items-center gap-2 w-[168px] h-[44px] py-[10px] px-[18px] bg-[#FD9F2B] rounded-[8px] text-sm font-inter font-semibold text-white"
          >
            <button to="" className="text-lg">
              +
            </button>
            {addMsg}
          </Link>
        </div>
      </section>
    </section>  )
}

export default AddBtn