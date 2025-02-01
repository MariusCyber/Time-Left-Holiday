import styles from "./styles.module.css";
import winterImg from "../assets/images/winter.jpg";
import easterImg from "../assets/images/easter.jpeg";
import christmasImg from "../assets/images/christmas.jpg";
import halloweenImg from "../assets/images/halloween.jpg";
import TimeLeftHoliday from "../components/time-left-holiday";

function App() {
  const currentYear = new Date().getFullYear();
  const today = new Date();

  const holidays = [
    { backgroundImage: winterImg, month: 0, day: 1, title: "New Year Eve" }, // Jan = 0
    { backgroundImage: easterImg, month: 3, day: 20, title: "Easter" }, // Apr = 3
    { backgroundImage: halloweenImg, month: 9, day: 31, title: "Halloween" }, // Oct = 9
    { backgroundImage: christmasImg, month: 11, day: 25, title: "Christmas" }, // Dec = 11
  ];

  // Map holidays to include date based on whether they have passed or not
  const holidaysWithDate = holidays.map((holiday) => {
    const holidayDate = new Date(currentYear, holiday.month, holiday.day);
    if (holidayDate < today) {
      // If holiday has passed, set date for next year
      holidayDate.setFullYear(currentYear + 1);
    }
    return {
      ...holiday,
      date: holidayDate,
    };
  });

  return (
    <main className={styles.main}>
      {holidaysWithDate.map((holiday, index) => (
        <TimeLeftHoliday
          key={index}
          backgroundImage={holiday.backgroundImage}
          date={holiday.date}
          title={holiday.title}
        />
      ))}
    </main>
  );
}

export default App;
