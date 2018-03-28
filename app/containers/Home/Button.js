import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  width: 400px;
  height: 40px;
  margin: 20px auto;
  padding: 0.25em 1em;
  background-color: #00B7B3;
  border-radius: 5px;
  color: #FFF;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background: #607d8b;
    color: #FFF;
  }
`;

export default Button;
