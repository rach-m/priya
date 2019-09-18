import React from "react"
import banner from "../../assets/banner.png"
import jewelryBanner from "../../assets/jewelry-banner.png"
import "./home.css"
import AdBanner from "./AdBanner";
import ProductPage from "../ProductPage";


function Home() {
  return ( <div className="grid-container">
      <div className="A">
        {/* <AdBanner className = "banner" backgroundImage={banner} link="#" buttonPositionTop="85%" buttonPositionLeft="70%" /> */}
      </div>
      <div className="B">
      {/* <AdBanner className="banner" backgroundImage={jewelryBanner} link="#" buttonPositionTop="85%" buttonPositionLeft="70%"/> */}
      </div>
      <div className="C">
      {/* <AdBanner className="banner"  link="#" buttonPositionTop="85%" buttonPositionLeft="70%"/> */}
      </div>
      <div className="D" id="email-signup">
        <span className="mdi mdi-email-outline"/>
        <div className="email-form">
          <h5>WANT TO ALWAYS BE IN THE KNOW?</h5>
          <h6>JOIN OUR MAILING LIST TODAY!</h6>
          <form>
            <input type="email" placeholder="Email Address"/>
          <button className="button-normal" style = {{background:"black"}}>Sign Up!</button>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Home
