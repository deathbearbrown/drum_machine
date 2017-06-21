/*
 * Middlewares for async state. Regular reducers for syncronous state.
 */

export const timerMiddleware = store => next => action => {
  if (action.type === 'START_PLAYING') {
    /* NOTE:  setInterval is not the best solution for making accurate music with JS
      the timing is crummy and setInterval can get delayed.
      It would be better to use AudioContext
      https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
      See:
      https://www.html5rocks.com/en/tutorials/audio/scheduling/
    */
    const tempo = store.getState().bpm;
    const milliseconds = 1000;
    const eigthNoteTime = ((60 * milliseconds) / tempo) / 2;
    action.interval = setInterval(() => store.dispatch({ type: 'TICK'}), eigthNoteTime);
  } else if (action.type === 'STOP_PLAYING') {
    clearInterval(store.getState().playing.interval);
  }
  next(action);
};

