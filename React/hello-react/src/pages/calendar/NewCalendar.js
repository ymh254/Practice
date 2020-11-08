import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.scss"

export default class NewCalendar extends React.Component {
    render() {
        Date.prototype.yyyymmdd = function () {
            var yyyy = this.getFullYear().toString();
            var mm = (this.getMonth() + 1).toString();
            var dd = this.getDate().toString();

            return yyyy + "-" + (mm[1] ? mm : '0' + mm[0]) + "-" + (dd[1] ? dd : '0' + dd[0]);
        }

        return (
            <div className="calendar_wrap">
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    events={[{ title: "출석완료", date: "2020-11-08" }]}
                    dateClick={this.handleDateClick}
                    backgroundColor={'#378006'}
                />
            </div>

        )
    }
    handleDateClick = (arg) => { // bind with an arrow function
        console.log(arg.dateStr)
        // const tdate = arg.dateStr;
        // this.props.setDate(tdate);
    }
}