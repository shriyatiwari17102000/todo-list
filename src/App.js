import React from "react";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FeesSubmit from "./components/FeesSubmit";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import FormClock from "./components/FormClock";
import Message from "./components/Message";
import Form1 from "./components/Form1";

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      {/* <FormClock /> */}

      <Form1 />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormClock />} />
          <Route path="/Message" element={<Message />} />
        </Routes>
      </BrowserRouter> */}

      {/* <TodoList/> */}
      {/* <Todo/> */}
      {/* <Router>
<Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="ms-2 " >
          <Navbar.Brand style={{"textDecoration":"none"}}>
          <Link to = "/Todo" >Todo List</Link>
          </Navbar.Brand>
          <Navbar.Brand>
          <Link to = "/FeesSubmit" >Fees Submit</Link>
          </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
<Routes>
  <Route path = '/Todo' element = {<Todo/>}/>
  <Route path = '/FeesSubmit' element = {<FeesSubmit/>}/>
</Routes>
</Router> */}
    </div>
  );
}

export default App;
