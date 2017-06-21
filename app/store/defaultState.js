var defaultState = {
  // I iterated on how to structure the data for a bit.
  // I settled on making it rows instead of columns because of how I planned to render it.
  // Also by making it rows if you wanted to add a new pattern (is that the term?)
  // you'd just need to add a new array
  //
  // Since the state is either the box is on or off, I am using the index as the ID and 0 and 1
  // for truthy or falsy.
  sequences: {
    'unique_id_1' : {
      kick: [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      open_hat: [ 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      closed_hat: [ 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0],
      snare: [ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0]
    },
    'unique_id_2' : {
      kick: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      open_hat: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      closed_hat: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      snare: [ 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0]
    },
    'unique_id_3' : {
      kick: [ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
      open_hat: [ 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      closed_hat: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      snare: [ 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0]
    }
  },
  active_sequence: 'unique_id_1',
  playing: {
    on: false,
    beat_index: 0,
    interval: null
  },
  bpm: 128
};

export default defaultState;
