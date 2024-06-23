import { FaUserDoctor } from "react-icons/fa6";
import { LiaCarCrashSolid } from "react-icons/lia";
import { TbHeartCheck, TbHomeEco, TbUserHeart } from "react-icons/tb";

const ColData = [
  {
    id: 1,
    icon: <LiaCarCrashSolid size="30px" color="#0000aa" />,
    title: "بیمه شخص ثالث",
    text: "در هنگام رانندگی، نگران خسارت تصادف نباشید.",
  },
  {
    id: 2,
    icon: <TbHomeEco size="30px" color="#0000aa" />,
    title: "بیمه آتش سوزی",
    text: "پوشش آتش سوزی، سیل و سایر حوادث طبیعی",
  },
  {
    id: 3,
    icon: <TbHeartCheck size="30px" color="#0000aa" />,
    title: "بیمه تکمیلی درمان",
    text: "بخاطر هزینه ها، درمان‌تان را عقب نیندازید.",
  },
  {
    id: 4,
    icon: <FaUserDoctor size="30px" color="#0000aa" />,
    title: "بیمه مسئولیت پزشکان",
    text: "با اطمینان خاطر به درمان بیماران بپردازید.",
  },
  {
    id: 5,
    icon: <TbUserHeart size="30px" color="#0000aa" />,
    title: "بیمه تکمیلی گروهی",
    text: "بخاطر هزینه ها، درمان‌تان را عقب نیندازید.",
  }
];
export default ColData;
