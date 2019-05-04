import React from 'react';

class Nav extends React.Component {
  render(){
    return (
       <div id="logo" style={{margin: '0 auto', display: 'inline'}}>
         <a className="header-link" href="http://www.alaskapolicyforum.org/">
           <img src="/static/img/logo.png" alt="Alaska Policy Forum" style={{margin: '9px 12%'}}/>
         </a>
      </div>
   );
  }
}

export default Nav;
