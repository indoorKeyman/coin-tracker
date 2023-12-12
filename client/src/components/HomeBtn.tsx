import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Gohome = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.coinName};
  border-radius: 20%;
  position: fixed;
  left: 200px;
  top: 140px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 2px 2px 2px ${(props) => props.theme.boxShadow};
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => props.theme.coinName};
    color: ${(props) => props.theme.cardColor};
    border: solid 2px ${(props) => props.theme.cardColor};
  }
  transition: 0.4s;
`;

function HomeBtn() {
  const navigate = useNavigate();

  const GoHome = () => {
    navigate(-1);
  };

  return (
    <>
      {" "}
      <Gohome onClick={GoHome}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Gohome>
    </>
  );
}

export default HomeBtn;
