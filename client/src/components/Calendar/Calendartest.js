import React from 'react'
import './Calendar.css'


class Calendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount() {

    if (window.gapi && window.gapi.client) {

      var timeMin = new Date()
      timeMin.setHours(0, 0, 0)

      var timeMax = new Date()
      timeMax.setHours(23, 59, 59)

      window.gapi.client.load('calendar', 'v3', () => {
        window.gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': timeMin.toISOString(),
          'timeMax': timeMax.toISOString(),
          'singleEvents': true
        }).then(response => {
          let events = []
          response.result.items.forEach(event => {
            events.push({
              title: event.summary,
              start: new Date(event.start.dateTime),
              end: new Date(event.end.dateTime)
            })
          })
          this.setState({events})
        })
      })
    }
  }

  render() {

    console.log(this.state.events)

    return (
      ...render events...
    )
  }
}

export default Calendar