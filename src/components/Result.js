import React from "react";
import "../App.css";

const Result = ({ correctCount, correctResult, incorrectResult }) => {
  return (
    <div className="result">
      <h3 className="resultHeading">Correct Result: {correctCount}</h3>

      <section className="resultBody">
        <div className="correctResult">
          {correctResult.map((result, index) => {
            return (
              <div key={index}>
                <p>{result}</p>
              </div>
            );
          })}
        </div>
        <div className="incorrectResult">
          {incorrectResult.map((result, index) => {
            return (
              <div key={index}>
                <p>{result}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Result;
