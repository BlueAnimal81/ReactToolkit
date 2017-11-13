import React from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import * as actions from 'actions';
import NotableList from 'NotableList';
import AgraPlayerCountSelector from 'AgraPlayerCountSelector';

export class AgraNotables extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  checkCount(playerCount, value)
  {
    if (value === 4) return true;
    if (playerCount === 4 && value === 5) return true;
    if (value === 3) return true;
    return false;    
  }

  countColour(values, colourName)
  { 
    var count = 0;
    for (var i = 0; i < values.length; i++) {
        if (values[i].colour === colourName) count++;
    }
    return count;
  }

  getNotable(array, start, end)
  {
    var number = this.getRndInteger(start, end) - 1;
    var notable = this.props.notables[number];
    if(!this.isInArray(array, notable)) {
        array.push(notable); 
        return notable;
    }
    return this.getNotable(array, start, end);
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  getNotables(count, start, end)
  {
    var ret = [];

    for (var i = 0; i < count ; i++) { 
        this.getNotable(ret, start, end);            
    }

    return ret;
  }

  isInArray(array, el) {
    for (var i = 0; i < array.length; i++) 
        if (array[i] == el) return true;
    return false;
  }

  getBalancedNotables()
  {
    var finished = false;

    var ret = [[],[],[],[]];        
    var playerCount = this.props.playerCount;
    var counts = this.props.cardCount[this.props.playerCount];

    do {
        ret[1] = this.getNotables(counts[0], 1, 8);      
        ret[2] = this.getNotables(counts[1], 9, 15); 
        ret[3] = this.getNotables(counts[2], 16, 20); 
        ret[4] = this.getNotables(counts[3], 21, 24); 

        var combined = [...ret[1], ...ret[2], ...ret[3], ...ret[4]];

        var red = this.countColour(combined, 'Red');
        var green = this.countColour(combined, 'Green');
        var blue = this.countColour(combined, 'Blue');

        var redOk = this.checkCount(playerCount, red);
        var greenOk = this.checkCount(playerCount, green);
        var blueOk = this.checkCount(playerCount, blue);

        finished = redOk && greenOk && blueOk;            
      } while (!finished);

      return ret;
  }

  onFormSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var ret = this.getBalancedNotables();
    dispatch(actions.setResult(ret));
  }

  setPlayerCount(value) {
    var {dispatch} = this.props;    
    dispatch(actions.setPlayerCount(value));
  }
  
  render() {
    var renderNotables = (level, title) => {  
      return (
        <NotableList key={level} id={level} title={title} />
      )
    };

    return (
      <div className="container"> 
          <div className="container__header">
            <AgraPlayerCountSelector />
          </div>

          <div className="container__message">
            {renderNotables(1, 'I')}
            {renderNotables(2, 'II')}
            {renderNotables(3, 'III')}
            {renderNotables(4, 'IV')}
          </div>

          <div className="container__footer">
            <form onSubmit={this.onFormSubmit}>
              <button className="button expanded" type="submit">GO</button>
            </form>
          </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      notables: state.notables,
      playerCount: state.playerCount,
      cardCount: state.cardCount,
      levels: state.levels
    }
  }
)(AgraNotables);