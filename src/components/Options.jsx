import classes from "./Options.module.css";

const Options = ({ total, onFeedbackChange, onFeedbackReset }) => (
  <div className={classes["options"]}>
    <button
      className={classes["options-button"]}
      onClick={() => onFeedbackChange("good")}
    >
      Good
    </button>
    <button
      className={classes["options-button"]}
      onClick={() => onFeedbackChange("neutral")}
    >
      Neutral
    </button>
    <button
      className={classes["options-button"]}
      onClick={() => onFeedbackChange("bad")}
    >
      Bad
    </button>
    {total > 0 && (
      <button className={classes["options-button"]} onClick={onFeedbackReset}>
        Reset
      </button>
    )}
  </div>
);

export default Options;