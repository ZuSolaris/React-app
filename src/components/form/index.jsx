import React from 'react';

import './form.scss';

function Form(props) {

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={(handleSubmit)}>
        <label >
          <span>URL: </span>
          <input onChange = {(e)=> props.setUrl(e.target.value)} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <button onClick = {(e)=> props.setMethod(e.target.id)} id="get">GET</button>
          <button onClick = {(e)=> props.setMethod(e.target.id)}id="post">POST</button>
          <button onClick = {(e)=> props.setMethod(e.target.id)}id="put">PUT</button>
          <button onClick = {(e)=> props.setMethod(e.target.id)}id="delete">DELETE</button>
        </label>
      </form>
    </>
  );
};
export default Form;
