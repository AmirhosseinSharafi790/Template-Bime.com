import { FaUserDoctor } from "react-icons/fa6";
import { IoCarOutline } from "react-icons/io5";
import { LiaCarCrashSolid } from "react-icons/lia";
import { MdOutlineMosque, MdSportsTennis } from "react-icons/md";
import {
  PiAirplaneTakeoffBold,
  PiAirplaneTilt,
  PiMotorcycleThin,
  PiElevatorDuotone,
} from "react-icons/pi";
import {
  TbDeviceMobileCheck,
  TbHomeEco,
  TbHeartCheck,
  TbHomeCheck,
} from "react-icons/tb";

const section1Data = [
  {
    id: 1,
    text: "شخص ثالث",
    icon: (
      <LiaCarCrashSolid size="60px" color="#4d1e81" className="icon-style" />
    ),
  },
  {
    id: 2,
    text: "موتور",
    icon: (
      <PiMotorcycleThin size="60px" color="#4d1e81" className="icon-style" />
    ),
  },
  {
    id: 3,
    text: "بدنه",
    icon: <IoCarOutline size="60px" color="#4d1e81" className="icon-style" />,
  },
  {
    id: 4,
    text: "آتش سوزی",
    icon: <TbHomeEco size="60px" color="#4d1e81" className="icon-style" />,
  },
  {
    id: 5,
    text: "زلزله",
    icon: <TbHomeCheck size="60px" color="#4d1e81" className="icon-style" />,
  },
  {
    id: 6,
    text: "تکمیلی درمان",
    icon: <TbHeartCheck size="60px" color="#4d1e81" className="icon-style" />,
  },
  {
    id: 7,
    text: "مسافرتی",
    icon: (
      <PiAirplaneTakeoffBold
        size="60px"
        color="#4d1e81"
        className="icon-style"
      />
    ),
  },
  {
    id: 8,
    text: "مسافرتی سامان",
    icon: <PiAirplaneTilt size="60px" color="#4d1e81" className="icon-style" />,
  },
  {
    id: 9,
    text: "مسئولیت پزشکان",
    icon: <FaUserDoctor size="60px" color="#4d1e81" className="icon-style" />,
  },
  {
    id: 10,
    text: "آسانسور",
    icon: (
      <PiElevatorDuotone size="60px" color="#4d1e81" className="icon-style" />
    ),
  },
  {
    id: 11,
    text: "ورزشی",
    icon: <MdSportsTennis size="60px" color="#4d1e81" className="icon-style" />,
  },
  {
    id: 12,
    text: "موبایل",
    icon: (
      <TbDeviceMobileCheck size="60px" color="#4d1e81" className="icon-style" />
    ),
  },
  {
    id: 13,
    text: "کربلا",
    icon: (
      <MdOutlineMosque size="60px" color="#4d1e81" className="icon-style" />
    ),
  },
];
export default section1Data;
