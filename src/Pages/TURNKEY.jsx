import React from 'react'
import Section from '../Component/Section'
import TurnKey2 from "../Media/TurnKey.jpg"
function TurnKey() {
  const details={
    image:TurnKey2,
    caption:"ALL TURNKEY PROJECT",
    para:"A turnkey project is a type of interior design project where the designer is responsible for overseeing the entire process, from start to finish. This includes everything from the initial concept and design phase to the final installation and completion of the project. The client can expect a completed, fully functional space that is ready for immediate use.The turnkey approach offers clients a streamlined process, as they only have to deal with one point of contact throughout the entire project. The designer will work closely with the client to understand their needs and goals for the space and will then take care of all aspects of the project, including selecting materials and finishes, managing the construction process, and overseeing the installation of all elements.Turnkey projects are especially beneficial for clients who want a hassle-free experience, don't have the time or resources to manage a project themselves, or want to ensure that their project is completed on time and within budget.In summary, a turnkey project is an interior design service where the designer takes care of every aspect of the project from start to finish, providing clients with a fully functional and ready-to-use space. The turnkey approach offers a streamlined process, with a single point of contact throughout the entire project and is beneficial for clients who want a hassle-free experience and ensure the project is completed on time and within budget."
  }
    return (
    <div>
        <Section data={details}/>
    </div>
  )
}

export default TurnKey