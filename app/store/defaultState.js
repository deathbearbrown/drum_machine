var defaultState = {
  // I iterated on how to structure the data for a bit.  The reason I ended on this is because
  // I knew I wanted to render the html in rows instead of columns.
  // Rows, seemed to me, without any user research so I could be wrong,
  // the better choice for accessiblity . e.g. - focus kick, cycle to # beat
  // Where columns (which would look like objects with true/false status for each beat type) would
  // be a slightly more awkward interaction. Also adding new beat types would be more difficult.
  // By making rows if you wanted to add a new bass drum (is that a thing?) you'd just need to add
  // a new array
  //
  // Since the state is either the box is on or off, I am using the index as the ID and 0 and 1
  // for truthy or falsy
  //
  // I am using redux for the state that would get fetched and saved to the server
  // application state like Play/Pause I am setting in the parent component
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
