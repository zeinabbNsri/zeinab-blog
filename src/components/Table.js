import React, { Component } from 'react';
import MovieDetails from './MovieDetails';

class Tabel extends Component {

    constructor(props){
      super(props);
      
    }
    
    showDetail(e) {
      // console.log(e.target.tagName)
      var collapse = document.getElementsByClassName("detail-box") ;
      for(let i of collapse){
          i.classList.remove("visible-detail")
      }
      e.target.nextElementSibling.classList.add("visible-detail");
      
    }

    render() {
          return (
            <table className="tabel">
            <caption>Top Movies</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                {/* <th scope="col">Rate</th>
                <th scope="col">Description</th> */}
              </tr>
            </thead>
            <tbody>
              {this.props.list.map(item => (
                <tr key={item.id}>
                  <td data-label="Account" onClick={(e) => {this.showDetail(e)}}>{item.name}</td>
                  <MovieDetails rating={item.rate} summery={item.description} />
                  {/* <td data-label="Due Date">{item.rate}</td>
                  <td data-label="Amount">{item.description}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          );
        }
    }
  
  export default Tabel;
  