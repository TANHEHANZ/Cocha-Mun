import React, { useState, useEffect } from "react";

const Cronometro = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-08-31T23:59:59");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { unit: "days", label: "DD" },
    { unit: "hours", label: "HH" },
    { unit: "minutes", label: "MM" },
    { unit: "seconds", label: "SS" },
  ];

  return (
    <div className="flex flex-col items-center absolute z-10 bottom-6 left-6  ">
      <p className="uppercase text-[.8em] mb-0 self-start bg-white rounded-t-lg p-2 px-4" >Inicio del evento en:</p>
      <section className="flex flex-wrap justify-center gap-4 p-2 shadow-md rounded-r-lg border backdrop-blur-md  border-gray-400 bg-transparent text-white  md:text-[1.2em] ">
        {timeUnits.map(({ unit, label }, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-8 sm:w-20 md:w-32 lg:w-20 xl:w-20"
          >
            <p className="text-[.9em] font-light   ">{timeLeft[unit]}</p>
            <strong className="text-[.6em]">{label}</strong>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cronometro;
