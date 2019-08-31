import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Container = styled.div``;
const Wrapper = styled.div``;
const Box = styled.div`
  font-size: 18px;
  font-weight: 800;
  :not(:first-child) {
    margin-top: 40px;
  }
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: 18px;
  font-style: oblique;
  font-weight: 500;
  margin-bottom: 10px;
`;
const Descriptiontwo = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #e74c3c;
  margin-bottom: 10px;
`;
const Text = styled.span`
  border-bottom: 1px solid black;
`;

const ExchangePresenter = ({ exchangeApi, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {exchangeApi && exchangeApi.length > 0 && (
        <Wrapper>
          {exchangeApi.map(data => (
            <>
              <Box>{data.name}</Box>
              {data.description == null || data.description === "" ? (
                <Descriptiontwo> 🙅🏻‍ No Description</Descriptiontwo>
              ) : (
                <Description>{data.description.slice(0, 50)}...</Description>
              )}
              <Text key={data.id}>
                <a href={data.links.website}>{data.links.website}</a>
              </Text>
            </>
          ))}
        </Wrapper>
      )}
    </Container>
  );

ExchangePresenter.propTypes = {
  exchangeApi: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default ExchangePresenter;
