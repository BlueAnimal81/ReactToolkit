import React from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import * as actions from 'actions';

export class AgraPlayerCountSelector extends React.Component {
  constructor(props) {
    super(props);
  }
  
  setPlayerCount(value) {
    var {dispatch} = this.props;    
    dispatch(actions.setPlayerCount(value));
  }
  
  render() {    
    return (
      <div className="button-group round toggle">
        <input id="r1"
               type="radio" 
               onChange={this.setPlayerCount.bind(this, 2)} 
               checked={this.props.playerCount === 2} 
               name="playerCountGroup"/>
        <label className="button" htmlFor="r1">Two</label>

        <input id="r2"
               type="radio" 
               onChange={this.setPlayerCount.bind(this, 3)} 
               checked={this.props.playerCount === 3} 
               name="playerCountGroup"/>
        <label className="button" htmlFor="r2">Three</label>

        <input id="r3"
               type="radio" 
               onChange={this.setPlayerCount.bind(this, 4)} 
               checked={this.props.playerCount === 4} 
               name="playerCountGroup"/>
        <label className="button" htmlFor="r3">Four</label>
      </div>      
    );
  }
}

export default connect(
  (state) => {
    return {
      playerCount: state.playerCount,
    }
  }
)(AgraPlayerCountSelector);