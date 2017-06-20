export default function playingReducer(state = 128, action) {
  switch (action.type) {
    case 'UPDATE_BPM':
      return action.bpm;
    default:
      return state;
  }
}
