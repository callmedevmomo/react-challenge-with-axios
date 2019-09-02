import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});

export const allApi = {
  getPrices: () => api.get("/tickers"),
  getExchanges: () => api.get("/exchanges"),
  getCoins: () => api.get("/coins")
};

export default api;
