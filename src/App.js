
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import GameOver from './pages/GameOver';
import GamePage from './pages/GamePage';
import WelcomeScreen from './pages/WelcomeScreen';
import { useTimerContext } from './utils/TimerContext';


const App = () => {
  const [page, setPage] = useState('welcome');
  const { startTimer, countDown } = useTimerContext();

  useEffect(() => {
    if (countDown === 0) {
      setPage('gameOver')
    }
  }, [countDown]);

  const startGame = () => {
    setPage( 'game' );
    startTimer();
  }

  const displayPage = () => {
    if( page === 'welcome' ) 
      return <WelcomeScreen startGame={startGame}/>
    if( page === 'game' ) return <GamePage />
    if( page === 'gameOver' ) return <GameOver />
  }

  return (
    <>
      <Header />
      <Main>
        {displayPage()}
      </Main>
    </>
  )
}

export default App;
