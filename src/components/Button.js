import styled from "styled-components";

const Button = styled.button`
  background-color: var(--dark);
  text-align: center;
  padding: 0.5em;
  margin: 0.5em auto;
  color: var(--light);
  text-decoration: none;
  border: 3px solid var(--secondary);
  border-radius: 0.25em;
  cursor: pointer;
  box-shadow: var(--shadow);
  outline: none;

  &:focus {
    background-color: var(--secondary-light);
    color: var(--dark);
  }
  @media ( hover ) {
    &:hover {
      background-color: var(--secondary-light);
      color: var(--dark);
    }
  }
`;

export default Button;