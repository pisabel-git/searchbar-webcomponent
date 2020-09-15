import { Styled } from "direflow-component"
import React, { useContext } from "react"
import { PreBookingFormContext } from "./PreBookingForm"
import styles from './App.css'

export default function AdultsCount() {
    const { nbAdults, setNbAdults } = useContext(PreBookingFormContext)

    const addAdult = () => {
        setNbAdults(nbAdults + 1)
    }

    const removeAdult = () => {
        if (nbAdults > 0) {
            setNbAdults(nbAdults - 1)
        }
    }

    return (
        <Styled styles={styles}>
            <div className="adults-count">
                <h2>Nombre d'adultes</h2>
                <div className="btn-count">
                    <button onClick={removeAdult}>-</button>
                    <p>{nbAdults}</p>
                    <button onClick={addAdult}>+</button>
                </div>
            </div>
        </Styled>
    )
}