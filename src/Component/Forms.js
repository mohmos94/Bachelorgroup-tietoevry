import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';





function Forms() {

  const form = useRef();

  const [inputEmail, setInputEmail] = useState("");
  const [inputtext, setInputText] = useState("");
  


  const emailValue = (e) => {
    setInputEmail(e.target.value);

  };
  const emailText = (e) =>{
    setInputText(e.target.value);
  }


  const submitHandler = (event) => {
    event.preventDefault();
    if (inputEmail.length > 0 || inputtext.length > 0){
      emailjs
      .sendForm(
        "service_d1k02dz",
        "mosti-testing",
        form.current,
        "uoUKm9ltrZU-1DTef"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("email has been sent to mosti94@hotmail.com")
        },
        (error) => {
          console.log(error.text);
        }
      );
      setInputEmail("");
      setInputText("");
    }
    else{
      alert("enter email and a message")
    }
      

  };

  return (
    <form className="form" onSubmit={submitHandler} ref={form}>
      <input
        className="form-name"
        placeholder="Write Email"
        type="email"
        name="email"
        value={inputEmail}
        onChange={emailValue}
      />
      <textarea 
      className="form-textarea"
      type="text"
      name="message"
      value={inputtext}
      placeholder="still gjerne spørsmål"
      onChange={emailText}
      />
    
      <input className="form-button"  type="submit"/>
    </form>
  );
}

export default Forms;
