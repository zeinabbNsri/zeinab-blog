import React, { Component } from 'react';

class Tabel extends Component {

    constructor(props){
      super(props);
      
    }
  
    render() {
          return (
            <table className="tabel">
            <caption>Top Movies</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Rate</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {this.props.list.map(item => (
                <tr key={item.id}>
                  <td data-label="Account">{item.name}</td>
                  <td data-label="Due Date">{item.rate}</td>
                  <td data-label="Amount">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          );
        }
    }
  
  export default Tabel;
  