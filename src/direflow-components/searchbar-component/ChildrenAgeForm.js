import React, { useContext } from "react"
import { PreBookingFormContext } from "./PreBookingForm"
import ChildrenDetailForm from './ChildrenDetailForm'
import moment from 'moment'

export default function ChildrenAgeForm() {
    const { nbAdults, nbChildren, childrenList, startDate, endDate } = useContext(PreBookingFormContext)

    const handleSubmitAction = (event) => {
        event.preventDefault();

        for (let i = 0; i < childrenList.length; i++) {
            childrenList[i] = Number(event.target[i].value)
        }

        let visitors = {
            nb_adults: nbAdults,
            nb_children: childrenList.length,
            age_children: childrenList,
            start_date: moment(startDate).format('L'),
            end_date: moment(endDate).format('L')
        }
        let url = `https://tickets.parcasterix.fr/fr-FR/les-offres-du-parc-asterix?adults=${visitors.nb_adults}&children=${visitors.nb_children}&childrenAges=${visitors.age_children}&startDate=${visitors.start_date}&endDate=${visitors.end_date}`
        window.open(url)
    }

    return (
        <form onSubmit={handleSubmitAction} className="children-age-form">
            <ul>
                {(nbChildren > 0) && (
                    childrenList.map((age, index) =>
                        <li key={index}>
                            <ChildrenDetailForm id={index} />
                        </li>
                    )
                )}
            </ul>
            <input type="submit" className="pre-booking-submit-button" value="Réserver !" />
        </form>
    )
}