import React from "react";
import { programData } from "../components/utils/data/conversatorios";
import { CRONOMETRO, LOCATION, PEOPLE } from "../components/utils/icons/icon";

const Conversatorio = () => {
  const { program, academic_fair } = programData;

  return (
    <div className=" flex flex-col gap-4 p-8 overflow-y-auto h-full">
      <h3 className="text-3xl text-center font-bold">{program.title}</h3>
      <div className=" flex items-center w-full justify-center gap-4 text-[14px] my-8 ">
        <p className="flex items-center">
          <CRONOMETRO />
          {program.schedule}
        </p>
        <p className=" flex items-center">
          <LOCATION />
          {program.location}
        </p>
      </div>

      <h4 className=" font-bold uppercase text-[14px]">Actividades</h4>

      <ul>
        {program.activities.map((activity, index) => (
          <li
            key={index}
            className=" text-[14px] flex  gap-4 pb-2 items-center "
          >
            <PEOPLE />
            <div>
              <p className="text-base">
                <strong>{activity.type}</strong> : {activity.topic}
              </p>
              <p className="w-[12rem] uppercase text-gray-700">
                {activity.speaker}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <h5 className=" uppercase text-[14px]">
        <strong>Conferencias</strong> de las Naciones Unidas
      </h5>

      <ul>
        {program.un_conferences.map((conference, index) => (
          <li
            key={index}
            className="border-l-2 pl-4 flex items-center border-black relative before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full  before:bg-black before:-left-1 "
          >
            <p>
              <strong>{conference.title}</strong> ({conference.organization})
            </p>
          </li>
        ))}
      </ul>

      <h5 className=" uppercase text-[14px]">
        FERIA ACADÉMICA <strong>“ONU POR UN DÍA”</strong>
      </h5>
      <ul>
        {academic_fair.organizations.map((org, index) => (
          <li
            key={index}
            className="border-l-2 pl-4 flex items-center border-black relative before:content-[''] before:absolute before:w-2 before:h-2 before:rounded-full  before:bg-black before:-left-1 "
          >
            <p>
              <strong>{org.name}</strong> {org.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conversatorio;
