import React, { Component } from 'react'
import './Header.css';
import {Link} from "react-router-dom";

class Header extends Component {
    refreshPage = () =>{
      window.location.reload();
    }

  
    render() { 

        return ( 
        <div>
              {/* <span className = "nme">by hussein</span>   */}
           <nav className="navbar navbar-expand-lg navbar-dark fixed-top headerstyle" style={{backgroundColor:'black'}}>
           <p style={{color:'white', opacity:0.4}}>by hussein</p>
            <div className = "container">
            <div className="input-group input-group-lg">
             <div className="input-group-prepend">
              <span className="input-group-text" 
                    onClick={this.refreshPage }
                    id="inputGroup-sizing-lg" 
                    style={{backgroundColor: 'transparent', border:"transparent", cursor:'pointer'}}>
                    
                    <img src={this.props.img} alt="icon" /><h2 style={{color:'lightgray'}}>giphy<span style={{color:'orange'}}>.</span></h2>
              </span>
            </div>
             <input type="text" 
                    onChange = {this.props.inputText}
                    placeholder="Search all the GIFs.. "
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-lg" />
            
              <div className="input-group-append">
             <button className="btn" 
                       onClick={this.props.searchBtn}
                       style={{backgroundColor: 'white', border:'transparent'}}
                       type="button" id="button-addon2">
                       <i style={{color:'orange'}}className="fas fa-search"></i></button>
              </div>
            </div>
           </div>
          </nav>
         
          <div className="container" id="styleContainer" style ={this.props.style}>
           <div className="row style={{marginBottom:40+'px'}}">
            <div className="col-lg col-md-12 col-sm-12">
             <h1 className ="title"><h1 style={{opacity:0}}>{' '}welcome to</h1><span> {' '}giphy</span><span style={{color:'orange'}}>.</span></h1>
            </div>
           </div>
          </div> 

        <section >
          <div className="container-fluid" id="styleContainer" style ={this.props.style}>
           <div className="row rowBanner" style={{marginTop: 335+'px'}}></div>
          </div>
        </section>

        <section >
          <div className="container-fluid" id="styleContainer" style ={this.props.style}>
           <div className="row rowBanner" style={{marginTop: 50+'px'}}>
            <div className="col-md col-sm-6">
              <img className="d-block w-100 imgBanner" src="https://media.giphy.com/media/cYejmY7tuJ4HTmBYHP/giphy.gif" alt="first gif" />
           </div>
           <div className="col-md col-sm-6">
             <img className="d-block w-100 imgBanner" src="https://media.giphy.com/media/aVgaFxzKX9E64/giphy.gif" alt="second gif" />
           </div>
           <div className="col-md col-sm-6">
             <img className="d-block w-100 imgBanner" src="https://media.giphy.com/media/unRa3ffljnuec/giphy.gif" alt="third gif" />
           </div>
           <div className="col-md col-sm-6">
             <img className="d-block w-100 imgBanner" src="https://media.giphy.com/media/xT0GqGrvB5PgQYSKGc/giphy.gif" alt="fourth gif" />
           </div>
          </div>
         </div>
        </section>
        
   </div>
         );
    }
}
 
export default Header;



