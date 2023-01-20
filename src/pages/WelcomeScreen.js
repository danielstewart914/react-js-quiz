import styled from 'styled-components';
import Button from '../components/Button';

const Welcome = styled.h2`
  text-align: center;
  font-weight: 650;
  font-size: 1.75rem;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subheading = styled.h3`
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin: 0.5rem;
  font-weight: 600;
`;

const Directions = styled.ol`
  padding: 1em;
  width: 90%;
  line-height: 1.2em;
  text-align: start;
`;

const GoodLuck = styled.p`
  margin: 0.5em;
`;

const WelcomeScreen = ({ startGame }) => {
  return ( 
    <section>
      <Welcome>Welcome to the JavaScript Coding Quiz Game!</Welcome>
      <Subheading>Put your JavaScript knowledge to the test.</Subheading>
      <Directions>
        <li>Hit 'Start Quiz' to begin.</li>
        <li>Try and answer all questions as quickly as you can.</li>
        <li>Every correct answer earns you 1 point towards your final score.</li>
        <li>Every wrong answer will subtract 5 seconds off your time.</li>
        <li>If you finish before time runs out any remaining time will be added to your score as a bonus.</li>
      </Directions>
      <GoodLuck>Good Luck and enjoy the game!</GoodLuck>
      <Button onClick={startGame}>Start Quiz</Button>
    </section>
   );
}
 
export default WelcomeScreen;