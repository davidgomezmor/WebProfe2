import React, { useState, useContext } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";
import { teacherSchedule } from "./teacherSchedule";

//HOOKS
export const MyCalendar = () => {
  const [selectedHours, setSelectedHours] = useState({});
  const [date, setDate] = useState(new Date());

  //ACTUALIZA FECHA CUANDO EL USUARIO SELECCIONA UNA
  const onChangeDate = (date) => {
    setDate(date);
  };

  //ACTUALIZA HORA CUANDO EL USUARIO SELECCIONA UNA
  const onHourSelect = (hour) => {
    setSelectedHours((prevSelectedHours) => {
      const selectedHoursForDate = prevSelectedHours[date.toDateString()] || [];
      if (selectedHoursForDate.includes(hour)) {
        return {
          ...prevSelectedHours,
          [date.toDateString()]: selectedHoursForDate.filter(
            (prevHour) => prevHour !== hour
          ),
        };
      } else {
        return {
          ...prevSelectedHours,
          [date.toDateString()]: [...selectedHoursForDate, hour],
        };
      }
    });
  };

  //MUESTRA HORAS DISPONIBLES
  const getAvailableHours = (date) => {
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    return teacherSchedule[day] || [];
  };

  const formatSelectedHours = (selectedHours) => {
    const formattedSelectedHours = [];
    let count = 1;

    for (const [dateString, hours] of Object.entries(selectedHours)) {
      const date = new Date(dateString);
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      for (const hour of hours) {
        formattedSelectedHours.push(`${count}. ${formattedDate} - ${hour}`)
        count++
      }
    }
    return formattedSelectedHours;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <Calendar minDate={new Date()} onChange={onChangeDate} value={date} />
          <div className="mt-5">
            <h3 className="text-2xl font-bold leading-tight text-gray-900 my-6">
              Choose Date and time for next class:
            </h3>
            <ul>
              {getAvailableHours(date).map((hour) => (
                <li key={hour}>
                  <button className={`${selectedHours[date.toDateString()]?.includes(hour) ? "bg-gray-400 cursor-not-allowed" : "bg-primary"} text-white font-bold py-2 px-4 rounded`} disabled={selectedHours[date.toDateString()]?.includes(hour)} onClick={() => onHourSelect(hour)}>
                    {hour}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-bold leading-tight text-gray-900 my-6">
              Selected hours:
            </h2>
            <ul>
              {formatSelectedHours(selectedHours).map((formattedHour) => (
                <li key={formattedHour} className="text-lg leading-7 text-gray-500">{formattedHour}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};