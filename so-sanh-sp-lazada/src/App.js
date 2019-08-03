import React from 'react';
import './tachyons.min.css';

// Data for test
// import sampleData from './assets/data';
import { getLazadaProduct } from './actions';

// COMPONENTS
import InputData from './components/InputData';
import ShowData from './components/ShowData';

const Header = () => (<div className="w-100 h2 bg-yellow tc v-mid  pa2 dark-gray ttu"></div>);

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { data: [], isLoading: false }
  }

  _handleGetData = (arrUrls = []) => {
    console.log('Calling the action: getLazadaProduct...');
    console.log('url1 = ', arrUrls[0]);
    console.log('url2 = ', arrUrls[1]);

    this.setState({ isLoading: true })

    getLazadaProduct(arrUrls)
      .then(arrResult => {
        console.log('Got data!!: ', arrResult);
        this.setState({
          data: arrResult,
          isLoading: false
        })
      })

    // if (arrUrls.length < 2) {
    //   this.setState({
    //     data: []
    //   });
    // } else {
    //   this.setState({
    //     data: sampleData
    //   });
    // }
  }

  render() {
    return (
      <div className="w-100 container">
        <Header />
        <InputData onGetData={this._handleGetData.bind(this)} showButton={!this.state.isLoading} />
        <ShowData arrItems={this.state.data} />
      </div>
    );
  }
}

export default App;
