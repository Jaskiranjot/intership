import React from 'react';

function GoogleApi() {

  var gapi = window.gapi
 var CLIENT_ID='56855434936-188582seneqjev7r5u65vighghim7q4q.apps.googleusercontent.com'
 var API_KEY ='AIzaSyA0JFaoloiRefilEvAK-DT5pxppsK_om5c'
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"

  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('loaded client!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {

        var event = {
          'summary': 'Send it on',
          'location': 'nowhere, calgary, T1R1Y1',
          'description': 'please let me test it',
          'start': {
            'dateTime': '2020-09-30T01:07:58-11:00',
            //UTC-07:00	2020-09-27T07:07:58 -07:00	Mountain Time (USA and Canada)
           //'dateTime': 'Wed Sep 28 2020 09:30:00 GMT-0600 (Mountain Daylight Time)',
            //'timeZone':"Mountain Time (USA and Canada)"
            'timeZone': 'America/Edmonton'
          },
          'end': {
            'dateTime': '2020-09-30T01:07:58-11:00',
            //'dateTime': 'Wed Sep 28 2020 10:30:00 GMT-0600 (Mountain Daylight Time)',
            'timeZone': 'America/Edmonton'
          // 'timeZone':"Mountain Time (USA and Canada)"
          },
          'recurrence': [
            // 'RRULE:FREQ=DAILY;COUNT=2'
          ],
          'attendees': [
            // {'email': 'lpage@example.com'},
            // {'email': 'sbrin@example.com'}
          ],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        }

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event,
        })

        request.execute(event => {
          console.log(event)
          window.open(event.htmlLink)
        })

        /*
        // get events
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(response => {
          const events = response.result.items
          console.log('EVENTS: ', events)
        })
        */


      })
    })
  }
  return (
    <div className="App">
      <header className="App-header">  
        
        <p style={{fontSize: 18}}>only api</p>
        <button style={{width: 100, height: 50}} onClick={handleClick}>Add Event</button>
      </header>
    </div>
  );
}

export default GoogleApi;

  
