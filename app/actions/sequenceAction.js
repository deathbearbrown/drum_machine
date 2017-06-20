/**
 * Update the on/off state of a beat in a sequence
 * @param  {String} sequence  - sequence id
 * @param  {String} beat_type - snare, open_hat, closed_hat, or kick
 * @param  {Integer} index    - index of the beat
 * @param  {Boolean} status   - on or off state
 * @return {Object}           - Redux action object
 */
//NOTE I would normally never have this many arguments. I feel bad.
export function updateSequence(sequence, beat_type, index, status) {
  return {
    type: 'UPDATE_SEQUENCE',
    sequence,
    beat_type,
    index,
    status
  };
}
