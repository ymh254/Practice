import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class NewCalendar extends React.Component {

    render() {
        return (
            <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
        )
    }

}