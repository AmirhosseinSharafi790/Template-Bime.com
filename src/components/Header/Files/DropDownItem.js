import { NavDropdown } from "react-bootstrap";
import "../Header.css";
function DropDownItem({ text }) {
  return (
    <>
      <NavDropdown.Item className="my-2 custom-dropdown-style" href="#action3">
        {text}
      </NavDropdown.Item>
    </>
  );
}

export default DropDownItem;
