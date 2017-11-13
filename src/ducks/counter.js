// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = true;

const initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
}
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';
//action creators
export function increment(amount) {
    return {
        type: INCREMENT,
        amount: amount
    }
}
export function decrement(amount) {
    return {
        type: DECREMENT,
        amount: amount
    }
}
export function undo(){
    return {
        type: UNDO
    }
}
export function redo(){
    return {
        type: REDO
    }
}
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, { currentValue: state.currentValue + action.amount,
                                              futureValues: [],
                                              previousValues: [state.currentValue, ...state.previousValues] })
        case DECREMENT:
            return Object.assign({}, state, { currentValue: state.currentValue + action.amount,
                                              futureValues: [],
                                              previousValues: [state.currentValue, ...state.previousValues] })
        case UNDO: 
            return Object.assign({}, state, { currentValue: state.previousValues[0], 
                                              futureValues: [state.currentValue, ...state.futureValues],
                                              previousValues: state.previousValues.slice(1)})
        case REDO:
            return Object.assign({}, state, { currentValue: state.futureValues[0],
                                              futureValues: state.futureValues.slice(1),
                                              previousValues: [state.currentValue, ...state.previousValues]})

        default:
            return state;
    }
}
