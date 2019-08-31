import React from "react";
import { allApi } from "../../api";
import CoinPresenter from "./CoinPresenter";

export default class extends React.Component {
  state = {
    coinsApi: null,
    error: null,
    loading: true
  };
  async componentDidMount() {
    try {
      const { data: coinsApi } = await allApi.coinsApi();
      const momo = coinsApi.slice().sort(function(a, b) {
        return b.rank - a.rank;
      });
      const newarr = momo.filter(data => data.rank >= 1).reverse(-1);
      this.setState({
        coinsApi: newarr
      });
    } catch {
      this.setState({
        error: "Can't get data🤣"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { coinsApi, error, loading } = this.state;
    return (
      <CoinPresenter coinsApi={coinsApi} error={error} loading={loading} />
    );
  }
}
