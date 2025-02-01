/*
    props arata cam asa
    props = {
        backgroundImage: ...,
        date: ...
    }
    venit de la cine apeleaza TimeLeftHoliday adica app
*/
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

function TimeLeftHoliday(props) {
  const { date, title, backgroundImage } = props;

  const calculateTimeLeft = () => {
    const newYearDate = new Date(date);
    const currentDate = new Date();

    const difference = (newYearDate - currentDate) / 1000;

    const days = Math.floor(difference / 3600 / 24);
    const hours = Math.floor(difference / 3600) % 24;
    const minutes = Math.floor(difference / 60) % 24;
    const seconds = Math.floor(difference % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.mainContainer}>
        <h1>{title}</h1>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <span>{days}</span>
            <span>days</span>
          </div>
          <div className={styles.textContainer}>
            <span>{hours}</span>
            <span>hours</span>
          </div>
          <div className={styles.textContainer}>
            <span>{minutes}</span>
            <span>mins</span>
          </div>
          <div className={styles.textContainer}>
            <span>{seconds}</span>
            <span>seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLeftHoliday;
