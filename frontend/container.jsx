import React from 'react';
import Nav from './nav';

class Container extends React.Component {
  render(){
    return (
      <div id="page" className="site">

        <header id="saga-header" className="site-header">
          <Nav />
          <div className="saga-navigation">
            <div className="navigation-wrapper">
              <nav id="site-navigation" className="main-navigation">
                <span className="toggle-menu" aria-controls="primary-menu" aria-expanded="false">
                     <span className="screen-reader-text">
                        Primary Menu                    </span>
                    <i className="ham"></i>
                </span>
                <div className="menu"><ul id="primary-menu" className="menu menu-desktop"><li id="menu-item-6211" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6211"><a href="http://alaskapolicyforum.org/the-latest-2/">The Latest<i className="ion-ios-arrow-down"></i></a>
                  <ul className="sub-menu">
                    <li id="menu-item-6068" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6068"><a href="http://alaskapolicyforum.org/category/blog/">Blog</a></li>
                    <li id="menu-item-6089" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6089"><a href="http://alaskapolicyforum.org/category/reports-policy-briefs/">Reports &amp; Policy Briefs</a></li>
                    <li id="menu-item-6090" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6090"><a href="http://alaskapolicyforum.org/category/testimony/">Testimony</a></li>
                  </ul>
                </li>
                  <li id="menu-item-6184" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6184"><a href="http://payroll.alaskapolicyforum.org">Public Payroll Data</a></li>
                  <li id="menu-item-6377" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6377"><a href="http://alaskapolicyforum.org/legislator-report-cards/">Legislator Report Cards</a></li>
                  <li id="menu-item-6063" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6063"><a href="http://alaskapolicyforum.org/aboutus/">About the Forum<i className="ion-ios-arrow-down"></i></a>
                    <ul className="sub-menu">
                      <li id="menu-item-6064" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6064"><a href="http://alaskapolicyforum.org/aboutus/vision-mission/">Vision &amp; Mission</a></li>
                      <li id="menu-item-6065" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6065"><a href="http://alaskapolicyforum.org/aboutus/meet-the-staff/">Staff</a></li>
                      <li id="menu-item-6066" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6066"><a href="http://alaskapolicyforum.org/aboutus/faq/">FAQs</a></li>
                      <li id="menu-item-6067" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6067"><a href="http://alaskapolicyforum.org/aboutus/contact-us/">Contact Us</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-6193" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6193"><a href="http://alaskapolicyforum.org/issues/">Issues<i className="ion-ios-arrow-down"></i></a>
                    <ul className="sub-menu">
                      <li id="menu-item-6107" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6107"><a href="http://alaskapolicyforum.org/category/state-budget-taxes/">State Budget &amp; Taxes</a></li>
                      <li id="menu-item-6105" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6105"><a href="http://alaskapolicyforum.org/category/healthcare/">Health Care</a></li>
                      <li id="menu-item-6145" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6145"><a href="http://alaskapolicyforum.org/category/education/">Education</a></li>
                      <li id="menu-item-6106" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-6106"><a href="http://alaskapolicyforum.org/category/other-issues/">Other Issues</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-6246" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6246"><a href="#">Get Involved<i className="ion-ios-arrow-down"></i></a>
                    <ul className="sub-menu">
                      <li id="menu-item-6245" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6245"><a href="http://alaskapolicyforum.org/get-involved/ways-to-give/">Ways to Give</a></li>
                      <li id="menu-item-6061" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6061"><a href="http://alaskapolicyforum.org/get-involved/internships/">Internships</a></li>
                      <li id="menu-item-6196" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6196"><a href="http://alaskapolicyforum.org/get-involved/volunteer/">Volunteer</a></li>
                      <li id="menu-item-6198" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6198"><a href="http://alaskapolicyforum.org/get-involved/contact-your-legislators/">Contact Your Legislators</a></li>
                      <li id="menu-item-6199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6199"><a href="http://alaskapolicyforum.org/aboutus/contact-us/">Contact Us</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-6708" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6708"><a href="http://alaskapolicyforum.org/anc_peaks/">PEAKS Data Map</a></li>
                  <li id="menu-item-6187" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6187"><a href="http://alaskapolicyforum.org/sign-up-for-e-mail-updates/">Sign Up for E-mail Updates</a></li>
                </ul></div>                </nav>
            </div>
          </div>
        </header>

        <h1 style={{fontSize: '22px', margin: '10px 30px 10px', padding: 0, color: '#151D48'}}>
          Alaska Payroll Data (State, Local, and School Districts)
        </h1>
          {this.props.children}

      </div>
    );
  }
}

export default Container;
