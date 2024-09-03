import Documentos from "../../secciones/documentos";
import Calendario from "../../secciones/calendario";
import ForosCard from "../../secciones/foros";
import {
  CALENDARIO,
  CONVERSATORIO,
  CRONOGRAMA,
  CRONOMETRO,
  DOCUMENTO,
  FOROS,
  LIBRO,
  MORE,
} from "./icons/icon";
import CronometroUser from "../../secciones/cronometroUser";
import Cronograma from "../../secciones/cronograma";
import Conversatorio from "../../secciones/conversatorio";

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
    path: "otrosRecursos",
    name: "Otros recursos",
    icon: MORE,
    Component: null,
    Link: "https://drive.google.com/drive/folders/1TNQV-0rtjKJTnq9JDtzAp292aPMTxChC?usp=drive_link",
  },
  {
    path: "cronometro",
    name: "Cronómetro",
    icon: CRONOMETRO,
    Component: CronometroUser,
  },
  {
    path: "conversatorio",
    name: "Conversatorio",
    icon: CONVERSATORIO,
    Component: Conversatorio,

  },
  {
    path: "cronograma",
    name: "Cronograma de actividades",
    icon: LIBRO,
    Component: Cronograma,

  },
];
