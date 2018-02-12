import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';


class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Contact" subtitle="Feel free to contact me"/>
        <div className="container">
          <h2>Dean Lingard</h2>
          <p>
            Deanlingard@yahoo.co.uk <br/>
            07535806314 <br/>
            Leeds, LS2
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact
