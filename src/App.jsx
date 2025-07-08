import { useState } from 'react';

const flashcards = [
  { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
  { question: 'What is a component?', answer: 'An independent, reusable piece of UI in React.' },
  { question: 'What is JSX?', answer: 'A syntax extension that looks like HTML but works in JavaScript.' },
  { question: 'What is a hook in React?', answer: 'A special function that lets you use state and other React features.' },
  { question: 'What is useEffect used for?', answer: 'It handles side effects in functional components.' },
];

function App() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>FlashCards</h1>
      <div style={styles.card} onClick={() => setShowAnswer(!showAnswer)}>
        <p style={styles.text}>
          {showAnswer ? flashcards[index].answer : flashcards[index].question}
        </p>
        <small style={styles.hint}>
          {showAnswer ? 'Click to show question' : 'Click to show answer'}
        </small>
      </div>
      <button style={styles.button} onClick={nextCard}>Next</button>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f0f4f8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '1rem',
    boxSizing: 'border-box'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    padding: '3rem 2rem',
    borderRadius: '1rem',
    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
    maxWidth: '700px',
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    marginBottom: '2rem',
    transition: 'transform 0.3s ease',
  },
  text: {
    fontSize: '1.6rem',
    color: '#222',
    minHeight: '80px',
  },
  hint: {
    display: 'block',
    marginTop: '1rem',
    fontSize: '1rem',
    color: '#777',
  },
  button: {
    padding: '0.7rem 1.5rem',
    fontSize: '1.1rem',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '0.6rem',
    cursor: 'pointer',
  },
};

export default App;
