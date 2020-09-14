import React, { useState, useContext } from "react"
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates';
import { PreBookingFormContext } from "./PreBookingForm";
import { withStyles } from "direflow-component";
import datePickerStyles from 'react-dates/lib/css/_datepicker.css';


function DatePicker() {
    //const { startDate, setStartDate, endDate, setEndDate, focusedInput, setFocusedInput } = useContext(PreBookingFormContext)
    //const [endDate, setEndDate] = useState(null)
    const [isFocused, setFocused] = useState(false)
    const [date, setDate] = useState()

    return (
        <SingleDatePicker
            date={date} // momentPropTypes.momentObj or null
            onDateChange={(date) => setDate(date)} // PropTypes.func.isRequired
            focused={isFocused} // PropTypes.bool
            onFocusChange={({ focused }) => { setFocused(focused); }}// PropTypes.func.isRequired
            id="date_picker" // PropTypes.string.isRequired,
        />
    )

}

export default withStyles(datePickerStyles)(DatePicker)
