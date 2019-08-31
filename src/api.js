import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});


export const allApi = {
    homeApi= () => api.get("v1/tickers"),
    exchangeApi=()=>api.get("v1/exchanges"),
    coinsApi=()=>api.get("v1/coins")
}



export default api;