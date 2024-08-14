import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomCountdownTimer = () => {
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const notify = () => toast("El tiempo ha terminado!");

  const calculateTimeLeft = () => {
    if (!targetDate) return { hours: 0, minutes: 0, seconds: 0 };

    const now = new Date();
    const difference = new Date(targetDate) - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    if (isRunning && targetDate) {
      timerRef.current = setInterval(() => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);

        if (
          newTimeLeft.hours === 0 &&
          newTimeLeft.minutes === 0 &&
          newTimeLeft.seconds === 0
        ) {
          clearInterval(timerRef.current);
          setIsRunning(false);
          notify();
        }
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, targetDate]);

  const handleStart = () => {
    const futureDate = new Date();
    futureDate.setHours(futureDate.getHours() + parseInt(inputHours, 10));
    futureDate.setMinutes(futureDate.getMinutes() + parseInt(inputMinutes, 10));
    futureDate.setSeconds(futureDate.getSeconds() + parseInt(inputSeconds, 10));

    setTargetDate(futureDate);
    setIsRunning(true);
  };

  const handleStop = (e) => {
    e.preventDefault(); // Prevent the default form behavior
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTargetDate(null);
    setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
  };

  const timeUnits = [
    { unit: "hours", label: "HH" },
    { unit: "minutes", label: "MM" },
    { unit: "seconds", label: "SS" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 h-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleStart();
        }}
        className="flex flex-wrap justify-center items-center gap-4 text-white text-xl"
      >
        <div className="flex flex-col items-center">
          <input
            type="number"
            value={inputHours}
            onChange={(e) => setInputHours(e.target.value)}
            placeholder="Hours"
            className="bg-transparent border w-24 h-20 text-center rounded-md"
          />
          <label htmlFor="Horas">HH</label>
        </div>
        <div className="flex flex-col items-center">
          <input
            type="number"
            value={inputMinutes}
            onChange={(e) => setInputMinutes(e.target.value)}
            placeholder="Minutes"
            className="bg-transparent border w-24 h-20 text-center rounded-md"
          />
          <label htmlFor="minutos">MM</label>
        </div>
        <div className="flex flex-col items-center">
          <input
            type="number"
            value={inputSeconds}
            onChange={(e) => setInputSeconds(e.target.value)}
            placeholder="Seconds"
            className="bg-transparent border w-24 h-20 text-center rounded-md"
          />
          <label htmlFor="segundos">SS</label>
        </div>
        <div className="w-[70%] flex gap-4">
          <button
            type="submit"
            className={`w-1/3 bg-customGreen900 text-white h-12 rounded-md text-[14px] ${
              isRunning ? "bg-opacity-25" : ""
            } `}
          >
            Iniciar cronómetro
          </button>
          <button
            onClick={handleStop}
            className={`w-1/3 bg-customRed900 text-white px-4 py-2 rounded-md ${
              !isRunning ? "bg-opacity-25" : ""
            }`}
          >
            Detener
          </button>
          <button
            onClick={handleReset}
            className={`w-1/3 bg-customYellow900 text-white px-4 py-2 rounded-md ${
              !isRunning ? "bg-opacity-25" : ""
            }`}
          >
            Reiniciar
          </button>
        </div>
      </form>

      <section className="flex flex-wrap justify-center gap-4 p-2 shadow-md rounded-r-lg border border-gray-400 bg-transparent text-white">
        {timeUnits.map(({ unit, label }, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-40 h-20 "
          >
            <p
              className={`text-3xl font-light  px-20 ${
                index < 2 ? "border-r" : ""
              }`}
            >
              {timeLeft[unit]}
            </p>
            <strong className="text-sm">{label}</strong>
          </div>
        ))}
      </section>

      <ToastContainer />
    </div>
  );
};

export default CustomCountdownTimer;
