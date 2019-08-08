import React from 'react';
import './App.css';
import Header from "./components/Navigation/Header"
import Footer from "./components/Navigation/Footer"
import Home from "./components/Content/Home"
class App extends React.Component {
 onResize = () => this.forceUpdate()


  render(){
    window.addEventListener('resize', this.onResize)
  return (
    <div>
<Header></Header>
    <Home></Home>
<Footer></Footer>
</div>
  );
}}

export default App;
