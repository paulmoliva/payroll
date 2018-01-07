import React from 'react';

import ResultsTable from './resultsTable.jsx';

class SearchTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      results: []
    };
  }

  componentDidMount(){
    $.ajax({
      url:'/search/asd',
      type:'post',
      data: JSON.stringify({
        last_name: $('#last_name').val(),
        first_name: $('#first_name').val(),
        order_by: $('#order_by').val()
      }),
      contentType: 'application/json',
      success: results => {
        this.setState({
          results: JSON.parse(results),
          loading: false
        });
      }
    });
  }

  submitSearch(){
    this.setState({
      loading: true,
      results: []
    });
    $.ajax({
      url:'/search/asd',
      type:'post',
      data: JSON.stringify({
        last_name: $('#last_name').val(),
        first_name: $('#first_name').val(),
        order_by: $('#order_by').val()
      }),
      contentType: 'application/json',
      success: results => {
        this.setState({
          results: JSON.parse(results),
          loading: false
        });
      }
    });
  }

  loadingSpinner(){
    return (
      <img
        src='/static/img/spinner2.gif'
        style={{textAlign: 'center'}}
      >
      </img>
    );
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
                <option value='salary_low'>Salary Low to High</option>
              </select>
            </div>
          </div>
          <button
            id='submit'
            style={{marginTop: '10px'}}
            onClick={this.submitSearch.bind(this)}
          >
            Search
          </button>
        </div>
        {
          this.state.loading ?
            this.loadingSpinner() :
            <ResultsTable results={this.state.results} />
        }
      </div>
    );
  }
}

export default SearchTable;
