import React from 'react'
import Section from '../Component/Section'
import Luxury1 from "../Media/Luxury.jpg"
function Luxury() {
  const details={
    image:Luxury1,
    caption:"LUXURY/COMMERCIAL INTERIOR DESIGNER",
    para:"A luxury and commercial interior designer is an expert in creating visually stunning, functional and high-end spaces. We understand the importance of creating a space that not only looks good but also serves a purpose. We are skilled in designing spaces that reflect the brand and the atmosphere of a business.Luxury interior design is all about creating a space that is visually pleasing, comfortable and sophisticated. The designer will use high-end materials, textures, and finishes to create a unique and luxurious atmosphere. We will also pay attention to the smallest of details, ensuring that the space is both aesthetically pleasing and functional.On the other hand, commercial interior design is focused on creating functional spaces that are tailored to the specific needs of a business. The designer will take into account how the space will be used, the type of business, and the brand. We will design spaces that are both functional and reflective of the business, resulting in a space that is both comfortable and efficient for employees and customers alike.In summary, luxury and commercial interior designers are experts in creating visually stunning, functional and high-end spaces that reflect the brand and the atmosphere of a business. We are skilled in designing spaces that meet the specific needs of their clients, whether that be a luxurious residential space or a functional commercial space."
  }
    return (
    <div>
        <Section data={details}/>
    </div>
  )
}

export default Luxury