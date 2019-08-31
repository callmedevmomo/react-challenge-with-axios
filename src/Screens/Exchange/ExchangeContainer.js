import React from "react";
import { allApi } from "../../api";
import ExchangePresenter from "./ExchangePresenter";

export default class extends React.Component {
  state = {
    exchangeApi: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data: exchangeApi } = await allApi.exchangeApi();
      this.setState({ exchangeApi });
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
    const { exchangeApi, error, loading } = this.state;
    return (
      <ExchangePresenter
        exchangeApi={exchangeApi}
        error={error}
        loading={loading}
      />
    );
  }
}
