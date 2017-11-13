import {notables} from 'app/store/initialState';

export var notablesReducer = (state = notables, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export var levelReducer = (state = {1: [], 2: [], 3: [], 4: []}, action) => {
  switch (action.type) {
    case 'SET_RESULT':
      return {
        1: action.value[1],
        2: action.value[2],
        3: action.value[3],
        4: action.value[4],
      }      
    default:
      return state;
  }
}

export var playerCountReducer = (state = 2, action) => {
  switch (action.type) {
    case 'SET_PLAYER_COUNT':
      return action.value;
    default:
      return state;
  }
}

export var cardCountReducer = (state = { 2: [4, 3, 2, 1], 3: [4, 3, 2, 1], 4: [5, 4, 3, 2 ]}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}