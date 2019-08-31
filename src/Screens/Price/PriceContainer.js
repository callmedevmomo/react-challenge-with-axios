import React from "react";
import { allApi } from "../../api";
import PricePresenter from "./PricePresenter";

export default class extends React.Component {
  state = {
    homeApi: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data: homeApi } = await allApi.homeApi();

      this.setState({
        homeApi
      });
    } catch {
      this.setState({
        error: "Can't get data🤣"
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { homeApi, error, loading } = this.state;
    return <PricePresenter homeApi={homeApi} error={error} loading={loading} />;
  }
}
