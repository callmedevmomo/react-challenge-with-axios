import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});

export const allApi = {
  homeApi: () => api.get("/tickers"),
  exchangeApi: () => api.get("/exchanges"),
  coinsApi: () => api.get("/coins")
};

export default api;
