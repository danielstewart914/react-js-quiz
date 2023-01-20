import styled from "styled-components";
import breakPoints from "../utils/breakPoints";

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1em;
  height: 3em;
  font-size: 1.25em;
  font-weight: 600;

  @media screen and (${breakPoints.sm}) {
    flex-direction: row;
    font-size: 1.5em;
    margin: 1em;
  }
`;

const CountDown = styled.span`
  text-align: center;
  min-width: 4rem;
  line-height: 2rem;
`;

const Warning = styled(CountDown)`
  color: red;
  font-weight: 700;
  animation-name: pulseFade;
  animation-duration: 1s;
  animation-iteration-count: ${ props => props.warningStart };
`;

const Timer = ({ countDown = 0, warningStart = 0 }) => {
  return (  
    <TimerWrapper>
      <span>Time: </span>
      {countDown > warningStart ? <CountDown>{countDown}</CountDown> : <Warning warningStart={warningStart}>{countDown}</Warning>}
    </TimerWrapper>
  );
}
 
export default Timer;