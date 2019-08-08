import React, { Component } from "react"
import banner from "../../assets/banner.png"
import shoeBanner from "../../assets/shoe-banner.png"
import jewelryBanner from "../../assets/jewelry-banner.png"
import "./home.css"

class Home extends Component {


  render() {
    return (<div className="grid-container" >
      <img className="A"
        src={banner}
        alt="ad for spring floral collection button on it to shop new arrivals" />
      <img className="B"
        src={jewelryBanner}
        alt="ad for spring floral collection button on it to shop new arrivals" />
        <img className="C"
          src={shoeBanner}
          alt="ad for spring floral collection button on it to shop new arrivals" />
          <div className="D" id="email-signup" >
        <span className= "mdi mdi-email-outline"></span>
        <div class = "email-form">
          <h5>WANT TO ALWAYS BE IN THE KNOW?</h5>
          <h6>JOIN OUR MAILING LIST TODAY!</h6>
          <form>
            <input type = "email" placeholder = "Email Address"></input>
            <button type = "button" title = "Sign Up!">Sign Up!</button>
          </form>

        </div>
        </div>
</div>
)
}
}

export default Home
