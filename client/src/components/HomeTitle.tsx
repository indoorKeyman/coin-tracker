import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

const Title = styled(motion.div)`
  font-size: 120px;
  margin-bottom: 180px;
  text-shadow: 5px 3px 3px gray;
  color: whitesmoke;
`;

function HomeTitle() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 280], [1, 0]);
  return (
    <>
      {" "}
      <Title style={{ opacity }}>Coin Tracker</Title>
    </>
  );
}

export default HomeTitle;
