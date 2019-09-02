import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Price from "../../Components/Price";

const PricePresenter = ({ loading, prices }) =>
  loading ? <Loader /> : prices.map(a => <Price key={a.id} {...a} />);

PricePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      quotes: PropTypes.shape({
        USD: PropTypes.shape({
          price: PropTypes.number.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  ).isRequired
};
export default PricePresenter;
