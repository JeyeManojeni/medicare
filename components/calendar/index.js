import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

class CalendarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDate: new Date(),
    }
  }

  onDateChange = (date) => {
    this.setState({ selectedDate: date })
    console.log('Selected date:', date)
  }

  render() {
    return (
      <div>
        <h3>Medication Calendar</h3>
        <Calendar
          onChange={this.onDateChange}
          value={this.state.selectedDate}
        />
      </div>
    )
  }
}

export default CalendarComponent