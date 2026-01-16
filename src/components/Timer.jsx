import { useState, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

const Timer = () => {
   const timerRef = useRef(null);
   const [time, setTime] = useState(0);
   const [isRunning, setIsRunning] = useState(false);

   const toggleTimer = () => {
      if (isRunning) {
         //clear interval to stop the timer
         clearInterval(timerRef.current);
         timerRef.current = null;
      } else {
         //start timer
         timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
         }, 1000); //setInterval returns id so that we are storing in timerRef
      }
      setIsRunning(!isRunning);
   };

   //reset timer
   const resetTimer = () => {
      clearInterval(timerRef.current);
      setIsRunning(false);
      setTime(0);
      timerRef.current = null;
   };
   return (
      <>
         <TimerDisplay time={time} />
         <TimerControls isRunning={isRunning} onToggle={toggleTimer} onReset={resetTimer}/>
      </>
   );
};

export default Timer;
