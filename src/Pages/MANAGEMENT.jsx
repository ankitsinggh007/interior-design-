import React from 'react'
import Section from '../Component/Section'
import project from "../Media/project.jpg"


function MANAGEMENT() {
    const details={
        image:project,
        caption:"PROJECT MANAGEMENT",
        para:"Project management is an essential aspect of interior design, as it ensures that all aspects of a project are coordinated and executed in a timely and efficient manner. Interior design project managers are responsible for overseeing all aspects of a project, from the initial concept and design phase to the final installation and completion of the project.The project manager will work closely with the client to understand their needs and goals for the space. They will then work with the design team to develop a concept and design plan, taking into account the client's budget and timeline. Once the design plan is approved, the project manager will work to coordinate all aspects of the project, including selecting materials and finishes, managing the construction process, and overseeing the installation of all elements.Throughout the project, the project manager will also be responsible for monitoring progress, addressing any issues that arise, and communicating with all stakeholders to ensure that the project stays on schedule and within budget.In summary, interior design project management is a critical aspect of creating a successful interior design project. The project manager acts as the central point of coordination, ensuring that all aspects of the project are executed efficiently and effectively, and that the client's needs and goals are met. They work closely with the design team, contractors and vendors, and clients to ensure that the project is completed on time and within budget."
      }
  return (
    <div>
        <Section data={details}/>

    </div>
  )
}

export default MANAGEMENT