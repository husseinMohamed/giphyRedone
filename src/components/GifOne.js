import React, { Component } from 'react'
import icon from'../icon3.png';
import './GifOne.css';
import {Link} from "react-router-dom";

const API_KEY = "QFLYQrwY1gV5KgYrRDeFuK33jZfseKWv";


class GifOne extends Component {
    state = { 
        newGif:[],
        url:''
     }


    componentDidMount = async () =>{
        const title = this.props.location.state.gifTitle;

        const apiCallThree = await fetch(`http://api.giphy.com/v1/gifs/${title}?api_key=${API_KEY}`);
        const results = await apiCallThree.json();

        this.setState({
            newGif: results.data,
             url: results.data.images.original.url
         }); 
    }
    render() { 
        const tweet = `https://twitter.com/intent/tweet?url=${this.state.url}`
        const Gif = this.state.newGif;
        return ( 
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark fixed-top headerstyle" style={{backgroundColor:'black'}}>
               <div className = "container">
                 <div className="input-group-prepend">
                   <span className="input-group-text" 
                         id="inputGroup-sizing-lg" 
                         style={{backgroundColor: 'transparent', border:"transparent"}}>
                          <Link style={{color:"white", display:'flex'}} to={{ pathname: '/'}}><img src={icon} alt="icon" /><h1>giphy<span>.</span></h1></Link> 
                   </span>
                </div>
              </div>
            </nav>
            <div className="container">
            <div className="card cardStyle" style={{width: 45+'rem', marginTop:150+'px'}}>
            <h5 className="card-title titleOfcard">{Gif.title}</h5>
            <br/>
             <img style={{borderRadius:7+'px'}}className="card-img-top" src={this.state.url} alt='gif' />
              <div className="card-body">
              <a href={Gif.url} className="btn btn-outline-dark sourceBtn">View source</a>
              <br/>
            <a href={tweet} className="btn btn-outline-dark downloadBtn">Share on Twitter <br /><i className="fab fa-twitter twiticon"></i></a>
                  
                   
                   
               
                                      
             </div>
            </div>
           
            </div>
           
          
          </div>
     
       
         );
    }
}
 
export default GifOne;