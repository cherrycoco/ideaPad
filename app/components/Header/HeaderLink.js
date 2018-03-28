import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 1em;
  margin: 0 0.5em;
  text-decoration: none;
  cursor: pointer;
  font-family: Raleway, sans-serif;
  font-size: 16px;
  color: #22D9C5;

  &:active {
    text-decoration: underline;
    color: blue;
  }
`;
