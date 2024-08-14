import React from "react";

import { FaBook } from "react-icons/fa";
import { CiFileOn, CiTimer } from "react-icons/ci";
import { IoMdChatboxes } from "react-icons/io";
import { GrView } from "react-icons/gr";
import {
  IoCalendarNumber,
  IoCalendarOutline,
  IoCloudDownload,
} from "react-icons/io5";
import { BsWechat } from "react-icons/bs";
export const LIBRO = () => <FaBook />;
export const DOCUMENTO = () => <CiFileOn />;
export const FOROS = () => <IoMdChatboxes />;
export const CALENDARIO = () => <IoCalendarNumber />;
export const CRONOGRAMA = () => <IoCalendarOutline />;
export const CRONOMETRO = () => <CiTimer />;
export const VIEW = () => <GrView />;
export const DOWNLOAD = () => <IoCloudDownload />;
export const CONVERSATORIO = () => <BsWechat />;
