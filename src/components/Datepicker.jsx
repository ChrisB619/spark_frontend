import { DatePicker } from "antd";
import React, { useState } from "react";

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className="form-control datetimepicker"
        type="date"
        dateFormat="dd-MM-yyyy"
      />
    </div>
  );
};

export default Datepicker;
