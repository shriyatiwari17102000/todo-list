import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

const FeesSubmit = () => {
  const [state, setState] = useState({
    firstn: "",
    lastn: "",
    st_id: "",
    grade: "",
    number: "",
    email: "",
    course: "",
    school: "",
    firstname: "",
    lastname: "",
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    let fileA = {
      firstn: state.firstn,
      lastn: state.lastn,
      st_id: state.st_id,
      grade: state.grade,
      number: state.number,
      email: state.email,
      course: state.course,
      school: state.school,
      firstname: state.firstname,
      lastname: state.lastname,
    };
    console.log(fileA);
    axios.post('http://localhost:3001/api/feesform', fileA)
    .then((res)=> {
      console.log(res.data)
      alert(res.data)
    }).catch(() => {
      console.log("message not sent");
    })
  };

  return (
    <form
      style={{ width: "50%", marginLeft: "28rem", marginTop: "8rem" }}
      onChange={onChange}
      onSubmit={submitHandler}
    >
      <h1 style={{ textAlign: "center" }}>School Fees Form</h1>
      <Row className="mt-5">
        <label htmlFor="name" className="mb-2">
          Student Name
        </label>
        <Col>
          <Form.Control
            name="firstn"
            value={state.firstn}
            placeholder="First name"
          />
        </Col>
        <Col>
          <Form.Control
            name="lastn"
            value={state.lastn}
            placeholder="Last name"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <label htmlFor="st_id" className="mb-2">
            Student id
          </label>
          <Form.Control value={state.st_id} name="st_id" />
        </Col>
        <Col>
          <label htmlFor="grade" className="mb-2">
            Grade level
          </label>
          <Form.Control value={state.grade} name="grade" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <label htmlFor="number" className="mb-2">
            Phone Number
          </label>
          <Form.Control value={state.number} name="number" />
        </Col>
        <Col>
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <Form.Control value={state.email} name="email" />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <label htmlFor="course" className="mb-2">
            Course/Program
          </label>
          <Form.Control value={state.course} name="course" />
        </Col>
        <Col>
          <label htmlFor="school" className="mb-2">
            School Year
          </label>
          <Form.Control value={state.school} name="school" />
        </Col>
      </Row>
      <Row className="mt-5">
        <label htmlFor="guardian" className="mb-2">
          Guardian Name
        </label>
        <Col>
          <Form.Control
            value={state.firstname}
            name="firstname"
            placeholder="First name"
          />
        </Col>
        <Col>
          <Form.Control
            value={state.lastname}
            name="lastname"
            placeholder="Last name"
          />
        </Col>
      </Row>
      <button>Submit</button>
    </form>
  );
};
export default FeesSubmit;
