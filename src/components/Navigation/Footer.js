import React from 'react'

let Footer = () => {

  return (
    <footer>
      <div id = "top-row-footer">
      <nav>
        <h5>Contact Us</h5>
        <ul>
          <li>Get Help</li>
          <li>Style Guide</li>
          <li>Email a Stylist</li>
          <li>Questions</li>
        </ul>
      </nav>
      <nav>
        <h5>Our Company</h5>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Wholesale</li>
        </ul>
      </nav>
      <nav>
        <h5>Help</h5>
        <ul>
          <li>Shipping & Handling</li>
          <li>Return Policy</li>
          <li>International Orders</li>
          <li>F.A.Q.</li>
        </ul>
      </nav>
      <nav>
        <h5>Social Media</h5>
        <ul>
            <li><span className= "mdi mdi-facebook"></span></li>
            <li><span className= "mdi mdi-twitter"></span></li>
            <li><span className= "mdi mdi-instagram"></span></li>
        </ul>
      </nav>
      </div>
      <p>©2019 PRIYA All Rights Reserved</p>
    </footer>
  )

}

export default Footer
