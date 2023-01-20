import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
 
export default Main;