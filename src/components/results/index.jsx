import React from 'react';

function Results(props) {
    return (
      <section>
        {props.loading ? 
        <div>Please Wait Loading...</div> :
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> }
      </section>
    );
}

export default Results;
