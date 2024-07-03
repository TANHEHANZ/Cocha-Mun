import React, { useState, useEffect } from "react";

const Cronometro = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-08-31T23:59:59"); // Fecha y hora objetivo
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
    { unit: "seconds", label: "SS" }
  ];

  return (
    <div>
      <p className="uppercase text-[.8em] ">Inicio del evento en :</p>
      <section className="flex p-4 shadow-md justify-center gap-12 pl-8 rounded-lg">
        {timeUnits.map(({ unit, label }, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border-r pr-8 border-gray-400 transition-transform transform duration-500"
            style={{
              animation: `pulseAnimation 1s`,
            }}
          >
            <p className="text-xl font-light">{timeLeft[unit]}</p>
            <strong>{label}</strong>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cronometro;
