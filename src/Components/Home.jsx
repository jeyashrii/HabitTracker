import { useState } from "react";
import "../App.css";

function Home() {
  const [habit, setHabit] = useState("");
  const [habitList, setHabitList] = useState([]);
  const [time, setTime] = useState("");
  function createHabit() {
    setHabitList((prev) => [...prev, { name: habit, time }]);
    setHabit("");
  }
  let year = null;
  let month = null;

  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  return (
    <>
      <div className="app-container">
        <div className="input-container">
          <div className="input-month">
            <label htmlFor="month">Select month : </label>
            <input
              value={time}
              id="month"
              type="month"
              onChange={(e) => setTime(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              className="input-habit"
              placeholder="Add your habit.."
              id="input-habit"
              type="text"
              value={habit}
              onChange={(e) => {
                setHabit(e.target.value);
              }}
            ></input>
            <button disabled={!habit.trim()} onClick={createHabit}>
              Add
            </button>
          </div>
        </div>

        {habitList.map((habitObj, index) => {
          const [yearStr, monthStr] = habitObj.time.split("-");
          year = parseInt(yearStr);
          month = parseInt(monthStr);
          const numDays = getDaysInMonth(month, year);
          return (
            <div className="habit-container" key={index}>
              <div className="habit-header">
                <p className="habit-heading">{habitObj.name}</p>
                <p>{habitObj.time}</p>
              </div>

              <div className="habit-box">
                <div className="grid-box">
                  {Array(numDays)
                    .fill(0)
                    .map((item, index) => {
                      return <div className="grid-day" key={index}></div>;
                    })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
