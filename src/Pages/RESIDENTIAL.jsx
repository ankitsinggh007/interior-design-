import React from 'react'
import Section from '../Component/Section'
import Residen1 from "../Media/Residen.jpg"
function Residen() {
  const details={
    image:Residen1,
    caption:"RESIDENTIAL INTERIOR DESIGNER",
    para:"A residential interior designer is an expert in creating visually stunning and functional spaces for homes. They understand the importance of creating a space that not only looks good but also serves a purpose, and reflects the personal style and taste of the homeowner. They are skilled in designing spaces that are comfortable, functional, and aesthetically pleasing.The designer will work closely with the homeowner to understand their needs and goals for the space. They will then develop a concept and design plan, taking into account the homeowner's budget and timeline. Once the design plan is approved, the designer will work to coordinate all aspects of the project, including selecting materials and finishes, managing the construction process, and overseeing the installation of all elements.Throughout the project, the designer will also be responsible for monitoring progress, addressing any issues that arise, and communicating with all stakeholders to ensure that the project stays on schedule and within budget. In addition, they will also take care of sourcing, purchasing and installation of furniture, lighting, accessories and other decor elements.In summary, a residential interior designer is an expert in creating visually stunning and functional spaces for homes. They work closely with homeowners to understand their needs and goals for the space, and then develop a concept and design plan, taking into account the homeowner's budget and timeline. They coordinate all aspects of the project, including selecting materials and finishes, managing the construction process, and overseeing the installation of all elements to ensure that the project is completed on time and within budget."
  }
    return (
    <div>
        <Section data={details}/>
    </div>
  )
}

export default Residen