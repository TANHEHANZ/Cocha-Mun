import Documentos from "../../secciones/documentos";
import Calendario from "../../secciones/calendario";
import ForosCard from "../../secciones/foros";
import { CALENDARIO, CONVERSATORIO, CRONOGRAMA, CRONOMETRO, DOCUMENTO, FOROS, LIBRO } from "./icons/icon";
import CronometroUser from "../../secciones/cronometroUser";

export const opciones = [ 
  {
    path: "documento",
    name: "Documentos",
    icon: DOCUMENTO,
    Component: Documentos,
  },
  {
    path: "foros",
    name: "Foros y Tópicos",
    icon: FOROS,
    Component: ForosCard,
  },
  {
    path: "calendario",
    name: "Calendario",
    icon: CALENDARIO,
    Component: Calendario,
  },
  {
    path: "cronometro",
    name: "Cronómetro",
    icon: CRONOMETRO,
    Component:CronometroUser
  },
  {
    path: "conversatorio",
    name: "Conversatorio",
    icon: CONVERSATORIO,
  },
  {
    path: "cronograma",
    name: "Cronograma de actividades",
    icon: LIBRO,
  },
];
