import React from 'react'

const ContactCard = ({ name, tel, email }) => {
  return (
    <div>
        <h2>Name: {name}</h2>
        <h3>Telephone: {tel}</h3>
        <h3>Email: {email}</h3>
    </div>
  )
}

export default ContactCard