import React, { Component } from 'react'
import './GifCards.css';
import { Link } from "react-router-dom";



class GifCards extends Component {
    
    render() { 
        return ( 
           
            <div className = "col-lg-4 col-md-6 col-sm-12" style={{textAlign:'center'}}>
               <div className="card mb-3" style={{height: 19+'rem',backgroundColor:'black'}}>
                 <Link type="button" 
                       style={{backgroundColor:'black'}} 
                       className="card-img-top" 
                        
                        to={{pathname: `/gif/${this.props.val}`,
                             state: { gifTitle: this.props.val }}}>
                             <img class="imgStyle"style={{width: 100+'%' ,height: 15+'rem', borderRadius:7+'px'}}src={this.props.image} alt ='gif'/> 
                 </Link>
              </div>
            </div>
            
         );
    }
}
 
export default GifCards;

