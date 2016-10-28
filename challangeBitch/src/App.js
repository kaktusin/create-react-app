import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Container } from 'semantic-ui-react'

// import VideoThumb from './components/VideoThumb';

import VideoListBox from './components/VideoListBox';


class App extends Component {
    constructor() {
        super();
        this.state = {
            "status": "success",
            "data": [
              {
                "_id": "580fc79540ed671787ddd016",
                "name": "[0] Getting Started With ReactJs",
                "description": "React.js is a JavaScript library for building user interfaces. - Just the UI: Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, its easy to try it out on a small feature in an existing project. - Virtual DOM: React uses a virtual DOM diff implementation for ultra-high performance. It can also render on the server using Node.js — no heavy browser DOM required. - Data flow: React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.",
                "url": "videos/Getting_Started_With_React.js.mp4",
                "ratings": [
                  1,
                  5,
                  5,
                  4,
                  3,
                  4,
                  2,
                  5
                ]
              },
              {
                "_id": "580fc79540ed671787ddd017",
                "name": "[1] Google Cardboard Assembly",
                "description": "Google Cardboard Assembly Step by Step Instructions [HD]",
                "url": "videos/Google_Cardboard_Assembly.mp4",
                "__v": 2,
                "ratings": [
                  4,
                  5,
                  5,
                  5,
                  3,
                  5,
                  4,
                  5,
                  1,
                  2
                ]
              },
              {
                "_id": "580fc79540ed671787ddd018",
                "name": "[2] How Does AngularJS Work Beginners Angular Tutorial",
                "description": "What you will learn in this course. How to use Angular.js to save time, create better projects and give your users a better experience. We’ll create a full SPA from scratch (client side). How to cloud-enable your SPA so that you can connect it to any kind of backend. Fully commented source code of the course project. Learn how to architecture a SPA: modules, controllers, services Learn how to add URL routes to your client-side SPA. We’ll be using Angular.js version 1.3.2. Access live examples at the end of each coding lesson. Learn how to use other great tools such as Boostrap 3, UnderscoreJS and Google Chrome’s Developer Tools!",
                "url": "videos/How_Does_AngularJS_Work_Beginners_Angular_Tutorial.mp4",
                "__v": 13,
                "ratings": [
                  2,
                  4,
                  2,
                  2,
                  3,
                  1,
                  2,
                  5,
                  5,
                  1,
                  3,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  1,
                  5,
                  5,
                  4
                ]
              },
              {
                "_id": "580fc79540ed671787ddd019",
                "name": "[3] How does Node.js work",
                "description": "New to Node.js? Check out this video that explains \"How does Node work?\"",
                "url": "videos/How_does_Node.js_work.mp4",
                "ratings": [
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3
                ]
              },
              {
                "_id": "580fc79540ed671787ddd01a",
                "name": "[4] iPhone 7 Trailer 2016",
                "description": "iPhone 7 concept trailer 2016! with Bluetooth AirPods by Beats and ChargingPad, and much more!",
                "url": "videos/iPhone_7_Trailer_2016.mp4",
                "ratings": [
                  4,
                  3,
                  4,
                  3,
                  4,
                  3,
                  4,
                  3
                ]
              },
              {
                "_id": "580fc79540ed671787ddd01b",
                "name": "[5] What is the MEAN Stack",
                "description": "Do you know what the MEAN stack is? Watch our short intro video and get ready to kick your learning into shape with this full-stack development toolkit. Then head on over and play through our MEAN-related courses now.",
                "url": "videos/What_is_the_MEAN_Stack.mp4",
                "ratings": [
                  1,
                  5,
                  5,
                  5,
                  3,
                  4,
                  5,
                  5
                ]
              },
              {
                "_id": "580fc79540ed671787ddd01c",
                "name": "[6] Getting Started With ReactJs",
                "description": "React.js is a JavaScript library for building user interfaces. - Just the UI: Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, its easy to try it out on a small feature in an existing project. - Virtual DOM: React uses a virtual DOM diff implementation for ultra-high performance. It can also render on the server using Node.js — no heavy browser DOM required. - Data flow: React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.",
                "url": "videos/Getting_Started_With_React.js.mp4",
                "ratings": [
                  1,
                  5,
                  5,
                  4,
                  3,
                  4,
                  2,
                  5
                ]
              },
              {
                "_id": "580fc79540ed671787ddd01d",
                "name": "[7] Google Cardboard Assembly",
                "description": "Google Cardboard Assembly Step by Step Instructions [HD]",
                "url": "videos/Google_Cardboard_Assembly.mp4",
                "ratings": [
                  4,
                  5,
                  5,
                  5,
                  3,
                  5,
                  4,
                  5
                ]
              },
              {
                "_id": "580fc79540ed671787ddd01e",
                "name": "[8] How Does AngularJS Work Beginners Angular Tutorial",
                "description": "What you will learn in this course. How to use Angular.js to save time, create better projects and give your users a better experience. We’ll create a full SPA from scratch (client side). How to cloud-enable your SPA so that you can connect it to any kind of backend. Fully commented source code of the course project. Learn how to architecture a SPA: modules, controllers, services Learn how to add URL routes to your client-side SPA. We’ll be using Angular.js version 1.3.2. Access live examples at the end of each coding lesson. Learn how to use other great tools such as Boostrap 3, UnderscoreJS and Google Chrome’s Developer Tools!",
                "url": "videos/How_Does_AngularJS_Work_Beginners_Angular_Tutorial.mp4",
                "ratings": [
                  2,
                  4,
                  2,
                  2,
                  3,
                  1,
                  2,
                  5
                ]
              },
              {
                "_id": "580fc79540ed671787ddd01f",
                "name": "[9] How does Node.js work",
                "description": "New to Node.js? Check out this video that explains \"How does Node work?\"",
                "url": "videos/How_does_Node.js_work.mp4",
                "ratings": [
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3
                ]
              },
              {
                "_id": "580fc79540ed671787ddd020",
                "name": "[10] iPhone 7 Trailer 2016",
                "description": "iPhone 7 concept trailer 2016! with Bluetooth AirPods by Beats and ChargingPad, and much more!",
                "url": "videos/iPhone_7_Trailer_2016.mp4",
                "ratings": [
                  4,
                  3,
                  4,
                  3,
                  4,
                  3,
                  4,
                  3
                ]
              },
              {
                "_id": "580fc79540ed671787ddd079",
                "name": "[99] How does Node.js work",
                "description": "New to Node.js? Check out this video that explains \"How does Node work?\"",
                "url": "videos/How_does_Node.js_work.mp4",
                "ratings": [
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3,
                  3
                ]
              }
            ]

        }
    }
    render() {
        let rows = this.state.data.map(item => {
          return <VideoListBox key={item._id} data={item} />
        })

        return (
          <div>
            <div className="App">

              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React</h2>
              </div>
              <Container textAlign='left'>
                <Grid doubling columns={3}>

                  {rows}

                </Grid>
              </Container>
              <p className="App-intro"></p>
              {/* <VideoPlayer /> */}
              {/* <VideoThumb imgSource="https://unsplash.it/200" videoTitle="Bubir başlık" videoId="fasdfdsa" /> */}



              <div>
                <input type="text" onChange={this.updateAppState}/>
              </div>
              <h1>{this.state.updateAppState}</h1>
            </div>
          </div>
        );
    }
}

export default App;
