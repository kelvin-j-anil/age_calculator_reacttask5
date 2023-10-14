import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { enGB } from 'date-fns/locale';


function formatDate(date) {
  if (date instanceof Date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return '';
}




function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const calculateAge = () => {
    if (selectedDate) {
      const today = new Date();
      const birthDate = new Date(selectedDate);
      const ageInMilliseconds = today - birthDate;
      const ageDate = new Date(ageInMilliseconds);
      const years = ageDate.getUTCFullYear() - 1970;
      setAge(`Your are ${years} years old`);
    } else {
      setAge('Please select a date of birth.');
    }

  };

  return (
    <div className="App">

      <div className='Header'>
      <h1>Age Calculator</h1>
      <h5>Enter your date of birth</h5>
      </div>
      
      <div className="date-picker">
      {/* <DatePicker
  id = "date"
  selected={selectedDate}
  onChange={handleDateChange}
  dateFormat="dd-MM-yyyy"
  placeholderText="Select a date of birth"
  showYearDropdown
  showMonthDropdown
  dropdownMode="select"
  locale={enGB}
  customInput={
    <div className="custom-input">
      <input
        type="text"
        value={selectedDate ? selectedDate.toLocaleDateString() : ''}
        readOnly
      />
      <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
    </div>
  }
/> */}

<DatePicker
  id="date"
  selected={selectedDate}
  onChange={handleDateChange}
  placeholderText="Select a date of birth"
  showYearDropdown
  showMonthDropdown
  dropdownMode="select"
  locale={enGB}
  customInput={
    <div className="custom-input">
      <input
        type="text"
        value={selectedDate ? formatDate(selectedDate) : ''}
        readOnly
      />
      <FontAwesomeIcon icon={faCalendar} className="calendar-icon" />
    </div>
  }
/>




        <Button variant="primary" onClick={calculateAge} id="calc_button">
          Calculate Age
        </Button>
      </div>
      <div className="result" id='show_Result'>
        <p>{age}</p>
      </div>
    </div>
  );
}

export default App;
