import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Contacts = () => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState();
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    axios.post('http://localhost:8081/addContact', {name: name, tel: tel, email: email})
      .then((res) => {
          console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="contacts">
      <form className="contacts__form" onSubmit={handleSubmit}>
        <label className="contacts__form__label">Name:
        <input className="contacts__form__input" type="text" onChange={(e) => setName(e.target.value)}/></label>
        
        <label className="contacts__form__label">Number:
        <input className="contacts__form__input" type="tel" onChange={(e) => setTel(e.target.value)}/></label>

        <label className="contacts__form__label">Email:
        <input className="contacts__form__input" type="email" onChange={(e) => setEmail(e.target.value)}/></label>

        <input type="submit" className="contacts__form__submit"></input>
      </form>
    </div>

  )
}

export default Contacts