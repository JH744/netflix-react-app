import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.style.css";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [keyword, setKeyword] = useState("");

  // 스크롤 y가 일정 위치보다 내려갈 경우 나브바의 배경색상을 변경
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const searchByKeyword = (event) => {
    event.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword(""); // 검색창 비우기 자율적으로 설정
  };

  return (
    <Navbar
      expand="lg"
      className={isScrolled ? "trans scroll" : "trans custom-navbar"}
      fixed="top"
      /* 커스텀 CSS 클래스 지정 */
    >
      <Container fluid>
        <Link to="/">
          <img src="/netflix.png" alt="" width={100} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-1"
            style={{ maxHeight: "100px", paddingLeft: "10px" }}
            navbarScroll
          >
            <Nav.Link
              className="text-white"
              onClick={() => {
                navigate("/");
              }}
            >
              홈
            </Nav.Link>
            <Nav.Link
              className="text-white"
              onClick={() => {
                navigate("/movies");
              }}
            >
              영화
            </Nav.Link>
          </Nav>
          <Form
            className="d-flex"
            onSubmit={(event) => {
              searchByKeyword(event);
            }}
          >
            <Form.Control
              type="search"
              size="sm"
              placeholder="제목, 장르, 사람"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <FiSearch
              onClick={(event) => {
                searchByKeyword(event);
              }}
              size={29}
              style={{ cursor: "pointer" }}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
