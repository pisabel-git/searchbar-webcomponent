import React, {useState} from "react"

export const PreBookingFormContext = React.createContext()

export default function PreBookingForm({children}) {

    const [nbAdults, setNbAdults] = useState(0)
    const [nbChildren, setNbChildren] = useState(0)
    const [childrenList, setChildrenList] = useState([])

    const bookingContext = {
        nbAdults: nbAdults,
        setNbAdults: (val) => setNbAdults(val),
        nbChildren: nbChildren,
        setNbChildren: (val) => setNbChildren(val),
        childrenList: childrenList,
        setChildrenList: (val) => setChildrenList(val)
    }
    
    return (
        <PreBookingFormContext.Provider value={bookingContext}>
            {children}
        </PreBookingFormContext.Provider>
    )
}