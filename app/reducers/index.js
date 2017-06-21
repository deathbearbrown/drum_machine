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
 * Fetching helpers
 * If I ever decide to change the structure of the
 * store object, I only need to update the fetching functions here instead of
 * the components.  It's very helpful.
 * On a huge project I would put these in their corresponding reducer folder and
 * import them in this file.
 */

export function isPlaying(state){
  return state.playing.on;
}

export function getBeatIndex(state){
  return state.playing.beat_index;
}

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
