export default function playingReducer(state = {}, action) {
  switch (action.type) {
    case 'START_PLAYING':
      return Object.assign({}, state, {
        on: true,
        beat_index: 0,
        interval: action.interval
      });
    case 'TICK':
      if (state.interval !== null) {
        let newBeat_index  = (state.beat_index + 1) % 16;
        return Object.assign({}, state, { beat_index: newBeat_index });
      } else {
        return Object.assign({}, state, { beat_index: 0 });
      }
    case 'STOP_PLAYING':
      return Object.assign({}, state, {
        interval: null,
        on: false
      });
  }
  return state;
};
