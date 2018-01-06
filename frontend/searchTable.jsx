import React from 'react';

class SearchTable extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={{padding: '0px 30px', }}>
        <div style={{padding: '10px', backgroundColor: '#f4f4f4', fontSize: '12px'}}>
          <div style={{display: 'flex', flexDirection: 'row'}} >
            <div className='searchField'>
              <p className='searchLabel'>Last Name</p>
              <input type='text' id='last_name' />
            </div>
            <div className='searchField'>
              <p className='searchLabel'>First Name</p>
              <input type='text' id='first_name' />
            </div>
            <div className='searchField'>
              <p className='searchLabel'>Order By</p>
              <select id='order_by'>
                <option value='last_name'>Last Name</option>
                <option value='salary_high'>Salary High to Low</option>
                <option value='last_name'>Salary Low to High</option>
              </select>
            </div>
          </div>
          <button id='submit' style={{marginTop: '10px'}}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchTable;
