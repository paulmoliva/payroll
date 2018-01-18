import React from 'react';

import ResultsTable from './resultsTable.jsx';

class SearchTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      results: [],
      agency: 'asd'
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
        max_salary: $('#max_salary').val(),
        barg_unit: $('#barg_unit').val()
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

  generateBargUnits(){
    if (this.state.agency === 'asd'){
      return (
        <select id='barg_unit'>
          <option value=''></option>
          <option value='ACE'>ACE</option>
          <option value='AEA'>AEA</option>
          <option value='APA'>APA</option>
          <option value='BUS'>BUS</option>
          <option value='CUST'>CUST</option>
          <option value='EXMPT'>EXMPT</option>
          <option value='FOOD'>FOOD</option>
          <option value='MAINT'>MAINT</option>
          <option value='NONREP'>NONREP</option>
          <option value='SCHBD'>SCHBD</option>
          <option value='SUB'>SUB</option>
          <option value='TEMP'>TEMP</option>
          <option value='TOTEM'>TOTEM</option>
        </select>
      );
    }
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
      <div style={{padding: '0px 30px', position:'relative'}}>
        <div style={{position: 'absolute', top: 0, right: '30px', padding: '10px', width: '332px'}}>
          <p style={{fontSize: '14px', fontWeight: 'bold'}}>Tips</p>
          <ul style={{padding: 0, fontSize: '12px', listStyle: 'disc'}}>
            <li>Enter any part of a word or name in the Search fields</li>

            <li>Click Order by to re-sort the list by Compensation Amount or by Last Name</li>

            <li>In the list, click on the header for a column to re-sort by that field</li>
          </ul>
        </div>
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
              <p className='searchLabel'>Bargaining Unit</p>
              {this.generateBargUnits()}
            </div>
            <div className='searchField'>
              <p className='searchLabel'>Agency/Entity</p>
              <select onChange={e => this.setState({agency: e.target.value})} id='agency'>
                <option value='asd'>Anchorage School District</option>
              </select>
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
