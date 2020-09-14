import React, {useContext} from "react"
import { PreBookingFormContext } from "./PreBookingForm"
import ChildrenDetailForm from './ChildrenDetailForm'

export default function ChildrenAgeForm(){
    const {nbAdults, nbChildren, childrenList} = useContext(PreBookingFormContext)

    const handleSubmitAction = (event) => {
        event.preventDefault();
    
        for (let i = 0; i < childrenList.length; i++) {
          childrenList[i] = Number(event.target[i].value)
        }
    
        let visitors = {
          nb_adults: nbAdults,
          nb_children: childrenList.length,
          age_children: childrenList
        }

        let url = `https://tickets.parcasterix.fr/fr-FR/les-offres-du-parc-asterix?adults=${visitors.nb_adults}&children=${visitors.nb_children}`
        window.open(url)
    }

    return (
        <div className="children-age-form">
            <form onSubmit={handleSubmitAction}>
                <ul>
                    {(nbChildren > 0) && (
                        childrenList.map((age, index) =>
                        <li key={index}>
                            <ChildrenDetailForm id={index} />
                        </li>
                        )
                    )}
                </ul>
                <input type="submit" className="submit-button" value="Réserver!" />
            </form>
        </div>
    )
}