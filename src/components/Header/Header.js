import "./Header.css";
import Logo from "../../assets/images/bimehLogo.svg";
import { MdPersonOutline, MdPhoneInTalk } from "react-icons/md";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  NavLink,
  Row,
  Col,
} from "react-bootstrap";
import { BsQuestionSquare } from "react-icons/bs";
import ColData from "./Data/ColData1";
import ColData2 from "./Data/ColData2";
import ColData3 from "./Data/ColData3";
import ColFiles1 from "./Files/ColFiles1";
import ColFiles2 from "./Files/ColFiles2";
import ColFiles3 from "./Files/ColFiles3";
import DropDownItem from "./Files/DropDownItem";
import DropDownData from "./Data/DropDownData";
function Header() {
  const expand = "lg";
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="flex justify-between my-1 border-b-2 border-b-slate-200"
      >
        <Container>
          <div className="flex justify-between items-center">
            <Navbar.Toggle
              className="border-0 fs-4 my-2"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Brand href="#" className="flex items-center gap-x-5">
              <div>
                <img
                  src={Logo}
                  className="w-40 h-12 block my-2 custom-logo-style"
                  alt="لوگو بیمه دات کام"
                />
              </div>
            </Navbar.Brand>
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
          >
            <Offcanvas.Header closeButton className="flex justify-start">
              <div>
                <img
                  src={Logo}
                  className="w-40 h-12 block my-2 custom-logo-style"
                  alt="لوگو بیمه دات کام"
                />
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex justify-start items-center rounded-t-none pe-3 gap-x-4">
                <NavDropdown
                  title="بیمه ها"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className="hover:bg-slate-200 hover:rounded-md rounded-md px-2 py-2 my-2 border-0"
                >
                  {DropDownData.map((item) => (
                    <DropDownItem {...item} key={item.id} />
                  ))}
                  <Row className="border-0 flex items-start custom-size">
                    <Col>
                      {ColData.map((item) => (
                        <ColFiles1 {...item} key={item.id} />
                      ))}
                    </Col>
                    <Col>
                      {ColData2.map((item) => (
                        <ColFiles2 {...item} key={item.id} />
                      ))}
                    </Col>
                    <Col>
                      {ColData3.map((item) => (
                        <ColFiles3 {...item} key={item.id} />
                      ))}
                    </Col>
                  </Row>
                </NavDropdown>
                <Nav.Link
                  href="/mag"
                  className="hover:bg-slate-200 rounded-md px-3 py-3"
                >
                  مجله بیمه
                </Nav.Link>
                <Nav.Link
                  href="/marketers"
                  className="custom-text-color hover:bg-slate-200 rounded-md px-3 py-3"
                >
                  کسب درامد کنید
                </Nav.Link>
                <NavDropdown
                  title="سوالی دارید؟"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className="hover:bg-slate-200 hover:rounded-md px-2 py-2 custom-btn-display"
                >
                  <NavDropdown.Item
                    className="dropdown-hover hover:rounded-md px-3 py-3 my-2 d-flex align-items-center gap-x-2"
                    href="#action3"
                  >
                    <MdPhoneInTalk size="25px" color="#64748b" />
                    مشاوره و پشتیبانی
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdown-hover hover:rounded-md px-3 py-3 my-2 d-flex align-items-center gap-x-2"
                    href="#action4"
                  >
                    <BsQuestionSquare size="25px" color="#64748b" />
                    سوالات متداول
                  </NavDropdown.Item>
                  <p
                    className="custom-bg-dropdown hover:bg-current text-gray-500 text-sm inline-block p-2 my-2 w-full cursor-default"
                    href="#action5"
                  >
                    24 ساعته پاسخگوی شماییم
                  </p>
                </NavDropdown>
                <Nav.Link
                  href="/TrackingRequest"
                  className="hover:bg-slate-200 rounded-md px-3 py-3 custom-btn-display my-2"
                >
                  پیگیری خرید
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Nav className="flex justify-end items-center flex-grow pe-3 gap-x-1">
            <NavDropdown
              title="سوالی دارید؟"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
              className="hover:bg-slate-200 rounded-md px-2 py-2 custom-display my-2"
            >
              <NavDropdown.Item
                className="dropdown-hover hover:rounded-md px-3 py-3 my-2 d-flex align-items-center gap-x-2"
                href="#action3"
              >
                <MdPhoneInTalk size="25px" color="#64748b" />
                مشاوره و پشتیبانی
              </NavDropdown.Item>
              <NavDropdown.Item
                className="dropdown-hover hover:rounded-md px-3 py-3 my-2 d-flex align-items-center gap-x-2"
                href="#action4"
              >
                <BsQuestionSquare size="25px" color="#64748b" />
                سوالات متداول
              </NavDropdown.Item>
              <p
                className="custom-bg-dropdown hover:bg-current text-gray-500 text-sm inline-block p-2 my-2 w-full cursor-default"
                href="#action5"
              >
                24 ساعته پاسخگوی شماییم
              </p>
            </NavDropdown>
            <Nav.Link
              href="/TrackingRequest"
              className="hover:bg-slate-200 text-slate-50 rounded-md px-3 py-3 custom-display my-2"
            >
              پیگیری خرید
            </Nav.Link>
          </Nav>
          <NavLink id="display" className="custom-btn-style flex gap-x-1 my-2">
            <MdPersonOutline
              size="20px"
              color="#fff"
              className="custom-icon-style"
            />
            ورود | ثبت نام
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
