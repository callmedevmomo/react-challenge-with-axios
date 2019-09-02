import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Coin from "../../Components/Coin";

const CoinPresenter = ({ loading, coins }) =>
  loading ? (
    <Loader />
  ) : (
    coins
      .filter(a => a.rank !== 0)
      .sort((a, b) => a.rank - b.rank)
      .map(a => <Coin key={a.id} {...a} />)
  );
CoinPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default CoinPresenter;
