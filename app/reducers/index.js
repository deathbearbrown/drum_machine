import {combineReducers} from 'redux';
import sequences from './sequences';
import playing from './playing';

import active_sequence from './active-sequence';
import bpm from './bpm';

const rootReducer = combineReducers({
  sequences,
  playing,
  active_sequence,
  bpm
});

/**
 * fetching helpers
 */

/**
 * get isPlaying status
 * @param  {Boolean}  state - state.playing
 * @return {Boolean}  status
 */
export function isPlaying(state){
  return state.playing.on;
}

/**
 * get current sequence
 * @param  {String} state - state.current_sequence
 * @return {String} sequence name
 */
export function activeSequence(state){
  return state.active_sequence;
}

export function getActiveSequence(state){
  let active = state.active_sequence;
  return state.sequences[active];
}

export function getBPM(state){
  return state.bpm;
}

export function getAllSequences(state){
  return state.sequences;
}

export function getAllSequenceNames(state){
  return Object.keys(state.sequences);
}

export function getKicks(state, sequence){
  return state.sequences[sequence].kick;
}

export function getOpenHats(state, sequence){
  return state.sequences[sequence].open_hat;
}

export function getSnares(state, sequence){
  return state.sequences[sequence].snare;
}

export function getClosedHats(state,sequence){
  return state.sequences[sequence].closed_hat;
}

export default rootReducer;
