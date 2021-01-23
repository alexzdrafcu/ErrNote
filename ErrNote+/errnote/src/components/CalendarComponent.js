import React, { useState } from "react";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import "./CalendarComponent.css"
import { getByText } from "@testing-library/react";
function CalendarComponent() {
  const defaultValue = {
    year: 2021,
    month: 1,
    day: 1,
    text: "",
  };
  let customDays =
    [
      { year: 2021, month: 1, day: 4, text: "Examen", titlu: "DAM", ora: "9:30", className: 'examenDam' },
      { year: 2021, month: 1, day: 12, text: "Examen", titlu: "Tehnologii WEB", ora: "13:30", className: 'examenTw' },
      { year: 2021, month: 1, day: 18, text: "Verificare", titlu: "Multimedia", ora: "11:30", className: 'examenMm' },
      { year: 2021, month: 1, day: 26, text: "Examen", titlu: "Econometrie", ora: "9:30", className: 'examenEco' },
      { year: 2021, month: 1, day: 28, text: "Verificare", titlu: "CSE", ora: "7:30", className: 'examenCse' }
    ];

  const [selectedDay, setSelectedDay] = useState(defaultValue);

  function gettxt(x) {
    setSelectedDay(x);
    customDays.map(element => {
      if ((x.year === element.year) && (x.month === element.month) && (x.day === element.day)) {
        x.text = element.text;
        x.titlu = element.titlu;
        x.ora = element.ora;
        console.log("da");
      }
    });

  }
  return (
    <div className="calendar-component">
      <h3 style={{ marginLeft:"110px"}}>Calendar</h3>
      <div className="calendar-component-container">

        <Calendar
          value={selectedDay}
          onChange={gettxt}
          shouldHighlightWeekends
          colorPrimary="rgba(156, 136, 255, 0.7)"
          calendarClassName="custom-calendar"
          customDaysClassName={customDays}
        />
        <div className="calendar-exam">
          <div className="calendar-exam-content">
            <div className="calendar-exam-this">On this day:</div>
            <div className="calendar-exam-title">{selectedDay.titlu}</div>
            <div className="calendar-exam-ora">{selectedDay.ora}</div>
            <div className="calendar-exam-text">{selectedDay.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarComponent;
