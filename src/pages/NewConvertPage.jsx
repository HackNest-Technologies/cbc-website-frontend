import ConvertFaq from "../components/NewConvert/ConvertFaq";
import ConvertForm from "../components/NewConvert/ConvertForm";
import NewConvertBg from "../components/NewConvert/NewConvertBg";
import NewConvertVideo from "../components/NewConvert/NewConvertVideo";
import WelcomeVideo from "../components/NewMember/WelcomeVideo";

const NewConvertPage = () => {
  return (
    <section>
      <NewConvertBg />
      <NewConvertVideo/>
      <ConvertForm/>
      <ConvertFaq/>
    </section>
  );
};

export default NewConvertPage;
