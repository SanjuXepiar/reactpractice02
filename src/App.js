import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Typing from "./components/Typing";
import Result from "./components/Result";
import Word from "./components/Word";
import "./App.css";
function App() {
  let word = Word;
  const [newWord, setNewWord] = useState(word[0]);
  const [time, setTime] = useState();
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [correctCount, setCorrectCount] = useState(0);
  const [correctResult, setCorrectResult] = useState([]);
  const [incorrectResult, setIncorrectResult] = useState([]);
  const [animation, setAnimation] = useState(null);
  const randomWord = Math.floor(Math.random() * word.length);

  //functions

  const checkResult = () => {
    if (inputValue.trim() === newWord) {
      setCorrectResult((preCorrect) => [...preCorrect, newWord]);
      setCorrectCount((preCount) => preCount + 1);
      return;
    }
    return setIncorrectResult((preInCorrect) => [...preInCorrect, inputValue]);
  };

  const handleInput = (e) => {
    if (e.charCode === 13 && inputValue.trim() !== "") {
      checkResult();
      setNewWord(word[randomWord]);
      setInputValue("");
    }
  };

  const handleButton = () => {
    setDisabled(!disabled);
    setInputValue("");
    setCorrectCount(0);
    setCorrectResult([]);
    setIncorrectResult([]);
  };

  useEffect(() => {
    if (time <= 30 && time !== 0 && disabled === false) {
      setTimeout(() => setTime((preTime) => preTime - 1), 1000);
    } else if (disabled) {
      setTime(30);
      setAnimation(null);
    } else if (time === 0) {
      setDisabled(true);
      setTimeout(() => setInputValue(""), 2000);
    }
    if (time <= 10) {
      setAnimation("timer 2s infinite");
    }
  }, [disabled, time]);

  useEffect(() => {
    setNewWord(word[randomWord]);
  }, []);

  return (
    <div className="App">
      <>
        <Container>
          <Typing
            newWord={newWord}
            time={time}
            inputValue={inputValue}
            setInputValue={setInputValue}
            disabled={disabled}
            handleInput={handleInput}
            handleButton={handleButton}
            animation={animation}
          />
        </Container>
      </>
      <>
        <Result
          correctCount={correctCount}
          correctResult={correctResult}
          incorrectResult={incorrectResult}
        />
      </>
    </div>
  );
}

export default App;
