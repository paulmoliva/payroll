import React from 'react';

import Nav from './nav.jsx';
import Container from './container.jsx';
import SearchTable from './searchTable.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Nav />
        <Container>
          <SearchTable />
        </Container>
      </div>
    );
  }
}

export default App;
