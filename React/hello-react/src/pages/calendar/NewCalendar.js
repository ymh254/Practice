import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "./calendar.scss"

export default class NewCalendar extends React.Component {

    render() {
        return (
            <div className="calendar_wrap">

                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin]}
                    events={[{ title: "출석완료", date: "2020-10-31" }]} />
            </div>

        )
    }

}