import React from 'react';
import './App.css';
import Header from "./components/Navigation/Header"
import Footer from "./components/Navigation/Footer"
import Home from "./components/Content/Home"
import ProductPage from './components/ProductPage';
class App extends React.Component {
  state = {
    products: false
  }
 onResize = () => this.forceUpdate()

 onNavigationalClick = (product) => {
   this.setState({
     products:true,
     current: product
   })
 }

 onLogoClick = () => {
   this.setState({
     products: false
   })
 }

  render(){
    window.addEventListener('resize', this.onResize)
  return (
    <div>
      <Header onNavigationalClick={this.onNavigationalClick} onLogoClick = {this.onLogoClick}/>
    {this.state.products ? <ProductPage /> : <Home />}
<Footer/>
</div>
  );
}}

export default App;
