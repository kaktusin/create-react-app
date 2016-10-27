import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from './components/Rating';
import VideoThumb from './components/VideoThumb';
import Description from './components/Description';
import VideoPlayer from './components/VideoPlayer';

let rating = 4;

class App extends Component {
  constructor(){
    super();
    this.state = {updateAppState: "this is a state in App"}
    this.updateAppState = this.updateAppState.bind(this)
  }

  updateAppState(e){
    this.setState({
      updateAppState: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <VideoPlayer /> */}
        {/* <VideoThumb imgSource="https://unsplash.it/200" videoTitle="Bubir başlık" videoId="fasdfdsa" /> */}
        {/* <Rating rating={rating} /> */}
        <Description
          // isPlayer="true"
          description="The yield keyword may not be used in an arrow function's body (except when permitted within functions further nested within it). As a consequence, arrow functions cannot be used as generators."
        />
        <div>
          <input type="text"
            onChange={this.updateAppState}
          />
        </div>
        <h1>{this.state.updateAppState}</h1>
      </div>


    );
  }
}


export default App;
