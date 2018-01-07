import React from 'react';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class ResultsTable extends React.Component {
  constructor(props){
    super(props);
    this.options = {
      //defaultSortName: 'total_comp',  // default sort column name
      //defaultSortOrder: 'desc',  // default sort order,
      page: 1,  // which page you want to show as default
      sizePerPageList: [ {
        text: '15', value: 15
      }, {
        text: '50', value: 50
      }, {
        text: 'All', value: this.props.results.length
      } ], // you can change the dropdown list for size per page
      sizePerPage: 15,  // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
    };
  }

  numberWithCommas(cell){
    return cell ?
    '$' + cell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : '';
  }

  render(){
    return(
      <div style={{fontSize: '11px'}}>
        <BootstrapTable
            headerStyle={ { width: '100%' } }
            bodyStyle={ { width: '100%' } }
            data={this.props.results}
            hover={true}
            options={this.options}
            pagination={true}
            exportCSV
          >
            <TableHeaderColumn
              dataField="id" isKey={true}
              hidden>
              ID
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="name"
              dataSort={true}
              filter={ { type: 'TextFilter', delay: 1000 } }
              width='20%'
            >
              Name
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="title"
              dataSort={true}
              filter={ { type: 'TextFilter', delay: 1000 } }
              width='25%'
            >
              Title
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="location"
              dataSort={true}
              filter={ { type: 'TextFilter', delay: 1000 } }
              width='25%'
            >
              Location
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="gross"
              dataSort={true}
              dataFormat={cell => {
                return this.numberWithCommas(cell);
              }}
            >
              Earnings
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="benefits"
              dataSort={true}
              dataFormat={cell => {
                return this.numberWithCommas(cell);
              }}
            >
              Benefits
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="total"
              dataSort={true}
              dataFormat={cell => {
                return this.numberWithCommas(cell);
              }}
            >
              Total Compensation
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
    );
  }
}

export default ResultsTable;
