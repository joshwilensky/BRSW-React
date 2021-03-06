import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import './Times.css'
import './Times1.css'


class Times extends React.Component {

    render() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={this.handleDateClick}
            />
        )
    }

    handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
    }

}

export default Times;
