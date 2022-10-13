import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Contacts = () => {
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [tel, setTel] = useState();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:8081/addContact', {lName: fName, lName: lName, tel: tel, email: email})
      .then((res) => {
          console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getContacts = () => {
    axios.get('http://localhost:8081/getContacts')
      .then((res) => {
        console.log(res);
        
    })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="contacts">
      <form className="contacts__form" onSubmit={handleSubmit}>
        <label className="contacts__form__label">First name:
        <input className="contacts__form__input" type="text" onChange={(e) => setFname(e.target.value)}/></label>

        <label className="contacts__form__label">Last name:
        <input className="contacts__form__input" type="text" onChange={(e) => setLname(e.target.value)}/></label>

        <label className="contacts__form__label">Number:
        <input className="contacts__form__input" type="tel" onChange={(e) => setTel(e.target.value)}/></label>

        <label className="contacts__form__label">Email:
        <input className="contacts__form__input" type="email" onChange={(e) => setEmail(e.target.value)}/></label>

        <input type="submit" className="contacts__form__submit"></input>
      </form>
      <div className="contacts__cards">
      <button onClick={getContacts}>xxx</button>
      </div>
    </div>

  )
}

export default Contacts