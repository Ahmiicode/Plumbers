import React from 'react'
import Infosection from '../components/contactus/Infosection'
import Form from '../components/contactus/Form'
import Herosection from '../components/contactus/Herosection'
import Faq from '../components/contactus/Faq'
import ShowContacts from '../ShowContact'

const Contactus = () => {
  return (
    <>
    <Herosection/>
   <Infosection/>
   <Form/>
   <Faq/>
   <ShowContacts/>
    
    </>
  )
}

export default Contactus