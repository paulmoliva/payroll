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
    this.submitSearch.bind(this)();
  }

  clearSearch(){
    $('#last_name').val('');
    $('#first_name').val('');
    $('#order_by').val('');
    $('#title').val('');
    $('#department').val('');
    $('#min_salary').val('');
    $('#max_salary').val('');
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
        order_by: $('#order_by').val(),
        title: $('#title').val(),
        department: $('#department').val(),
        min_salary: $('#min_salary').val(),
        max_salary: $('#max_salary').val()
      }),
      contentType: 'application/json',
      success: results => {
        this.setState({
          results: JSON.parse(results),
          loading: false
        });
        this.clearSearch();
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
        <form
          style=
            {{
              padding: '10px',
              backgroundColor: '#f4f4f4',
              fontSize: '12px'
            }}
            onSubmit={ e => {
              e.preventDefault();
              this.submitSearch();
            }}
        >
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
                <option value='salary_high'>Compensation High to Low</option>
                <option value='salary_low'>Compensation Low to High</option>
              </select>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginTop:'10px'}} >
            <div className='searchField'>
              <p className='searchLabel'>Title</p>
              <input type='text' id='title' />
            </div>
            <div className='searchField'>
              <p className='searchLabel'>Department/ Location</p>
              <input type='text' id='department' />
            </div>
            <div className='searchField'>
              <p className='searchLabel'>Year</p>
              <select id='order_by'>
                <option value='2017'>2017</option>
              </select>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', marginTop:'10px'}} >
            <div className='searchField'>
              <p className='searchLabel'>Agency/Entity</p>
              <select id='agency'>
                <option value='asd'>Anchorage School District</option>
              </select>
            </div>
            <div className='searchField'>
              <p className='searchLabel'>Salary Range</p>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <select id='min_salary'>
                  <option value=''></option>
                  <option value='20000'>$20,000</option>
                  <option value='30000'>$30,000</option>
                  <option value='40000'>$40,000</option>
                  <option value='50000'>$50,000</option>
                  <option value='60000'>$60,000</option>
                  <option value='70000'>$70,000</option>
                  <option value='80000'>$80,000</option>
                  <option value='90000'>$90,000</option>
                  <option value='100000'>$100,000+</option>
                </select>
                <p style={{margin: 0}}>to</p>
                <select id='max_salary'>
                  <option value=''></option>
                  <option value='20000'>$20,000</option>
                  <option value='30000'>$30,000</option>
                  <option value='40000'>$40,000</option>
                  <option value='50000'>$50,000</option>
                  <option value='60000'>$60,000</option>
                  <option value='70000'>$70,000</option>
                  <option value='80000'>$80,000</option>
                  <option value='90000'>$90,000</option>
                  <option value='100000'>$100,000+</option>
                </select>
              </div>
            </div>
          </div>

          <button
            id='submit'
            style={{marginTop: '10px'}}
            className='btn-primary'
            onClick={this.submitSearch.bind(this)}
          >
            Search
          </button>
        </form>
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
