import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormClock = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const formClick = () => {
    let input;
    if (input == "") {
      return "fill all the fields";
    } else {
      navigate("/Message");
    }
  };


  return (
    <>
      <div className="form1">
        <h1>Timer</h1>
        <form>
          <div className="div1">
            <label htmlFor="name">Name :-</label>
            <input
              type="text"
              name="name"
              id="name"
              value={username}
              onChange={(event) =>
                setUsername(event.target.value.toUpperCase())
              }
              className="input_div1"
              required
            />
          </div>
          <div className="div2">
            <label htmlFor="mobile">Mobile :-</label>
            <input
              type="number"
              name="mobile"
              pattern="[0-9]{10}"
              value={username.number}
              
              id="mobilenumber"
              className="input_div2"
              maxLength={10}
              // onSubmit={mobileHandler}
              required
            />
            <span id="messages"></span>
          </div>

          <div className="div3">
            <label
              htmlFor="gender"
              
              className="gender_div"
              id="gender"
            >
              Gender :-
            </label>
             {" "}
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
              className="input_div3"
              required
            />
            <label htmlFor="female" className="female_div">
              {" "}
              Female{" "}
            </label>
             {" "}
            <input
              type="radio"
              id="css"
              name="fav_language"
              value="CSS"
              className="input_div4"
              required
            />
               
            <label htmlFor="male" className="male_div">
              Male
            </label>
          </div>
          <div className="div4">
            <label
              htmlFor="vehicle2"
              className="gender_div"
              id="hobby"
             
            >
              Hobby :-{" "}
            </label>
            <input
              type="checkbox"
              id="cricket"
              name="cricket"
              value="Bike"
              className="input_div5"
              required
            />
            <label htmlFor="cricket" className="cricket_div">
              Cricket
            </label>
            <input
              type="checkbox"
              id="badminton"
              name="badminton"
              value="Car"
              className="input_div6"
              required
            />
            <label htmlFor="badminton" className="badminton_div">
              Badminton
            </label>
          </div>
          <div className="btn">
            <button onClick={formClick} id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default FormClock;
