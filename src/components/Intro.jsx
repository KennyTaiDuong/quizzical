import "../App.css";

export default function Intro(props) {
  return (
    <div className="intro">
      <h2 className="intro-title">Quizzical</h2>
      <p className="intro-desc">
        Unleash your knowledge of those who play with balls...
      </p>
      <div className="btn-container">
        <button className="diff-btn" onClick={props.setDifficulty("easy")}>
          Easy
        </button>
        <button className="diff-btn" onClick={props.setDifficulty("medium")}>
          Medium
        </button>
        <button className="diff-btn" onClick={props.setDifficulty("hard")}>
          Hard
        </button>
      </div>
      <button className="start-btn" onClick={props.isStarted}>
        Start quiz
      </button>
    </div>
  );
}
