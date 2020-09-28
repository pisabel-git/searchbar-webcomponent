import React, { useContext } from "react"
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates';
import { PreBookingFormContext } from "./PreBookingForm";
import { withStyles } from "direflow-component";

import styles from './DatePicker.css'


function DatePicker() {
    const { startDate, setStartDate, endDate, setEndDate, isFocused, setFocused } = useContext(PreBookingFormContext)

    return (
        <div className='pre-booking-datepicker'>
            <h2>Dates du séjour</h2>
            <div className="date">
                <DateRangePicker
                    startDate={startDate}
                    startDateId="start-date"
                    startDatePlaceholderText="Arrivée"
                    endDate={endDate}
                    endDateId="end-date"
                    endDatePlaceholderText="Départ"
                    onDatesChange={({ startDate, endDate }) => {
                        setStartDate(startDate);
                        setEndDate(endDate);
                    }}
                    focusedInput={isFocused}
                    onFocusChange={(isFocused) => setFocused(isFocused)}
                />
            </div>
        </div>
    )

}

export default withStyles(styles)(DatePicker)
