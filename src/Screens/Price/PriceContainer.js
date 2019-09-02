import React from "react";
import PricePresenter from "./PricePresenter";
import { allApi } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    prices: []
  };
  componentDidMount() {
    this.getPrices();
  }
  getPrices = async () => {
    try {
      const { data: prices } = await allApi.getPrices();
      this.setState({
        prices
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    return <PricePresenter {...this.state} />;
  }
}
