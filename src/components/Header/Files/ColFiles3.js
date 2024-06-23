import { Col, Row } from "react-bootstrap";
import "../Header.css";
import { Link } from "react-router-dom";
function ColFiles3({ icon, title, text }) {
  return (
    <>
      <Row className="hover:bg-slate-200 hover:rounded-md px-2 py-2 my-3 flex mx-2 justify-between flex-row items-center">
        <Col sm="2">{icon}</Col>
        <Col sm="10" className="hover:bg-slate-200 hover:rounded-md px-2 py-2">
          <Link className="no-underline">
            <div className="text-black my-1">{title}</div>
            <div className="text-xs text-gray-400">{text}</div>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default ColFiles3;
