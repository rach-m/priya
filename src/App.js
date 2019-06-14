import React from 'react';
import './App.css';
import Header from "./components/Navigation/Header"
import Footer from "./components/Navigation/Footer"
class App extends React.Component {
 onResize = () => this.forceUpdate()


  render(){
    window.addEventListener('resize', this.onResize)
  return (
    <div>
<Header></Header>
    <div>I am content</div>
<Footer></Footer>
</div>
  );
}}

export default App;
