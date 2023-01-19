import React from 'react'
import Section from '../Component/Section'
import Resident1 from "../Media/Resident.jpg"
function Resident() {
  const details={
    image:Resident1,
    caption:"RESIDENTIAL / OFFICE FURNITURE SUPPLIER IN Karnataka",
    para:"A Residential and Office furniture supplier in KarnATAKA is a company that specializes in providing a wide range of furniture for residential and commercial spaces in the state of KarnATAKA. They provide a variety of options for furniture styles, materials, and designs that cater to the diverse tastes and preferences of their customers in the region. They work closely with interior designers, architects, and builders to help them select the right furniture for their projects.These suppliers typically have a showroom or an online store where customers can view and purchase the furniture. They may also offer custom design and manufacturing services, to help customers create unique and custom pieces. They also provide after-sales services such as installation, warranty and maintenance of the furniture.In summary, Residential and Office Furniture Suppliers in KarnATAKA are companies that specialize in providing a wide range of furniture options for residential and commercial spaces in the state. They work closely with designers, architects and builders to provide the right furniture and offer custom design and manufacturing services. They also provide after-sales services such as installation, warranty and maintenance of the furniture."
  }
    return (
    <div>
        <Section data={details}/>
    </div>
  )
}

export default Resident