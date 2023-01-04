import React, { useState } from 'react';

import '../src/App.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


function App(props) {


  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  const callApi = async (requestParams) => {
    setLoading(true);
    await setTimeout(
      () => { const data = {
        count: 2,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };
      setLoading(false);
      setData(data);
    }, 1000   
    )

  };


  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {method}</div>
      <div>URL: {url}</div>
      <Form setUrl={setUrl} setMethod={setMethod} handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
