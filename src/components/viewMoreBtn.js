import React, { Component } from 'react'
import './viewMoreBtn.css';

class ViewMore extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "footer fixed-bottom">
            <button type="button" 
                    style={this.props.style} 
                    
                    onClick = {this.props.loadMore} 
                    className="btn btn-secondary btn-lg stylebtn">Double click to load more</button>
                   
             </div>
         );
    }
}
 
export default ViewMore;