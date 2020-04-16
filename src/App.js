import React, { Component } from 'react';
import './assets/style.css';
import Tabel from './components/Table';
import BtnFilter from './components/BtnFilter';

class App extends Component {

  constructor(props){
    super(props);
    this.showByRating = this.showByRating.bind(this);
    this.state = {
      items:[],
      isLoaded:false
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/bemaxima/fake-api/movies').then(res => res.json()).then(json =>{
      this.setState({
        isLoaded:true,
        items:json
      })
    });
  }

  showByRating(items) {
    this.setState({items});
  }

  render() { 
      var {isLoaded,items} = this.state;
      if(!isLoaded){
        return <div>Loading...</div>
      }
      else{
        return (
          <div className="App">
            <Tabel list={this.state.items}/>
            <BtnFilter list={this.state.items} onPress={this.showByRating} />
          </div>
        );
      }
    }
  }

export default App;
