import BookIcon from "../../../../assets/icons/Book.svg";
import FileIcon from "../../../../assets/icons/File.svg";
import ForosIcon from "../../../../assets/icons/Communication.svg";
import CalendarioAcademico from "../../../../assets/icons/Schedule.svg";
import Cronometro from "../../../../assets/icons/cronometro.png";
import Cronograma from "../../../../assets/icons/VerticalTimeline.svg";
import ChatData from "../../../../assets/icons/chat.png";

export const LIBRO = () => <BookIcon />;
export const DOCUMENTO = () => <FileIcon />;
export const FOROS = () => <ForosIcon />;
export const CALENDARIO = () => <CalendarioAcademico />;
export const CRONOGRAMA = () => <Cronograma />;
export const CRONOMETRO = () => <img src={Cronometro} alt="Cronómetro" />;
export const CHAT = () => <img src={ChatData} alt="Chat" />;
