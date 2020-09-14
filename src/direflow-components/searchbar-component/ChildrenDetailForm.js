import React from "react"

export default function ChildrenDetailForm({ id }) {
    return (
        <input type="number" placeholder={`Age de l'enfant ${id + 1}`} min={3} max={11} required />
    )
}