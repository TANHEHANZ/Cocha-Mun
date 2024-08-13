import Documentos from "../../secciones/documentos";
import Calendario from "../../secciones/calendario";
import ForosCard from "../../secciones/foros";
import { CALENDARIO, CRONOGRAMA, CRONOMETRO, DOCUMENTO, FOROS, LIBRO } from "./icons/icon";

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
  },
  {
    path: "conversatorio",
    name: "Conversatorio",
    icon: CRONOGRAMA,
  },
  {
    path: "cronograma",
    name: "Cronograma de actividades",
    icon: LIBRO,
  },
];
