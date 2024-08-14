import './App.css';
import hangman from './components/img/hangman.png';
import { CheckLetter } from './components/checkLetter/CheckLetter';
import { Scoreboard } from './components/scoreBoard/ScoreBoard';

function App() {

  return (
    <>
    <div className='mainContainer'>
      <h1>Guess a word</h1>
      <Scoreboard />
        <img src={hangman} alt="" />
        <CheckLetter />
    </div>
    </>
  )
}

export default App
