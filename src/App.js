import React from 'react';
import Home from './components/Home';
import { connect } from 'react-redux';
import {fetchData} from "./actions/actions";
import get from "lodash/get";

class App extends React.Component {
  render() {
    console.log(this.props, "props");
    
    return (
      <div>
        <Home />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    data: get(state, "pageState.data", {})
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPageData: () => {
      dispatch(fetchData());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
