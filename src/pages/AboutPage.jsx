import AboutChurch from "../components/About/AboutChurch"
import Branches from "../components/About/Branches"
import Statement from "../components/About/Statement"
import Pillars from "../components/About/Pillars"
import CoreValue from "../components/About/CoreValue"
import LastSection from "../components/About/LastSection"
const AboutPage = () => {
  return (
    <section>
      <AboutChurch/>
      <Branches/>
      <Statement/>
      <Pillars/>
      <CoreValue/>
      <LastSection/>
    </section>

  )
}

export default AboutPage