import styled from 'styled-components';

const H1 = styled.h1`
  color: ${(props) => props.primary ? '#22D9C5' : 'white'};

  font-size: 2em;
  margin-bottom: 0.25em;
  text-align: center;
  font-family: 'Raleway', sans-serif;
`;

export default H1;
