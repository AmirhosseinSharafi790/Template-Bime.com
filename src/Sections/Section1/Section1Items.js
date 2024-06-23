import { Link } from "react-router-dom";
import "./Section1.css";
function Section1Items({ text, icon }) {
  return (
    <>
      <Link title={text} className="container-item">
        <div className="icons flex justify-center items-center">
          {icon}
          <p className="text-gray-700">{text}</p>
        </div>
      </Link>
    </>
  );
}

export default Section1Items;
