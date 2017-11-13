import React from 'react';
import {connect} from 'react-redux';

import AgraNotables from 'AgraNotables';

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="page-title">agra notables randomizer</h1>

        <div className="row">
          <div className="column small-centered small-8 medium-8 large 8">
            <div className="container">
                <AgraNotables />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);