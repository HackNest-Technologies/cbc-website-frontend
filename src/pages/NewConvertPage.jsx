import ConvertFaq from "../components/NewConvert/ConvertFaq";
import ConvertForm from "../components/NewConvert/ConvertForm";
import NewConvertBg from "../components/NewConvert/NewConvertBg";
import WelcomeVideo from "../components/NewMember/WelcomeVideo";

const NewConvertPage = () => {
  return (
    <section>
      <NewConvertBg />
      <WelcomeVideo/>
      <ConvertForm/>
      <ConvertFaq/>
    </section>
  );
};

export default NewConvertPage;
