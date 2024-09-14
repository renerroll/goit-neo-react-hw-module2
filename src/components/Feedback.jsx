import classes from "./Feedback.module.css";

function Feedback({ feedbacks, totalFeedback, positiveFeedback }) {
  return (
    <ul className={classes["feedback"]}>
      {Object.entries(feedbacks).map(([name, value]) => (
        <li className={classes["feedback-item"]} key={name}>
          {name}:{value}
        </li>
      ))}
      <li className={classes["feedback-item"]}>Total:{totalFeedback}</li>
      <li className={classes["feedback-item"]}>Positive:{positiveFeedback}%</li>
    </ul>
  );
}

export default Feedback;