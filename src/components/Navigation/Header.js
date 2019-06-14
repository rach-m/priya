import React from 'react'
import logo from "../../assets/Priya_Logo.png"
import "./navigation.css"

let Header = () => {
  let menu = "hidden-menu"

function onResize() {
    if (window.outerWidth < 1000){
      menu = "collapsable-menu"
    }
  }
onResize()


  return (
    <header>
      <div id = "top-row-container">
      <img className="header-logo" src={logo} alt="logo for Priya a womens clothing company in a black thick font"></img>
      <span id="sale-tag-line">Refer A Friend and <b>Get $20</b></span>
     <div id = "header-stacking-container">
      <div id="header-user-account">
          <div>Welcome, User </div>
          <span className = "mdi mdi-account-heart-outline"></span>
          <span className= "mdi mdi-shopping"></span>
      </div>
          <form id="search-bar">
          <input type = "text"></input>
          <input type = "submit"></input>
        </form>
      </div>
      </div>
      <div id={menu}>
          <span className = "mdi mdi-menu"></span>
      </div>
      <nav>
        <ul>
          <li>Tops</li>
          <li>Bottoms</li>
          <li>Jewelry</li>
          <li>Shoes</li>
          <li>Specials</li>
        </ul>
      </nav>
    </header>
  )

}

export default Header
