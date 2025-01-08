import styles from "./ScoreCircle.module.css";

const ScoreCircle = ({ score }) => {
  const percentage = (score / 10) * 100;
  const circleRadius = 50;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const offset = circleCircumference - (percentage / 100) * circleCircumference;

  return (
    <div className={styles.scoreCircle}>
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          className="background-circle"
          cx="60"
          cy="60"
          r={circleRadius}
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="10"
        />
        <circle
          className={styles.progressCircle}
          cx="60"
          cy="60"
          r={circleRadius}
          fill="none"
          stroke="#4caf50"
          strokeWidth="10"
          strokeDasharray={circleCircumference}
          strokeDashoffset={offset}
        />
        <text
          x="60"
          y="65"
          textAnchor="middle"
          fontSize="22"
          fontWeight="bold"
          fill="#000"
        >
          {Math.round(percentage)}%
        </text>
      </svg>
      <p className={styles.scoreLabel}>Score d&apos;évaluation</p>
    </div>
  );
};

export default ScoreCircle;
