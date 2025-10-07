import CardForm from "../components/NewMember/CardForm"
import Faq from "../components/NewMember/Faq"
import NewMemberBg from "../components/NewMember/NewMemberBg"
import WelcomeVideo from "../components/NewMember/WelcomeVideo"

const NewMemberPage = () => {
  return (
    <section>
      <NewMemberBg/>
      <WelcomeVideo/>
      <CardForm/>
      <Faq/>
    </section>
  )
}

export default NewMemberPage