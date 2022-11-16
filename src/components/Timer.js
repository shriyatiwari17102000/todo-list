import React, { useState } from "react";

const Timer = () => {
  const [ctime, setCtime] = useState();

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(updateTime, 1000);

  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting1 = "";
  let greeting2 = "";
  let greeting3 = "";
  let greeting4 = "";

  if (curDate >= 1 && curDate < 12) {
    greeting1 = "Good Morning";
  } else if (curDate >= 12 && curDate < 16) {
    greeting2 = "Good Afternoon";
  } else if (curDate >= 16 && curDate < 19) {
    greeting3 = "Good Evening";
  } else {
    greeting4 = "Good Night";
  }

  return (
    <>
      <div className="main_div">
        <div className="timer">
          <h1 className="timer_head">Digital Clock</h1>
          <h2 className="timer_head1">{ctime}</h2>
          <h2 className="timer_head2">
            {" "}
            Hello Sir, <span className="red">{greeting1}</span>
            <span className="blue">{greeting2}</span>
            <span className="green">{greeting3}</span>
            <span className="orange">{greeting4}</span>
          </h2>
        </div>
      </div>
    </>
  );
};
export default Timer;
