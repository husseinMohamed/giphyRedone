import React, { Component } from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import GifCards from './components/GifCards/GifCards';
import ViewMore from './components/viewMoreBtn';
import icon from'./icon3.png';
import './App.css';



const API_KEY = "QFLYQrwY1gV5KgYrRDeFuK33jZfseKWv";

class App extends Component {
  state = {
    input: '',
    gifs:[],
    value: 10,
    vis: {
      visibility: 'hidden'
    },
    headerBtn:{
      
    }

  }
 

  txtInput = (e) => {
   this.setState({
     input: e.target.value

   }); 
  }
  
  searchButton = async () => {
    const gifApiCall = await fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.input}&api_key=${API_KEY}&limit=${this.state.value}`);
    const txt = await gifApiCall.json();
    this.setState({
      gifs: txt.data,
      vis:{ visibility: 'visible'},
      headerBtn:{display: 'none'}
    });
 }

  loadMoreContent = async () => {
    const gifApiCall = await fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.input}&api_key=${API_KEY}&limit=${this.state.value}`);
    const txt = await gifApiCall.json();
    this.setState({
      gifs: txt.data,
      value: this.state.value + 5
    });
 }

  //save to localStorage start
  //  componentDidMount = () => {
  //     const json = localStorage.getItem('gifs');
  //     const gifs = JSON.parse(json);
  //     this.setState({ gifs:gifs });
  //   }
  //   componentDidUpdate = () => {
  //     const gifs = JSON.stringify(this.state.gifs);
  //     localStorage.setItem('gifs',gifs);
  //   }
  //save to localStorage end

  render() {
    return (
      <div className="App">
        
        <Header style ={this.state.headerBtn} img ={icon} inputText= {this.txtInput} searchBtn={this.searchButton} />
        <div className = "container">
         <div className ="row">
         {this.state.gifs.map((gif) => {
           return(
            <GifCards key={gif.id} title ={gif.title} val={gif.id} image={gif.images.fixed_height.url}/>
           );
         })}
          <ViewMore style={this.state.vis} loadMore = {this.loadMoreContent} />
          <div className ="foot"></div>
        </div>
       </div>
     </div>
    );
  }
}

export default App; 
                                                               