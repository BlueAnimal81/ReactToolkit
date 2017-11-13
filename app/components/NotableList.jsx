var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');
import Notable from 'Notable';

export class NotableList extends React.Component {
  render() {
    var renderNotables = () => {      
        return this.props.notables.map((notable) => {
            return (
                <Notable key={notable.number} {...notable} />
            );
        });
    };

    var renderList = () => {
        if (this.props.notables.length === 0) {
            return (<div></div>);
        }

        return (
            <div className="container section">
                <div className="container__header section-title">
                    {this.props.title}
                </div>
                <div className="pagina"> 
                    <div className="linha"> 
                        {renderNotables()}
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div>
            {renderList()}
        </div>
    );
  }
}

export default connect(
    (state, props) => {
        return {
            notables: state.levels[props.id]
        }
    }
)(NotableList);

 