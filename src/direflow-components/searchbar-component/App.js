import React from 'react';
import { withStyles } from 'direflow-component';
import PreBookingForm from "./PreBookingForm"
import AdultsCount from './AdultsCount'
import ChildrenCount from './ChildrenCount'
import ChildrenAgeForm from './ChildrenAgeForm'
import DatePicker from "./DatePicker"

import styles from './App.css';

const App = () => {

  return (
    <div className="pre-booking-form">
      <h1>Réservation Rapidvs</h1>
      <PreBookingForm>
        <DatePicker />
        <AdultsCount />
        <ChildrenCount />
        <ChildrenAgeForm />
      </PreBookingForm>
    </div>
  );
};

export default withStyles(styles)(App);