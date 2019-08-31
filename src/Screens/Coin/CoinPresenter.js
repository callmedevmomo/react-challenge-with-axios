import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CoinPresenter = ({ coinsApi, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {coinsApi && coinsApi.length > 0 && (
        <Wrapper>
          {coinsApi.map(data => (
            <span>
              {data.rank} / {data.name} / {data.symbol}
            </span>
          ))}
        </Wrapper>
      )}
    </Container>
  );

CoinPresenter.propTypes = {
  coinsApi: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default CoinPresenter;
