import styled from 'styled-components';
import breakPoints from '../utils/breakPoints';
import Button from './Button';
import Timer from './Timer';
import Title from './Title';
import { useTimerContext } from '../utils/TimerContext';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & > button {
    margin: 1em;
  }

  @media screen and (${breakPoints.sm}) {
    flex-wrap: nowrap;
  }
`;

const Header = () => {
  const { countDown } = useTimerContext();

  return ( 
    <HeaderWrapper>
      <Button>High Scores</Button>
      <Title>JavaScript Coding Quiz</Title>
      <Timer countDown={countDown} warningStart={10} />
    </HeaderWrapper>
   );
}
 
export default Header;