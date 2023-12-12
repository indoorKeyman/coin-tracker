const coin_URL = `https://api.coinpaprika.com/v1/coins`;

const coin_ohlcv_URL = (coinId: string | undefined) =>
  `https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/today`;

export function fetchCoin() {
  return fetch(coin_URL).then((response) => response.json());
}

export function fetchCoinDetail(coinId: string | undefined) {
  return fetch(`${coin_URL}/${coinId}`).then((response) => response.json());
}

export function fetchCoinOHLCV(coinId: string | undefined) {
  return fetch(`${coin_ohlcv_URL(coinId)}`).then((response) => response.json());
}
