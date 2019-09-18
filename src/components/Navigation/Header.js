import React, { Component } from 'react'
import logo from "../../assets/Priya_Logo.png"
import "./navigation.css"
import HamburgerMenu from 'react-hamburger-menu'

class Header extends Component {

  state = {
    menu: "hidden-menu",
    open: false,
    nav: "do-not-show",
    headerColor: "#ffffff"
  }

  componentDidMount() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  onResize = () => {
    if (window.outerWidth < 1000) {
      this.setState({
        menu: "collapsable-menu"
      })
    }
    else {
      this.setState({
        menu: "hidden-menu"
      })
    }
  }


  handleClick = () => {
    if (this.state.nav === "do-not-show") {
      this.setState({
        open: !this.state.open,
        nav: "show",
        headerColor: "rgba(500, 0, 0, .1)"
      })
    }
    else {
      this.setState({
        open: !this.state.open,
        nav: "do-not-show",
        headerColor: "#ffffff"
      })
    }
  }

  render() {
    let nav;
    if (this.state.nav === "show") {
      nav = <nav id = "mobile-nav">
        <ul >
          <li onClick={() => this.props.onNavigationalClick("tops")}>Tops</li>
          <li onClick={() => this.props.onNavigationalClick("bottoms")}>Bottoms</li>
          <li onClick={() => this.props.onNavigationalClick("jewelry")}>Jewelry</li>
          <li onClick={() => this.props.onNavigationalClick("shoes")}>Shoes</li>
          <li onClick={() => this.props.onNavigationalClick("sale")}>Specials</li>
        </ul>
      </nav>
    }
    else {
      nav = ""
    }

    return (
      <div id = "header" style = {{background: this.state.headerColor}}>
      <header className = {this.state.nav}>
        <div id="top-row-container">
          <img onClick = {this.props.onLogoClick}className="header-logo" src={logo} alt="logo for Priya a womens clothing company in a black thick font"></img>
          <span id="sale-tag-line">Refer A Friend and <b>Get $20</b></span>
          <div id="header-stacking-container">
            <div id="header-user-account">
              <div>Welcome, User </div>
              <span className="mdi mdi-account-heart-outline"></span>
              <span className="mdi mdi-shopping"></span>
            </div>
            <form id="search-bar">
              <input type="text"></input>
              <input type="submit"></input>
            </form>
          </div>
          <div className={this.state.menu}>
            {/* <span onClick = {this.handleHamburgerClick} className="mdi mdi-menu"></span> */}
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color='black'
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>

        </div>
          <nav id="nav">
            <ul >
            <li onClick = {()=>this.props.onNavigationalClick("tops")}>Tops</li>
              <li onClick={() => this.props.onNavigationalClick("bottoms")}>Bottoms</li>
              <li onClick={() => this.props.onNavigationalClick("jewelry")}>Jewelry</li>
              <li onClick={() => this.props.onNavigationalClick("shoes")}>Shoes</li>
              <li onClick={() => this.props.onNavigationalClick("sale")}>Specials</li>
          </ul>
        </nav>
        {nav}
      </header>
      </div>
    )
  }
}

export default Header
