import React from 'react';
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {


  state = { lat: null, err: '' };
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //we call setState
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ err:err.message })
    );

  }

  render() {
    if (this.state.err && !this.state.lat) {
      return <div> Error :{this.state.err}</div>
    }
    if(!this.state.err && this.state.lat)
    {
      return <SeasonDisplay  lat={this.state.lat} />
    }
    return <Spinner loadmsg="Please give Location access " />
  }
}
/* make change in render add above render
render() {
  return(
    <div className ="border-red">{this.renderContent()} </div>
  );
};
*/

ReactDOM.render(<App />, document.querySelector('#root'));