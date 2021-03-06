import { React, useState } from "react";
//import { FormCard } from "./FormCard";
import { AiFillMail } from "react-icons/ai";
import { FaUser, FaPencilAlt, FaPhone } from "react-icons/fa";
import { Formik } from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const ContactForm = ({ token }) => {
  let schema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "too short")
      .max(15, "too long")
      .required(" Name Required"),
    email: yup.string().email("Invalid email").required(" Email Required"),
    phone: yup
      .number()
      .min(11, "Phone must 11 digit min")
      .required("Phone Required"),
    message: yup.string().required(),
  });
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    const data = {
      firstName,
      email,
      phone,
      message,
    };
    const res = await fetch("/api/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: data,
        token: "unicohogar",
      }),
    });
    alert("Message sent! Thank you\nWe will be in touch with you soon!");
  }

  return (
    <div className="container" id="contact">
      <div className=" d-flex flex-wrap justify-content-center">
        <h1 className="text-center text-capitalise text-white my-4">Contact</h1>
      </div>
      <div className="container-fluid">
        <div className=" d-flex  justify-content-center my-4">
          <p className="text-white text-center fs-5 text-break w-100">
            Email:{" "}
            <span className="fw-bold text-white">info@unicohogar.com</span> ||
            Tel: <span className="fw-bold text-white">+34 606 27 97 78</span>
          </p>
        </div>
      </div>
      <Formik
        validationSchema={schema}
        onSubmit={async (values, { resetForm }) => {
          if (schema.validate(values)) {
            handleSubmit();
            resetForm();
          } else {
            alert("provide required data");
          }
        }}
        initialValues={{
          firstName: firstName,
          email: email,
          phone: phone,
          message: message,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          isValidating,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <div className="col-lg-8 mb-lg-0 w-100">
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group md="4" controlId="validationFormik01">
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FaUser fill="#245564" />
                    </InputGroup.Text>

                    <Form.Control
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={(e) =>
                        handleChange(e, setFirstName(e.target.value))
                      }
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback
                      className="position-relative m-2"
                      tooltip
                      type="invalid"
                    >
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group md="4" controlId="validationFormik02">
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <AiFillMail fill="#245564" />
                    </InputGroup.Text>

                    <Form.Control
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={(e) =>
                        handleChange(e, setEmail(e.target.value))
                      }
                      isInvalid={!!errors.email}
                    />

                    <Form.Control.Feedback
                      className="position-relative m-2 "
                      type="invalid"
                      tooltip
                    >
                      {errors.email}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group md="4" controlId="validationFormik03">
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FaPhone fill="#245564" />
                    </InputGroup.Text>
                    <Form.Control
                      type="tel"
                      placeholder="Phone"
                      aria-describedby="inputGroupPrepend"
                      name="phone"
                      value={values.phone}
                      onChange={(e) =>
                        handleChange(e, setPhone(e.target.value))
                      }
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback
                      className="position-relative m-2"
                      tooltip
                      type="invalid"
                    >
                      {errors.phone}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group md="4" controlId="validationFormik04">
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <FaPencilAlt fill="#245564" />
                    </InputGroup.Text>

                    <Form.Control
                      type="text"
                      as="textarea"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Message"
                      name="message"
                      value={values.message}
                      onChange={(e) =>
                        handleChange(e, setMessage(e.target.value))
                      }
                      isInvalid={!!errors.message}
                    />

                    <Form.Control.Feedback
                      className="position-relative m-2"
                      tooltip
                      type="invalid"
                    >
                      {errors.message}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <div className="text-center">
                <Button
                  type="submit"
                  className="btn btn-lg btn-hogar2 text-light mb-3"
                >
                  Send
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export function getServerSideProps({ req, res }) {
  return {
    props: {
      token: req.cookies.token || "",
    },
  };
}
