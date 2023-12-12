import { useQuery } from "react-query";
import { fetchCoin } from "../api";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeTitle from "../components/HomeTitle";
import GoUpBtn from "../components/GoUpBtn";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Icoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 240px;
`;

const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.cardColor};
  margin: 12px;
  width: 604px;
  height: 74px;
  display: grid;
  align-items: center;
  place-items: center;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 1fr;
  border-radius: 12px;
  box-shadow: 4px 4px 4px ${(props) => props.theme.boxShadow};
  cursor: pointer;
  color: ${(props) => props.theme.coinName};
  &:hover {
    background-color: ${(props) => props.theme.coinName};
    color: ${(props) => props.theme.cardColor};
    border: solid 2px ${(props) => props.theme.cardColor};
  }
  transition: 0.6s ease;
`;

const CoinRank = styled.div`
  font-size: 24px;
  /* color: ${(props) => props.theme.coinName}; */
`;

const CoinMark = styled.img`
  width: 44px;
`;

const CoinSymbol = styled.div`
  font-size: 20px;
  /* color: ${(props) => props.theme.coinName}; */
`;

const CoinName = styled.div`
  font-size: 24px;
  /* color: ${(props) => props.theme.coinName}; */
`;

function Home() {
  const { isLoading, data } = useQuery<Icoins[]>("coins", fetchCoin);

  const [cardX, setCardX] = useState(0);

  const cardVar = {
    start: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      rotateX: 360,

      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      {isLoading ? (
        <h1>...is loading</h1>
      ) : (
        <Container>
          <HomeTitle />
          {data?.slice(0, 30).map((item, index) => (
            <Link to={`detail/${item.id}`}>
              <Card
                variants={cardVar}
                initial="start"
                whileInView="animate"
                key={index}
              >
                <CoinRank>{item.rank}</CoinRank>
                <CoinMark
                  src={`https://static.coinpaprika.com/coin/${item.id}/logo.png`}
                />
                <CoinSymbol>{item.symbol}</CoinSymbol>
                <CoinName>{item.name}</CoinName>
              </Card>
            </Link>
          ))}
          <GoUpBtn />
        </Container>
      )}
      <a
        href="https://www.flaticon.com/kr/free-icons/-"
        title="비트 코인 아이콘"
      >
        favicon
      </a>
    </>
  );
}

export default Home;
