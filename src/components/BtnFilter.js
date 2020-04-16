import React, { Component } from 'react';

class BtnFilter extends Component {

    constructor(props){
      super(props);
      this.sortByRating = this.sortByRating.bind(this);
    }
    
    sortByRating = () => {
        var res = this.props.list.sort(function(a, b) {
            var x = a.rate; var y = b.rate;
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        });;

        this.props.onPress(res);            
    }

    render() {
          return (
            <div>
                <span className="btn-filter"  onClick={this.sortByRating}>sort by rating</span>
            </div>
          );
        }
    }
  
  export default BtnFilter;
  