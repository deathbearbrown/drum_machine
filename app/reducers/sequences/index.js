function updateObjectInArray(array, action) {
    return array.map( (item, index) => {
        if(index !== action.index) {
          return item;
        }
        return action.status ? 1 : 0;
    });
}

// Note: I would normally not want to have things this nested, but for the sake of time
// this is what I'm doing
export default function sequencesReducer(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_SEQUENCE':
      let sequence = state[action.sequence];
      let newBeatTypeArray = updateObjectInArray(sequence[action.beat_type], action);
      let updatedSequence = Object.assign({}, sequence, {[action.beat_type]: newBeatTypeArray});

      return Object.assign({}, state, {[action.sequence]: updatedSequence});
    default:
      return state;
  }
}
