import React, { useState } from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';
import ChildrenDetailForm from './ChildrenDetailForm'

const App = () => {
  const [nbAdults, setNbAdults] = useState(0)
  const [nbChildren, setNbChildren] = useState(0)
  const [childrenList, setChildrenList] = useState([])

  const addAdult = () => {
    setNbAdults(nbAdults + 1)
  }

  const removeAdult = () => {
    if (nbAdults > 0) {
      setNbAdults(nbAdults - 1)
    }
  }

  const addChild = () => {
    setNbChildren(nbChildren + 1)
    setChildrenList(childrenList.concat(0))
    console.log(childrenList)
  }

  const removeChild = () => {
    if (childrenList.length > 0) {
      setChildrenList(childrenList.slice(0, -1))
      console.log(childrenList)
    }
  }

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
    console.log(visitors)
    let url = `https://tickets.parcasterix.fr/fr-FR/les-offres-du-parc-asterix?adults=${visitors.nb_adults}&children=${visitors.nb_children}`
    window.open(url)
  }

  return (
    <Styled styles={styles}>
      <div>
        <h1>Je veux réserver !</h1>
        <h2>Nombre d'adultes : {nbAdults}</h2>
        <button onClick={addAdult}>+</button>
        <button onClick={removeAdult}>-</button>

        <h2>Nombre d'enfants : {childrenList.length}</h2>
        <button onClick={addChild}>+</button>
        <button onClick={removeChild}>-</button>
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
          <input type="submit" value="Réserver!" />
        </form>
      </div>
    </Styled>
  );
};

export default App;