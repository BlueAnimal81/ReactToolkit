import * as redux from 'redux';
import thunk from 'redux-thunk';
import {notablesReducer, playerCountReducer, cardCountReducer, levelReducer} from 'reducers';

export const configure = (initialState = {}) => {

  var reducer = redux.combineReducers({
    notables: notablesReducer,
    playerCount: playerCountReducer,
    cardCount: cardCountReducer,
    levels: levelReducer    
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
