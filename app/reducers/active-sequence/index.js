export default function activeSequenceReducer(state = null, action) {
  switch (action.type) {
    case 'UPDATE_ACTIVE_SEQUENCE':
      return action.sequenceId;
    default:
      return state;
  }
}
