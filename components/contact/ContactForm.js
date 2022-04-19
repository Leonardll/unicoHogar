import { React, useState } from "react";
import { FormCard } from "./FormCard";
import { AiFillMail } from "react-icons/ai";
import { FaUser, FaPencilAlt,FaPhone} from "react-icons/fa";


export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const inputData = [
    {
      id: "firstName",
      icon: <FaUser fill="#245564" />,
      type: "text",
      placeholder: "First Name",
      ariaLabel: "firstName",
      ariaDescribedby: "firstName",
      controlId:"validationFormik101", 
      as: null,
      fn: (e) => setFirstName(e.target.value),
    },
    {
      id: "email",
      icon: <AiFillMail fill="#245564" />,
      type: "email",
      placeholder: "Your Email",
      ariaLabel: "email",
      ariaDescribedby: "email",
      controlId:"validationFormik102",
      as: null,
      fn: (e) => setEmail(e.target.value),
    },
    {
      id: "number",
      icon: <FaPhone fill="#245564" />,
      type: "tel",
      placeholder: "Phone",
      ariaLabel: "phone",
      ariaDescribedby: "phone",
      controlId:"validationFormik103",
      as: null,
      fn: (e) => setPhone(e.target.value),
    },
    {
      id: "message",
      icon: <FaPencilAlt fill="#245564" />,
      type: "text",
      placeholder: "Message",
      ariaLabel: "message",
      ariaDescribedby: "message",
      controlId:"validationFormik104",
      as: "textarea",
      fn: (e) => setMessage(e.target.value),
    },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      firstName,
      email,
      phone,
      message,
    };
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });
    console.log(data);
  }

  return (
 

    <div className="container" id="contact">
      <div className=" d-flex flex-wrap justify-content-center">
        <h1 className="text-center text-capitalise text-white my-4">Contact</h1>
      </div>
      <div className="row p-3 justify-content-center">
        <FormCard
          handleSubmit={handleSubmit}
          inputData={inputData}
        
        />

      </div>
    </div>
  
    );
};
