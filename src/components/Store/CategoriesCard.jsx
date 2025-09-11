import bookCategories from "../../data/bookscategories";
import { Link } from "react-router-dom";
const CategoriesCard = () => {
  return (
    <section className="">
      <section className="relative mt-10">
        <section className="container mx-auto px-6 grid grid-cols-2 gap-5 md:px-0 md:grid-cols-3 lg:grid-cols-4  lg:gap-y-12">
          {bookCategories.map((category) => (
            <div className="relative" key={category.id}>
              <Link className="relative block" to={category.path}>
                <img
                  src={category.bgImg}
                  className="h-[161px] rounded-[10.86px] w-full md:h-[296px] md:rounded-[20px]"
                />
                <div className="absolute inset-0 opacity-60 bg-[#000] rounded-[8px]"></div>
                <h3 className="px-2 text-center font-satoshi font-semibold text-[22.8px] leading-[100%] absolute inset-0 text-white flex justify-center items-center md:text-[42px]">
                  {category.category}
                </h3>
              </Link>
            </div>
          ))}
        </section>
        <section className="mx-2 absolute top-[10%] right-0 left-0 bg-[#FFECC0] rounded-[20px] h-[536px] -z-50 md:h-[593px] md:mx-3 lg:mx-10 lg:h-[425px] lg:top-[20%]"></section>
      </section>
    </section>
  );
};

export default CategoriesCard;
