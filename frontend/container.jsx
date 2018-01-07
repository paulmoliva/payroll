import React from 'react';

class Container extends React.Component {
  render(){
    return (
      <div
        style={{
          margin: '0 auto',
          width: '980px',
          minHeight: '75vh',
          backgroundColor: '#fff',
          marginBottom: '20px'
        }}
      >
        <div id="menu"
          style={{
            padding: '5px 0px 5px 0',
            textAlign: 'right',
            fontSize: '12px'
          }}
        >
          <ul>
            <li><a href="http://www.alaskapolicyforum.org">Home</a></li>
            <li className="page_item page-item-2"><a href="http://www.alaskapolicyforum.org/aboutus/" title="About Us">About Us</a></li>
            <li className="page_item page-item-6 current_page_item"><a href="http://www.alaskapolicyforum.org/contact-us/" title="Contact Us">Contact Us</a></li>
            <li className="page_item page-item-5"><a href="http://www.alaskapolicyforum.org/faq/" title="FAQs">FAQs</a></li>
            <li className="page_item page-item-48"><a href="http://www.alaskapolicyforum.org/internships/" title="Internships">Internships</a></li>
            <li className="page_item page-item-260"><a href="http://www.alaskapolicyforum.org/donations/" title="PARTNER WITH US">PARTNER WITH US</a></li>
            <li className="page_item page-item-369"><a href="http://www.alaskapolicyforum.org/resources/" title="Resource Pages">Resource Pages</a></li>
            <li className="page_item page-item-342"><a href="http://www.alaskapolicyforum.org/signup-for-e-mail-updates/" title="SIGNUP FOR E-MAIL UPDATES">SIGNUP FOR E-MAIL UPDATES</a></li>
            <li><a href="http://www.alaskapolicyforum.org/feed/">RSS</a></li>
            <li><a href="http://www.alaskapolicyforum.org/feed/"><img src="http://www.alaskapolicyforum.org/wp-content/themes/yamidoo/images/feed.png" alt="RSS" /></a> </li>
          </ul>
        </div>

        <div>
          <ul
            className='bigMenu'
            style={{
              backgroundColor: '#f4f4f4',
              borderBottom: '1px solid #cccccc',
              borderTop: '1px solid #cccccc',
              padding: '7px 0',
              paddingLeft: '17px',
              width: '980px'
            }}
          >
            <li><a href="http://alaskapolicyforum.org">Home</a></li>
            <li><a href="http://alaskapolicyforum.org/category/education">Education</a></li>
            <li><a href="http://alaskapolicyforum.org/category/issues">Issues</a></li>
            <li><a href="http://alaskapolicyforum.org/category/transparency">Transparency</a></li>
            <li><a href="http://alaskapolicyforum.org/category/fiscal">Fiscal Policy</a></li>
          </ul>
        </div>

        <h1 style={{fontSize: '22px', margin: '0px 30px 10px', padding: 0, color: '#98002E'}}>
          Alaska Payroll Data (State and Local)
        </h1>
          {this.props.children}
      </div>
    );
  }
}

export default Container;
