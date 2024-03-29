import React, { useState, useEffect } from "react";
import axios from "axios"


export const onSubmit = (values, actions) => {
  const uniqueId = 123
  const data = new FormData();
  data.append('type', values.typ);
  data.append('first_name', values.fornamn);
  data.append('last_name', values.efternamn);
  data.append('email', values.epost);
  data.append('phone', values.telefon);
  data.append('county', values.stadsdel_kommun);
  data.append('subject', values.arende);
  data.append('message', values.medelande);
  data.append('files', values.image, `${parseInt(uniqueId)}-${values.image.name}`);
  
  alert(`Tack ${values.fornamn}, för medelandet. Vi återkommer såfort vi kan!`)
  actions.resetForm();

  axios.post('https://bob-backend-test-paa5jl3pga-lz.a.run.app/api/email/', data)
    .then(response => {
      console.log(response);
      actions.setSubmitting(false);
    })
    .catch(error => {
      console.error(error);
      actions.setSubmitting(false);
    });
};
