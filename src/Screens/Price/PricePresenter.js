import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PricePresenter = ({ homeApi, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {homeApi && homeApi.length > 0 && (
        <Wrapper>
          {homeApi.map(data => (
            <span key={data.id}>
              {data.name} / {data.symbol} / $ {data.quotes.USD.price}
            </span>
          ))}
        </Wrapper>
      )}
    </Container>
  );

PricePresenter.propTypes = {
  homeApi: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default PricePresenter;
