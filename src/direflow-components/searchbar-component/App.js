import React from 'react';
import { Styled } from 'direflow-component';
import styles from './App.css';
import PreBookingForm from "./PreBookingForm"
import AdultsCount from './AdultsCount'
import ChildrenCount from './ChildrenCount'
import ChildrenAgeForm from './ChildrenAgeForm'

const App = () => {

  return (
    <Styled styles={styles}>
      <div className="pre-booking-form">
        <h1>Réservation Rapidus</h1>
        <PreBookingForm>
          <AdultsCount />
          <ChildrenCount />
          <ChildrenAgeForm />
        </PreBookingForm>
      </div>
    </Styled>
  );
};

export default App;