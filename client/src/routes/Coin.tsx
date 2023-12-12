import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetail, fetchCoinOHLCV } from "../api";
import styled from "styled-components";
import HomeBtn from "../components/HomeBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const MainBox = styled.div`
  width: 600px;
  margin-top: 100px;
  padding: 48px 0px;
  background-color: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.coinName};
  border-radius: 24px;
  box-shadow: 0 5px 30px 5px rgba(0, 0, 0, 0.6);
`;

const CoinTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  position: relative;
`;

const CoinImg = styled.img`
  width: 48px;
  padding-top: 10px;
  margin-right: 16px;
`;

const CoinName = styled.span`
  font-size: 3rem;
  font-weight: 600;
`;

const CoinRank = styled.span`
  margin-left: 16px;
  font-size: 1.4rem;
  position: absolute;
  right: 40px;
  top: 76px;
  font-weight: 600;
`;

const CoinDesD = styled.div`
  display: flex;
  justify-content: center;
`;

const CoinDes = styled.p`
  width: 70%;
  word-break: break-all;
  line-height: 22px;
`;

const TodayOHLCTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const TodayOHLCTitleS = styled.span`
  font-size: 1.5rem;
  margin-left: 8px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const CategoryN = styled.span`
  text-transform: capitalize;
  margin-right: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  width: 52px;
  text-align: start;
`;

const CategoryV = styled.span`
  font-size: 1.2rem;
  width: min-content;
`;

const ValueUnit = styled.span`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 4px;
`;

interface IcoinDetail {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  description: string;
}

interface IcoinOHCLV {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

// interface IcoinOHCLV extends Array<IcoinOHCLV> {}

function Coin() {
  const { coinId } = useParams();
  const { isLoading: detailLoading, data: detailData } = useQuery<IcoinDetail>(
    "coinDetail",
    () => fetchCoinDetail(coinId)
  );

  const { isLoading: ohclvLoading, data: ohclvData } = useQuery<IcoinOHCLV[]>(
    "coinOHCLV",
    () => fetchCoinOHLCV(coinId)
  );

  return (
    <>
      <Container>
        <MainBox>
          <CoinTitle>
            <CoinImg
              alt="coinLogo"
              src={`https://static.coinpaprika.com/coin/${coinId}/logo.png`}
            />
            <CoinName> {detailData?.name.toUpperCase()}</CoinName>
            <CoinRank>Rank : {detailData?.rank}</CoinRank>
          </CoinTitle>
          <CoinDesD>
            <CoinDes>{detailData?.description}</CoinDes>
          </CoinDesD>

          <TodayOHLCTitle>
            <FontAwesomeIcon icon={faSun} size="xl" />
            <TodayOHLCTitleS>Today's OHLC</TodayOHLCTitleS>
          </TodayOHLCTitle>
          <CategoryContainer>
            <CategoryN>open</CategoryN>
            <CategoryV>
              {ohclvData !== undefined ? ohclvData[0].open.toFixed(4) : null}
              <ValueUnit>usd</ValueUnit>
            </CategoryV>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryN>high</CategoryN>
            <CategoryV>
              {ohclvData !== undefined ? ohclvData[0].high.toFixed(4) : null}
              <ValueUnit>usd</ValueUnit>
            </CategoryV>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryN>low</CategoryN>
            <CategoryV>
              {ohclvData !== undefined ? ohclvData[0].low.toFixed(4) : null}
              <ValueUnit>usd</ValueUnit>
            </CategoryV>
          </CategoryContainer>
          <CategoryContainer>
            <CategoryN>close</CategoryN>
            <CategoryV>
              {ohclvData !== undefined ? ohclvData[0].close.toFixed(4) : null}
              <ValueUnit>usd</ValueUnit>
            </CategoryV>
          </CategoryContainer>
        </MainBox>
      </Container>
      <HomeBtn />
    </>
  );
}

export default Coin;
