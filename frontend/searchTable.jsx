import React from 'react';

import ResultsTable from './resultsTable.jsx';

import queryString from 'query-string';

class SearchTable extends React.Component {
  constructor(props){
    super(props);
    const parsed = queryString.parse(location.search);
    const agency = parsed.agency;
    let initialAgency = agency || 'asd'
    this.state = {
      loading: true,
      results: [],
      agency: initialAgency,
      orderBy: 'last_name'
    };
  }

  componentDidMount(){
    this.submitSearch.bind(this)();
  }

  clearSearch(){
    $('#last_name').val('');
    $('#first_name').val('');
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
      url:'/search',
      type:'post',
      data: JSON.stringify({
        last_name: $('#last_name').val(),
        first_name: $('#first_name').val(),
        order_by: this.state.orderBy,
        title: $('#title').val(),
        department: $('#department').val(),
        min_salary: $('#min_salary').val(),
        max_salary: $('#max_salary').val(),
        barg_unit: $('#barg_unit').val(),
        agency: this.state.agency
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
    } else if (this.state.agency === 'cbj') {
      return (
        <select id='barg_unit'>
          <option value=''></option>
          <option value='IAFF'>IAFF</option>
          <option value='MEBA'>MEBA</option>
          <option value='PSEA'>PSEA</option>
          <option value='UN-REP'>UN-REP</option>
        </select>
      );
    } else if (this.state.agency === 'university') {
      return (
        <select id='barg_unit'>
          <option value=''></option>
          <option value='Local 6070 Crafts and Trades'>Local 6070 Crafts and Trades</option>
          <option value='Not Unionized'>Not Unionized</option>
          <option value='United Academic - Adjunts'>United Academic - Adjunts</option>
          <option value='United Academics'>United Academics</option>
          <option value='University of Alaska Federation of Teachers'>UA Federation of Teachers</option>
        </select>
      );
    } else if (this.state.agency === 'moa') {
      return (
        <select id='barg_unit'>
          <option value=''></option>
          <option value="AMEA">AMEA</option>
          <option value="APDEA - Sworn">APDEA - Sworn</option>
          <option value="APDEA-Non Sworn">APDEA-Non Sworn</option>
          <option value="Assembly">Assembly</option>
          <option value="Board & Com Mem">Board & Com Mem</option>
          <option value="Executives">Executives</option>
          <option value="IAFF 40 hr">IAFF 40 hr</option>
          <option value="IAFF Dispatch">IAFF Dispatch</option>
          <option value="IAFF Kelly">IAFF Kelly</option>
          <option value="IBEW-MLP">IBEW-MLP</option>
          <option value="IBEW-MOA">IBEW-MOA</option>
          <option value="IBEW-Technician">IBEW-Technician</option>
          <option value="Local 71">Local 71</option>
          <option value="Mayor">Mayor</option>
          <option value="NECA-Inside">NECA-Inside</option>
          <option value="NECA-Outside">NECA-Outside</option>
          <option value="Non Rep Kelly">Non Rep Kelly</option>
          <option value="Non Represented">Non Represented</option>
          <option value="Non-Represented">Non-Represented</option>
          <option value="Op Engr 302">Op Engr 302</option>
          <option value="Plumbers">Plumbers</option>
          <option value="Teamsters">Teamsters</option>
        </select>
      );
    } else if (this.state.agency === 'msb') {
      return (
        <select id="barg_unit">
          <option value=''></option>
          <option value="MSBEA">MSBEA</option>
        </select>
      );
    } else if (this.state.agency === 'soa') {
        return (
            <select id="barg_unit">
                <option value=''></option>
                <option value='Mt. Edgecumbe Teachers'>Mt. Edgecumbe Teachers</option>
                <option value='Masters, Mates, & Pilots'>Masters, Mates, & Pilots</option>
                <option value='Marine Engineers'>Marine Engineers</option>
                <option value='Inland Boatmen'>Inland Boatmen</option>
                <option value='AK Vocational Technical Center Teachers'>AK Vocational Technical Center Teachers</option>
                <option value='Exempt / Partially Exempt Employees'>Exempt / Partially Exempt Employees</option>
            </select>
        )
    }  else if (this.state.agency === 'seward') {
        return (
            <select id="barg_unit">
                <option value=''></option>
                <option value='IBEW'>IBEW</option>
                <option value='SPEA'>SPEA</option>
                <option value='None'>None</option>
            </select>
        )
    } else return <select id='barg_unit' disabled></select>
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
                <p style={{margin: '0px 10px'}}>to</p>
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
              <select id='order_by' disabled>
                <option selected={this.state.agency !== 'seward'} value='2017'>2017</option>
                <option selected={this.state.agency === 'seward'} value='2018'>2018</option>
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
              <select
                value={this.state.agency}
                onChange={e => this.setState({agency: e.target.value})}
                id='agency'
              >
                <option value='asd'>Anchorage School District</option>
                <option value='fnsb'>Fairbanks North Star Borough</option>
                <option value='msb'>Mat Su Borough</option>
                <option value='moa'>Municipality of Anchorage</option>
                <option value='soa'>State of Alaska Executive Branch</option>
                <option value='seward'>City of Seward</option>
                <option value='university'>University of Alaska</option>
              </select>
            </div>
            <div className='searchField'>
              <p className='searchLabel'>Order By</p>
              <select
                id='order_by'
                value={this.state.orderBy}
                onChange={e => this.setState({orderBy: e.target.value})}
              >
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
