var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export class Notable extends React.Component {
  render() {
    var {number, level, name, colour} = this.props

    var tileClassName = 'tile ';

    if (colour === 'Red') tileClassName += 'red';
    else if (colour === 'Green') tileClassName += 'green';
    else if (colour === 'Blue') tileClassName += 'blue';

    return (
      <div className={tileClassName}>
        <div className='tile-number'>
          {number}
        </div> 
        {/* <div className='title-title'>
          {name}
        </div>        */}
      </div>
    );
  }
}

export default connect()(Notable);