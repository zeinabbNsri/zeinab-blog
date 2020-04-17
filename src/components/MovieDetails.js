import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faPollH } from '@fortawesome/free-solid-svg-icons'

class MovieDetails extends Component {

    constructor(props){
      super(props);
    }
  
    render() {
          return (
            <div className="detail-box">
                <div><FontAwesomeIcon icon={faStar} className="star-icon"/>Rate : {this.props.rating}</div>
                <p>
                <FontAwesomeIcon icon={faPollH} className="text-icon"/>
                Summary : {this.props.summery}
                </p>
            </div>
          );
        }
    }
  
  export default MovieDetails;
  