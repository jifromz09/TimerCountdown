import React, { useState, useEffect } from "react";
import moment from "moment";
import { calculateTimeLeft } from "./utils";

const CountdownTimer = ({ targetDate }) => {
    
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Countdown to {moment(targetDate).format("LLL")}</h1>
      {timeLeft.days ? <div>{timeLeft.days} days</div> : null}
      <div>
        {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds}{" "}
        seconds
      </div>
    </div>
  );
};

export default CountdownTimer;
