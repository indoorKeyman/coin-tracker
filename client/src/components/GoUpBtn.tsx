import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const GoUp = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.coinName};
  border-radius: 20%;
  position: fixed;
  right: 80px;
  bottom: 80px;
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

function GoUpBtn() {
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <GoUp onClick={MoveToTop}>
        <FontAwesomeIcon icon={faAngleUp} />
      </GoUp>
    </>
  );
}

export default GoUpBtn;
