import React, { createContext, useContext, useState } from 'react';

const TimerContext = createContext();

const oneSecond = 1000;
const totalTime = 15;

export const useTimerContext = () => useContext(TimerContext);

export const TimerProvider = ({ children }) => {
  const [countDown, setCountDown] = useState(totalTime);
  const [timerInterval, setTimerInterval] = useState();

  const startTimer = () => {
   const intervalId = setInterval(() => {
      setCountDown( count => count - 1);
    }, oneSecond)
    setTimerInterval(intervalId);
  }

  if ( countDown === 0 ) {
    clearInterval(timerInterval);
  }

  return (
    <TimerContext.Provider value={{startTimer, countDown}}>
      {children}
    </TimerContext.Provider>
  )

}