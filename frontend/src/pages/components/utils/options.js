import BookIcon from "../../../assets/icons/Book.svg";
import FileIcon from "../../../assets/icons/File.svg";
import ForosIcon from "../../../assets/icons/Communication.svg";
import CalendarioAcademico from "../../../assets/icons/Schedule.svg";
import Cronograma from "../../../assets/icons/VerticalTimeline.svg";
import Documentos from "../../secciones/documentos";
import Calendario from "../../secciones/calendario";
import ForosCard from "../../secciones/foros";


export const opciones = [
  {
    path:"documento",
    name: "Documentos",
    icon: FileIcon,
    Component:Documentos,
  },
  {
    path:"foros",
    name: "Foros y Tópicos",
    icon: ForosIcon,
    Component:ForosCard,


  },
  {
    path:"calendario",
    name: "Calendario",
    icon: CalendarioAcademico,
    Component:Calendario,

  },
  {
    path:"cronometro",
    name: "Cronómetro",
    icon: Cronograma,
  },
  {
    path:"conversatorio",
    name: "Conversatorio",
    icon: Cronograma,

  },
  {
    path:"cronograma",
    name: "Cronograma de actividades",
    icon: BookIcon,
  },
];
