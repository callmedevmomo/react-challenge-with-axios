import React from "react";
import { allApi } from "../../api";
import CoinPresenter from "./CoinPresenter";

export default class extends React.Component {
  state = {
    loading: false,
    coins: []
  };
  getCoins = async () => {
    try {
      const { data: coins } = await allApi.getCoins();
      this.setState({
        coins
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        loading: false
      });
    }
  };
  componentDidMount() {
    this.getCoins();
  }
  render() {
    return <CoinPresenter {...this.state} />;
  }
}
