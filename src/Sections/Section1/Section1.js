import { Container, Row } from "react-bootstrap";
import "./Section1.css";
import { IoWarningOutline } from "react-icons/io5";
import Section1Items from "./Section1Items";
import section1Data from "../Section1Data";
function Section1() {
  return (
    <>
      <Container>
        <Row className="w-full text-center my-3">
          <p className="my-2 font-bold" id="custom-font-size">
            بیمه دات کام: استعلام، مقایسه و خرید بیمه
          </p>
        </Row>
        <Row className="flex flex-wrap justify-center custom-container-style">
          {section1Data.map((item) => (
            <Section1Items {...item} key={item.id} />
          ))}
        </Row>
        <div className="my-8 text-center p-3">
          <div className="flex justify-center items-center gap-x-1">
            <IoWarningOutline size="25px" color="#D4C4E5" />
            <span className="text-blue-900 text-sm">
              در صورت خرید تا ساعت ۲۱، بیمه نامه شما همان روز صادر می‌شود
            </span>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Section1;
