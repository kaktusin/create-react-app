import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Container } from 'semantic-ui-react'
// import VideoList from './components/VideoList';


import VideoListBox from './components/VideoListBox';


class App extends Component {
		constructor() {
				super();
				this.state = {
						"status": "success",
				}
		}
		render() {


				return (
					<Container textAlign='left'>


						<div>

							<div className="App">

								<div className="App-header">
									<img src={logo} className="App-logo" alt="logo"/>
								</div>
								{/* <VideoList/> */}
								<p className="App-intro"></p>
							</div>
						</div>


					</Container>

				);
		}
}

export default App;
