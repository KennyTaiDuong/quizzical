import "../App.css";

export default function Intro(props) {
  return (
    <div className="intro">
      <h2 className="intro-title">Quizzical</h2>
      <p className="intro-desc">
        Unleash your knowledge of those who play with balls...
      </p>
      <button className="start-btn" onClick={props.isStarted}>
        Start quiz
      </button>
    </div>
  );
}
