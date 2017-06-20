export const timerMiddleware = store => next => action => {
  if (action.type === 'START_PLAYING') {
    // this is where the BPM code needs to live
    const tempo = store.getState().bpm;
    const milliseconds = 1000;
    const eigthNoteTime = ((60 * milliseconds) / tempo) / 2;
    action.interval = setInterval(() => store.dispatch({ type: 'TICK'}), eigthNoteTime);
  } else if (action.type === 'STOP_PLAYING') {
    clearInterval(store.getState().playing.interval);
  }
  next(action);
};

