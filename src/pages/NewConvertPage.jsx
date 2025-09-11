import ConvertFaq from "../components/NewConvert/ConvertFaq";
import NewConvertBg from "../components/NewConvert/NewConvertBg";
import WelcomeVideo from "../components/NewMember/WelcomeVideo";

const NewConvertPage = () => {
  return (
    <section>
      <NewConvertBg />
      <WelcomeVideo/>
      <ConvertFaq/>
    </section>
  );
};

export default NewConvertPage;
