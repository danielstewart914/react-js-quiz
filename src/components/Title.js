import styled from "styled-components";
import breakPoints from "../utils/breakPoints";

const Title = styled.h1`
  margin: 0.5em;
  color: var(--secondary);
  text-align: center;
  font-size: 2em;
  font-weight: 700;
  -webkit-text-stroke: 1px #000;
  text-shadow: var(--shadow);
  order: -1;

  @media screen and (${breakPoints.sm}) {
    order: 0;
    margin: 1.5em auto;
  }
`;

export default Title;