import React, { useState } from 'react'
import FullCalendar, { asRoughSeconds } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.scss"

export default class NewCalendar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isClicked: true,
            currentDate: Date()
        }
    }

    handleDateClick = (arg) => { // bind with an arrow function
        const { isClicked, currentDate } = this.state;

        if (!isClicked) {
            this.setState({ isClicked: true, currentDate: arg.dateStr })
            console.log(arg.dateStr)
        }
        if (currentDate === arg.dateStr) {
            this.setState({ isClicked: false, currentDate: "" })
        }
        else {
            this.setState({ ...this.state, currentDate: arg.dateStr })
        }
        // const tdate = arg.dateStr;
        // this.props.setDate(tdate);
    }

    render() {

        const { isClicked, currentDate } = this.state;

        return (
            <div className="calendar_wrap">
                {isClicked && <div>{currentDate}</div>}
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

}