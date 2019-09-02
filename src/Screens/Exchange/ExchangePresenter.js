import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Exchange from "../../Components/Exchange";

const ExchangesPresenter = ({ loading, exchanges }) =>
  loading ? (
    <Loader />
  ) : (
    exchanges.map(exchange => <Exchange key={exchange.id} {...exchange} />)
  );

ExchangesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      links: PropTypes.shape({
        website: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
      }).isRequired
    }).isRequired
  ).isRequired
};

export default ExchangesPresenter;
