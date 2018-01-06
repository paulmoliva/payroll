import React from 'react';

import Nav from './nav.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Nav />
        <p>Hello squirrels</p>
      </div>
    );
  }
}

export default App;
