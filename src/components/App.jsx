import { useEffect, useState } from "react";

import classes from "./App.module.css";

import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";

function App() {
  const [feedbacks, setFeedback] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    return savedFeedbacks
      ? JSON.parse(savedFeedbacks)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const total = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positive = Math.round(
    (feedbacks.good / (total - feedbacks.neutral)) * 100
  );

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={classes["app"]}>
      <Description />
      <Options
        onFeedbackChange={handleFeedback}
        onFeedbackReset={handleReset}
        total={total}
      />
      {total > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          total={total}
          positiveFeedback={positive}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;