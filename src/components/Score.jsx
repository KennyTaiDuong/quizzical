import "../App.css";

export default function Score(props) {
  function handleClick() {
    window.location.reload();
  }
  return (
    <div className="results-container">
      <h3>You scored {props.score}/5 correct answers</h3>
      <button className="trivia-btn" onClick={handleClick}>
        Play again
      </button>
    </div>
  );
}
