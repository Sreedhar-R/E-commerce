  
import React, { Component } from "react";
import Header from './Header';
import Navbar from './Navbar';
// import Banner from './Banner';
import Cardlist from "./Cardlist";
import Footer from './Footer';
import * as datas from './Schema.json';
import '../styles/App.css';

import CardExpand from './CardExpand';
import SignIn from './SignIn';
import Register from './Register';
import Cartlist from './Cartlist';


class App extends Component{
  constructor(){
    super();
    this.state = {
      productsData : datas.default.data,
      view:"productList",
      cardData:null
    };
    this.updatePageName = this.updatePageName.bind(this);
  }

  getUiPage(){
    const {view} = this.state;
    switch (view) {
      case "productList":
        return <Cardlist products={this.state.productsData} goToCardExpand={this.updatePageName}/>;
      case "productCart":
        return <Cartlist/>
      case "pageSignIn":
        return <SignIn goToSignUp={this.updatePageName}/>
      case "pageSignUp":
        return <Register/>
      case "cardExapand":
        return <CardExpand/>
      default:
        return(
          <div>
            <p>Page Not Found</p>
          </div>
        )
      
    }
  }

  updatePageName(pageName){
    this.setState({view:pageName})
  }


  render(){
    return (
      <React.Fragment> 
        {this.state.view !== "pageSignIn" && this.state.view !== "pageSignUp" &&
        <React.Fragment>
            <section className="header-main border-bottom">
              <Header goToCart={this.updatePageName}/>
            </section>
            <Navbar/>
        </React.Fragment>
          }
        
        {this.getUiPage()}
        
        {this.state.view !== "pageSignIn" && this.state.view !== "pageSignUp" &&
          <Footer/>
        }
        {/* <CardExpand/> */}
        {/* <SignIn/> */}
        {/* <Register/> */}
        
      </React.Fragment>
    );
  }
 
}

export default App;