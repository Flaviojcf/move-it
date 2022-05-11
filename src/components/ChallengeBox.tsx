import { useContext } from "react";
import {ChallengesContext} from '../contexts/ChallengesContext'
import { CountDownContext } from "../contexts/CountDownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;

  const {activeChallenge, resetChallenge, completedChallenge} = useContext(ChallengesContext)
  const {resetCountDown} = useContext(CountDownContext)

  function handleChallengeSucceded() {
    completedChallenge()
    resetCountDown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountDown()
  }
  
  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button type="button" onClick={handleChallengeFailed} className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" onClick={handleChallengeSucceded} className={styles.challengeSuccededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level quando completar os desafios
          </p>
        </div>
      )}
    </div>
  );
}
