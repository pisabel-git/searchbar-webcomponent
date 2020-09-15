import React, { useContext } from "react"
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates';
import { PreBookingFormContext } from "./PreBookingForm";
import { withStyles } from "direflow-component";
import datePickerStyles from 'react-dates/lib/css/_datepicker.css';


function DatePicker() {
    const { startDate, setStartDate, endDate, setEndDate, isFocused, setFocused } = useContext(PreBookingFormContext)

    return (
        <div className="datepicker">
            <h2>Dates du séjour</h2>
            <DateRangePicker
                startDate={startDate}
                startDateId="start-date"
                endDate={endDate}
                endDateId="end-date"
                onDatesChange={({ startDate, endDate }) => {
                    setStartDate(startDate);
                    setEndDate(endDate);
                }}
                focusedInput={isFocused}
                onFocusChange={(isFocused) => setFocused(isFocused)}
            />
        </div>
    )

}

export default withStyles(datePickerStyles)(DatePicker)
