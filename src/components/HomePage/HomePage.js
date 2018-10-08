import React, { Component } from 'react'

class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                      <div className="container" id="styleContainer" style ={this.props.style}>
           <div className="row">
           <div className="col-lg col-md-12 col-sm-12">
           <h1 className ="title">Welcome to<span> giphy.</span></h1>
        
       
           </div>
            <div className=" col-lg col-md-12 col-sm-12">
          
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="2000">
              <div className="carousel-inner">
               <div className="carousel-item active">
                <img className="d-block w-100" src='https://media.giphy.com/media/cYejmY7tuJ4HTmBYHP/giphy.gif' alt="First slide" />
               </div>
              <div className="carousel-item">
             <img className="d-block w-100" src="https://media.giphy.com/media/aVgaFxzKX9E64/giphy.gif" alt="Second slide" />
           </div>
             <div className="carousel-item">
           <img className="d-block w-100" src="https://media.giphy.com/media/xT0GqGrvB5PgQYSKGc/giphy.gif" alt="Third slide" />
    </div>
  </div>
  
</div>

           
            
           
          </div>
         </div>
               
        </div> 
        <h1 style={{color:'white',marginTop:500+'px'}}>HELLLLLOOOOOOOOOO</h1>

 
            </section>
        );
    }
}
 
export default Homepage;