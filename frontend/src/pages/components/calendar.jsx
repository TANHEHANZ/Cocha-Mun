import React from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "dayjs/locale/es"; // Import Spanish locale for dayjs
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "./utils/config.calendario";
dayjs.locale('es');

const CalendarComponent = () => {
  const localizer = dayjsLocalizer(dayjs);

  const myEventsList = [
    {
      title: "Evento : Realizacion del Tópico (Conflicto armado Israel - Palestina)",
      start: new Date(2024, 6, 1),
      end: new Date(2024, 6, 4),
      color: "#00ACD9" // Tomate
    },
    {
      title: "Evento : Foro tópico: Consejo de Seguridad Internacional",
      start: new Date(2024, 6, 1),
      end: new Date(2024, 6, 5),
      color: "#AF1856" // Azul Dodger
    },
    {
        title: "Evento : Bitcoins",
        start: new Date(2024, 6, 8),
        end: new Date(2024, 6, 10),
        color: "#482778" // Azul Dodger
      },
      {
        title: "Evento : Organización Mundial de la Salud",
        start: new Date(2024, 6,11),
        end: new Date(2024, 6, 13),
        color: "#009878" // Azul Dodger
      },
  ];

  // Función para asignar un color a cada evento
  const eventPropGetter = (event, start, end, isSelected) => {
    const backgroundColor = event.color;
    return { style: { backgroundColor } };
  };

  return (
    <div className="w-full  shadow-xl">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={messages}
        eventPropGetter={eventPropGetter}
        className="text-[.8em]"
      />
    </div>
  );
};

export default CalendarComponent;
