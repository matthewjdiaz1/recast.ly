// The top level container for the entire application. 
// This is the component that will be rendered to the DOM
// import exampleVideoData from './data/exampleVideoData.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videoBeingDisplayed: exampleVideoData[0]};
    //this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
  }

  onVideoTitleClick(index) {
    // event.preventDefault();
    this.setState({
      videoBeingDisplayed: exampleVideoData[index]
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoBeingDisplayed}/>
          </div>
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
            <VideoList videos={exampleVideoData} myFunction={this.onVideoTitleClick.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;