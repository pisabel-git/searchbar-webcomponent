import React, { useContext } from "react"
import { PreBookingFormContext } from "./PreBookingForm"

export default function ChildrenCount() {
    const { nbChildren, setNbChildren, childrenList, setChildrenList } = useContext(PreBookingFormContext)

    const addChild = () => {
        setNbChildren(nbChildren + 1)
        setChildrenList(childrenList.concat(0))
    }

    const removeChild = () => {
        if (childrenList.length > 0) {
            setNbChildren(nbChildren - 1)
            setChildrenList(childrenList.slice(0, -1))
        }
    }

    return (
        <div className="children-count flex">
            <h2>Nombre d'enfants<br /><span>De 3 à 11 ans inclus</span></h2>
            <div className="btn-count">
                <button onClick={removeChild}>-</button>
                <p>{nbChildren}</p>
                <button onClick={addChild}>+</button>
            </div>
        </div>
    )
}